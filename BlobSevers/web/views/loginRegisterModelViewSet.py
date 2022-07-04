
from cgi import print_arguments
import json
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.response import Response
from sqlalchemy import null
from web.utils.response import response
from rest_framework.decorators import action
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto.Random import get_random_bytes
import codecs
import base64

from web.models import User
from web.serializers.userSerializer import UserSerializer


class LoginRegisterModelViewSet(ViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @swagger_auto_schema(method='post', operation_summary='用户注册', request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        required=['tel', 'password'],
        properties={
            'tel': openapi.Schema(type=openapi.TYPE_STRING, description='手机号'),
            'password': openapi.Schema(type=openapi.TYPE_STRING, description='密码'),
        },
    ), responses={200: openapi.Response('response description', UserSerializer)})
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
            serializer = UserSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(status=200, data=response().success({'type': 'success', 'msg': '注册成功!'}))
            else:
                return Response(status=200, data=response().success({'type': 'error', 'msg': '输入内容不合法!'}))

    @swagger_auto_schema(
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
            'response description', UserSerializer)}
    )
    @action(methods=['post'], detail=False, url_path='login', url_name='用户登录')
    def login(self, request):
        datas = request.data
        key = b'1234567890123456'  # 密钥
        ciphertext = 'U2FsdGVkX1+dpnrGzALIPzO6IuYhc/kLe1tYuwtPwPk='

        data = base64.b64decode(ciphertext)
        cipher = AES.new(key=key, mode=AES.MODE_ECB)
        decrypt_data = cipher.decrypt(data)
        # decrypt_data = unpad(decrypt_data, 16, style="pkcs7")
        # base64.b64encode()
        print(decrypt_data)
        print(codecs.decode(base64.b64encode(decrypt_data)))
        # print(codecs.decode(decrypt_data))

        # def D_BASE64(origStr):
        #     if(len(origStr) % 3 == 1):
        #         origStr += "=="
        #     elif(len(origStr) % 3 == 2):
        #         origStr += "="
        #     dStr = base64.b64decode(origStr)
        #     return dStr
        # # decrypt_data = unpad(decrypt_data, 16, style="pkcs7")
        # print(decrypt_data.decode())

        return Response(status=200, data=response().success({"aa": 'dad'}))
