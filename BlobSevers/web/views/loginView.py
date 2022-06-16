
from rest_framework import viewsets, serializers
from web.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class Login(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
