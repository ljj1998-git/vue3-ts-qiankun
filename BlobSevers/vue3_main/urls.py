from django.urls import path, include
from rest_framework.routers import SimpleRouter
from vue3_main import views

urlpatterns = []
router = SimpleRouter()
router.register('aloginRegister', views.LoginRegisterModelViewSet, 'aloginRegister')
urlpatterns += router.urls
