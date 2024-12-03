from django.urls import path
from . import views

urlpatterns = [
    path('api/temperature/', views.get_temperature, name='get_temperature'),
]
