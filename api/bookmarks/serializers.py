from rest_framework import serializers

from .models import Bookmark


class BookmarkSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Bookmark
        fields = ['uuid', 'resolved_title', 'url', 'resolved_status', 'saved_on']
