from django.urls import path, include
from rest_framework.routers import SimpleRouter
from app import views

urlpatterns = []
router = SimpleRouter()
router.register('loginRegister', views.LoginRegisterModelViewSet, 'loginRegister')
urlpatterns += router.urls
