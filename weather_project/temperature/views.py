from django.shortcuts import render
import requests
from django.http import JsonResponse
from decouple import config

# Create your views here.
def get_temperature(request):
    api_key = config('YOUR_API_KEY')
    location = 'Nashik, IN'
    url = f'https://api.openweathermap.org/data/2.5/weather?q={location}&appid={api_key}&units=metric'
    
    response = requests.get(url)
    data = response.json()
    
    if 'main' in data:
        temp = data['main']['temp']
        city_name = data['name']
        return JsonResponse({'temperature': temp, 'city' : city_name})
    else:
        return JsonResponse({'error': 'unable to fetch temperature'}, status=500)