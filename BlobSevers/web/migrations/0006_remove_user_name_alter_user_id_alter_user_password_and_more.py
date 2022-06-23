# Generated by Django 4.0.4 on 2022-06-16 02:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0005_user_tel'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='name',
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.AutoField(help_text='主键id', primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(help_text='密码', max_length=30),
        ),
        migrations.AlterField(
            model_name='user',
            name='tel',
            field=models.CharField(help_text='电话号码', max_length=15, null=True),
        ),
        migrations.CreateModel(
            name='UserInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(help_text='用户昵称', max_length=30)),
                ('user_id', models.ForeignKey(help_text='(外键)用户id', on_delete=django.db.models.deletion.CASCADE, to='web.user')),
            ],
        ),
    ]