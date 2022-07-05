from rest_framework import serializers
from app.models.userModel import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
