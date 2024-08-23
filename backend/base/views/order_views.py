from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Product, Order, OrderItem, ShippingAddress
from base.serializers import ProductSerializer

from rest_framework import status

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems( request):
  # we get that from the json token
  user = request.user
  data = request.data
  orderItems = data['orderItems']

  if orderItems and len(orderItems) == 0:
    return Response({'detail': 'No Order Items'}, status=status.HTTP_400_BAD_REQUEST)
  else:
    # (1) Create order
    order = Order.objects.create(
      user=user,
      paymentMethod=data['paymentMethod'],
      taxPrice=data['taxPrice'],
      shippingPrice=data['shippingPrice'],
      totalPrice=data['totalPrice']
    )
    # (2) Create shipping address
    # (3) Create order items and set order to orderItem relationship
    # (4) Update countInStock
  return Response('ORDER')