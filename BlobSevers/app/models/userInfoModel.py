
from django.db import models


class UserInfo(models.Model):
    user_id = models.ForeignKey(
        'User', to_field='id', on_delete=models.CASCADE, help_text='(外键)用户id')
    user_name = models.CharField(max_length=30, help_text='用户昵称')

    class Meta:
        db_label = 'UserInfo'
