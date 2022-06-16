from web.models import User
from django.shortcuts import render


# Create your views here.
from rest_framework import viewsets

from web.models import Books
from web.serializer import BooksSerializer, UserSerializer


class BooksViewSet(viewsets.ModelViewSet):
    queryset = Books.objects.all()
    serializer_class = BooksSerializer


class Login(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
