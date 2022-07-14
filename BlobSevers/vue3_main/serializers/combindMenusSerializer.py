# common
from dataclasses import fields
from rest_framework import serializers
# model
from vue3_main.models import Menu_Tree_Info

class combindMenusSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    
    def get_author(self,obj):
        print(obj)

    class Meta:
        model = Menu_Tree_Info
        fields = '__all__'