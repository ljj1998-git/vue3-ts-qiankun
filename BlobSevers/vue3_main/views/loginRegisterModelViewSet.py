
from django.test import tag
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.response import Response
from sqlalchemy import null
from vue3_main.utils.response import response
from rest_framework.decorators import action
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema

from vue3_main.models import User
from vue3_main.serializers.userSerializer import vue3_main_UserSerializer

from vue3_main.utils.jwt import get_jwt_token, decode_jwt_token
from vue3_main.utils.md5 import get_md5_salt


class LoginRegisterModelViewSet(ViewSet):
    queryset = User.objects.all()
    serializer_class = vue3_main_UserSerializer

    @swagger_auto_schema(
        tags=['主应用'],
        method='post',
        operation_summary='用户注册',
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=['tel', 'password'],
            properties={
                'tel': openapi.Schema(type=openapi.TYPE_STRING, description='手机号'),
                'password': openapi.Schema(type=openapi.TYPE_STRING, description='密码'),
            },
        ), responses={200: openapi.Response('response description', vue3_main_UserSerializer)})
    @action(methods=['post'], detail=False, url_path='register', url_name='注册账号')
    def register(self, request):
        # 注册 传入的值 {tel:'',password:''}
        tel = request.data.get('tel', None)
        password = request.data.get('password', None)
        # 1.查询是否存在当前用户
        filterObj = User.objects.filter(tel=tel).first()
        # 2 存在,提示用户已存在
        if filterObj:
            return Response(status=200, data=response().success({'type': 'error', 'msg': '当前手机已注册!'}))
        # 3 不存在,新增
        else:
            # 加盐
            password = get_md5_salt(password)
            serializer = vue3_main_UserSerializer(
                data={"tel": tel, "password": password})
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
            'response description', vue3_main_UserSerializer)}
    )
    @action(methods=['post'], detail=False, url_path='login', url_name='用户登录')
    def login(self, request):

        tel = request.data.get('tel', None)
        password = request.data.get('password', None)

        if(tel):
            # 查询用户是否存在
            filterObj = User.objects.filter(tel=tel).first()
            # 存在
            if filterObj:
                newPassword = get_md5_salt(password)
                print(newPassword, filterObj.password)
                if newPassword == filterObj.password:
                    token = get_jwt_token(tel, 60)
                    return Response(status=200, data=response().success({"token": token}))
                else:
                    return Response(status=200, data=response().error({}, message='密码错误!'))
            # 不存在
            else:
                return Response(status=200, data=response().error({}, message='当前用户不存在'))
        else:
            return Response(status=200, data=response().error({}, message='请输入手机号!'))
