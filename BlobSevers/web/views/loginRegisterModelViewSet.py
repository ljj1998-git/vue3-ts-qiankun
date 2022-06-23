
import json
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.response import Response
from web.utils.response import response
from rest_framework.decorators import action
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema

from web.models import User
from web.serializers.userSerializer import UserSerializer


class LoginRegisterModelViewSet(ViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    request_body = openapi.Schema(
        type=openapi.TYPE_OBJECT,
        required=['tel','password'],
        properties={
            'tel': openapi.Schema(type=openapi.TYPE_STRING, description='账号'),
            'password': openapi.Schema(type=openapi.TYPE_STRING, description='密码'),
        },
        
    )
    user_response = openapi.Response('response description', UserSerializer)

    @swagger_auto_schema(method='post', operation_summary='用户注册', request_body=request_body,responses={200: user_response})
    @action(methods=['post'], detail=False, url_path='register', url_name='注册账号')
    def register(self, request):
        return response({"msg": '注册成功'})


    @action(methods=['post'], detail=False, url_path='login', url_name='用户登录')
    def login(self, request):
        datas = request.body
        print(json.loads(datas))
        return Response({"msg": '扥路成功'})
