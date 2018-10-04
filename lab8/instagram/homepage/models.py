from django.db import models

# Create your models here.
from django.contrib.auth.models import User

class Post(models.Model):
	title = models.CharField(max_length=50)
	description = models.CharField(max_length=50)
	created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_creator')
	likes = models.ManyToManyField(User, through='PostUserLike', related_name='user_like')

class PostUserLike(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	post = models.ForeignKey(Post, on_delete=models.CASCADE)
	creation_datetime = models.DateTimeField(auto_now=True)