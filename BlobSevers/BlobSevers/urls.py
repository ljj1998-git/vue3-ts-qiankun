"""BlobSevers URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import email
from pydoc import describe
from turtle import title
from unicodedata import name
from django.urls import path, include

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
    path('app/', include('app.urls')),
    path('vue3_main/', include('vue3_main.urls')),
    path('docs/', schema_view.with_ui('swagger',cache_timeout=0), name='schema-swagger')
]
