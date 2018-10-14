from rest_framework import serializers
from .models import Chisme

class ChismeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chisme
        fields = ("pk", "title", "description", "creation_datetime")