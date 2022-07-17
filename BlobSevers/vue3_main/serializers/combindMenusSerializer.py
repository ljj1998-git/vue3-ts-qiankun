# common
from dataclasses import fields
from rest_framework import serializers
# model
from vue3_main.models import Menu_Tree_Info, Menus
# serializer
from vue3_main.serializer import vue3_main_menusSerializer


class combindMenusSerializer(serializers.ModelSerializer):
    # menuId = vue3_main_menusSerializer()
    name = serializers.CharField(source="menuId.name")
    path = serializers.CharField(source="menuId.path")
    url = serializers.CharField(source="menuId.url")

    class Meta:
        model = Menu_Tree_Info
        fields = ["id",  "name", "path", "url", "level", "ancestorId"]
