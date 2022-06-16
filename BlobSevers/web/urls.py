from django.urls import path, include
from rest_framework.routers import DefaultRouter

from web import views


router = DefaultRouter()
router.register('user', views.Login)

urlpatterns = [
    path('', include(router.urls)),
]
