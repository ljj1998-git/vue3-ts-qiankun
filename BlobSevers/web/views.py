from django.shortcuts import render


# Create your views here.
from rest_framework import viewsets

from web.models import Books
from web.serializer import BooksSerializer
class BooksViewSet(viewsets.ModelViewSet):
    queryset = Books.objects.all()
    serializer_class = BooksSerializer