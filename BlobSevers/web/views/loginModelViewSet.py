
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action

from web.models import User
from web.serializers.userSerializer import UserSerializer


class LoginModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(methods=['get'], detail=False, url_path='demo')
    def login(self, request):

        return Response({"msg": '扥路成功'})
