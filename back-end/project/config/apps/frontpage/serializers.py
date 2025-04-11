from rest_framework import serializers
from apps.tour.models import Attraction
from apps.tour.models import Tour
from apps.faq.models import FAQ
from .models import HeaderImage 

class AttractionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attraction
        fields = ['id', 'attraction_name', 'description', 'location', 'city', 'image']

class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = ['id', 'title', 'start_date', 'end_date', 'city', 'image']

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = ['question', 'answer']


# 👇 سریالایزر جدید برای عکس‌های هدر
class HeaderImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeaderImage
        fields = ['id', 'image', 'alt_text']
