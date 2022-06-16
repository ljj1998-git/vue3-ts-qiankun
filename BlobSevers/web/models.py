from pyexpat import model
from django.db import models
from sqlalchemy import true

# Create your models here.
class Books(models.Model):
    name = models.CharField(max_length=30)
    author = models.CharField(max_length=30, blank=True, null=True)
    number = models.CharField(max_length=30, blank=True, null=True)

class Navbar(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    author = models.CharField(max_length=30, blank=True, null=True)
    number = models.CharField(max_length=30, blank=True, null=True)

# 用户表
class User(models.Model):
    id = models.AutoField(primary_key=True,help_text='主键id')
    password = models.CharField(max_length=30,help_text='密码')
    tel = models.CharField(max_length=15,null=True,help_text='电话号码')
# 用户信息表
class UserInfo(models.Model):
    user_id = models.ForeignKey('User',to_field='id',on_delete=models.CASCADE,help_text='(外键)用户id')
    user_name = models.CharField(max_length=30,help_text='用户昵称')