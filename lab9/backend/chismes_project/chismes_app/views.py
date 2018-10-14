from rest_framework import viewsets
from .models import Chisme
from .serializers import ChismeSerializer
from rest_framework.decorators import action

# Create your views here.

class ChismeModelViewSet(viewsets.ModelViewSet):
    queryset = Chisme.objects.all()
    serializer_class = ChismeSerializer
    
