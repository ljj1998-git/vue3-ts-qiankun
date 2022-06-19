from django.urls import path, include
from rest_framework.routers import SimpleRouter
from web import views
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
schema_view = get_schema_view(
    openapi.Info(
        title='刘俊杰的接口文档',
        default_version='v1.0.0',
        description='描述信息',
        terms_of_service='',
        contact=openapi.Contact(email="1029680498@qq.com"),
        license=openapi.License(name='协议版本')
    ),
    public=True
)

urlpatterns = [
    path('docs/', schema_view.with_ui('swagger',
         cache_timeout=0), name='schema-swagger')
]

router = SimpleRouter()
router.register('login', views.LoginModelViewSet, 'login')
urlpatterns += router.urls
