# common
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
# model

# serializer
from vue3_main.serializer import vue3_main_menusSerializer

# service
from vue3_main.service import combindedRoutes
# util
from vue3_main.utils.response import response

class menusModelViewSet(ViewSet):

    @swagger_auto_schema(
        tags=['主应用'],
        method='get',
        operation_summary='获取对应系统菜单信息',
        manual_parameters=[openapi.Parameter(name='systemId', in_=openapi.IN_QUERY, description="系统id",type=openapi.TYPE_STRING)],
        responses={200: openapi.Response('response description', vue3_main_menusSerializer)})
    @action(methods=['get'], detail=False, url_path='menus', url_name='获取系统对应菜单')
    def getMenusBySystemId(self, request):
        systemId = request.GET.get('systemId')
        if(systemId):
            menus = combindedRoutes('',systemId)
            return Response(status=200, data=response().success({"menus":menus},message='请求成功'))
        else:
            return Response(status=200, data=response().error({},message='系统id不能为空!'))