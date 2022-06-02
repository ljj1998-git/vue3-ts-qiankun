from pyexpat import model
from django.db import models

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