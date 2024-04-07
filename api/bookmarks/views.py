from rest_framework import viewsets

from .models import Bookmark
from .serializers import BookmarkSerializer


class BookmarkViewSet(viewsets.ModelViewSet):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer
