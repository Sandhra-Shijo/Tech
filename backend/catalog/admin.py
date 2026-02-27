from django.contrib import admin
from .models import Brand, Product


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'brand')
    list_filter = ('brand',)
    search_fields = ('name',)


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)