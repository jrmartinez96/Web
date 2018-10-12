"""."""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from chismes_app import views as chisme_views

# Router creation
router = DefaultRouter()

# Client
router.register(
    r'chismes',
    chisme_views.ChismeModelViewSet
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(router.urls))
]
