from rest_framework import viewsets
from .models import Chisme
from .serializers import ChismeSerializer

# Create your views here.

class ChismeModelViewSet(viewsets.ModelViewSet):
    queryset = Chisme.objects.all()
    serializer_class = ChismeSerializer