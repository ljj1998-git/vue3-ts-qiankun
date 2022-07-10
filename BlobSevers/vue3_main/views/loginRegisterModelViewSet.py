
from django.test import tag
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.response import Response
from sqlalchemy import null
from vue3_main.utils.response import response
from rest_framework.decorators import action
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema

from vue3_main.models import User
from vue3_main.serializers.userSerializer import UserSerializer2

from vue3_main.utils.jwt import get_jwt_token, decode_jwt_token


class LoginRegisterModelViewSet(ViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer2

    @swagger_auto_schema(
        tags=['主应用'],
        method='post',
        operation_summary='用户注册2',
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=['tel', 'password'],
            properties={
                'tel': openapi.Schema(type=openapi.TYPE_STRING, description='手机号'),
                'password': openapi.Schema(type=openapi.TYPE_STRING, description='密码'),
            },
        ), responses={200: openapi.Response('response description', UserSerializer2)})
    @action(methods=['post'], detail=False, url_path='register', url_name='注册账号')
    def register(self, request):
        # 注册 传入的值 {tel:'',password:''}
        tel = request.data.get('tel', None)
        # 1.查询是否存在当前用户
        filterObj = User.objects.filter(tel=tel).first()
        # 2 存在,提示用户已存在
        if filterObj:
            return Response(status=200, data=response().success({'type': 'error', 'msg': '当前手机已注册!'}))
        # 3 不存在,新增
        else:
            serializer = UserSerializer2(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(status=200, data=response().success({'type': 'success', 'msg': '注册成功!'}))
            else:
                return Response(status=200, data=response().success({'type': 'error', 'msg': '输入内容不合法!'}))

    @swagger_auto_schema(
        tags=['主应用'],
        method='post',
        operation_summary='用户登录',
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=['tel', 'password'],
            properties={
                'tel': openapi.Schema(type=openapi.TYPE_STRING, description='账号'),
                'password': openapi.Schema(type=openapi.TYPE_STRING, description='密码'),
            },
        ),
        responses={200: openapi.Response(
            'response description', UserSerializer2)}
    )
    @action(methods=['post'], detail=False, url_path='login', url_name='用户登录')
    def login(self, request):
        datas = request.data

        tel = request.data.get('username', None)
        password = request.data.get('password', None)
        if(tel):
            # 查询用户是否存在
            filterObj = User.objects.filter(tel=tel).first()
            if filterObj:
                if password == filterObj.password:
                    token = get_jwt_token(tel, 60)
                    print(decode_jwt_token(
                        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTczODYxNTgsImlhdCI6MTY1NzM4NjA5OCwiZGF0YSI6eyJ1c2VyTmFtZSI6IjEyMyJ9fQ.tlpxHXuhAQdRv52pGmVI50mEOwdQSj_3UMFbuQcAdac'))
                    return Response(status=200, data=response().success({"token": token}))
