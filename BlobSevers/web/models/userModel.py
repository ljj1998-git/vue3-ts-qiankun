
from django.db import models


class User(models.Model):
    id = models.AutoField(primary_key=True, help_text='主键id')
    password = models.CharField(max_length=200, help_text='密码')
    tel = models.CharField(max_length=15, null=True, help_text='电话号码')
