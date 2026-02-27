from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters

from .models import Product
from .serializers import ProductSerializer


class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['brand']
    search_fields = ['name']


class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer