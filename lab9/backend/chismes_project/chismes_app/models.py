from django.db import models
from django.utils import timezone

# Create your models here.

class Chisme(models.Model):
    title = models.CharField(max_length=75)
    description = models.CharField(max_length=500)
    creation_datetime = models.DateTimeField(default=timezone.now)
