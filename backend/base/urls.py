from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
  path('users/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('', views.getRoutes, name='getRoutes'),
  path('products/', views.getProducts, name='getProducts'),
  path('products/<str:pk>/', views.getProduct, name='getProduct'),
]