# Generated by Django 4.0.4 on 2022-07-12 02:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(help_text='主键id', primary_key=True, serialize=False)),
                ('password', models.CharField(help_text='密码', max_length=200)),
                ('tel', models.CharField(help_text='电话号码', max_length=15, null=True)),
            ],
        ),
    ]
