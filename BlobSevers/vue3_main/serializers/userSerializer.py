from rest_framework import serializers
from vue3_main.models.userModel import User


class UserSerializer2(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'