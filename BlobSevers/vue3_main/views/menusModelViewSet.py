# common
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
# model

# service
from vue3_main.service import combindedRoutes

# util

# class menusModelViewSet(ViewSet):

#     @swagger_auto_schema(
#         tags=['主应用'],
#         method='get',
#         operation_summary='获取所有菜单信息',
#         request_body=openapi.Schema(
#             type=openapi.TYPE_OBJECT,
#             required=['tel', 'password'],
#             properties={
#                 'tel': openapi.Schema(type=openapi.TYPE_STRING, description='手机号'),
#                 'password': openapi.Schema(type=openapi.TYPE_STRING, description='密码'),
#             },
#         ), responses={200: openapi.Response('response description', vue3_main_UserSerializer)})
#     @action(methods=['post'], detail=False, url_path='register', url_name='注册账号')
#     def register(self, request):