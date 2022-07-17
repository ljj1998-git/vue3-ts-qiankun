from rest_framework import serializers
from vue3_main.models import User, Menus, Menu_Tree_Info, System

# 角色表 序列化


class vue3_main_UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

# 菜单表 序列化


class vue3_main_menusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menus
        fields = '__all__'

# 菜单关联表 序列化


class vue3_main_menusTreeInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu_Tree_Info
        fields = '__all__'

# 系统表 序列化


class vue3_main_SystemSerializer(serializers.ModelSerializer):
    class Meta:
        model = System
        fields = ["id", "name"]
