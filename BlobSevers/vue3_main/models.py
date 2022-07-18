
from os import system
from django.db import models

# 用户表


class User(models.Model):
    id = models.AutoField(primary_key=True, help_text='主键id')
    password = models.CharField(max_length=200, help_text='密码')
    tel = models.CharField(max_length=15, null=True, help_text='电话号码')

    class Meta:
        app_label = 'vue3_main'

# 菜单表


class Menus(models.Model):
    id = models.AutoField(primary_key=True, help_text='主键id')
    name = models.CharField(max_length=255, null=True, help_text='菜单名称')
    path = models.CharField(max_length=255, null=True, help_text='菜单组件路径')
    url = models.CharField(max_length=255, null=True, help_text='菜单路由')

    class Meta:
        app_label = 'vue3_main'

# 菜单绑定表


class Menu_Tree_Info(models.Model):
    id = models.AutoField(primary_key=True, help_text='主键id')
    menuId = models.ForeignKey(to=Menus, to_field='id', null=True,
                               on_delete=models.CASCADE, db_constraint=False, help_text='菜单id')
    ancestorId = models.CharField(
        max_length=255, null=True, help_text='父级和祖父级ID')
    level = models.CharField(max_length=255, null=True, help_text='层级')
    systemId = models.CharField(max_length=11,help_text='系统id')

    class Meta:
        app_label = 'vue3_main'

# 所有系统名称表


class System(models.Model):
    id = models.AutoField(primary_key=True, help_text='主键id')
    name = models.CharField(max_length=100, help_text='系统名称')
    user = models.ManyToManyField(User, help_text='关联用户表')
    menuId = models.ForeignKey(to=Menus,to_field='id',on_delete=models.CASCADE,verbose_name='外键关联菜单表')
    class Meta:
        app_label = 'vue3_main'