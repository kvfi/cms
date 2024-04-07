import uuid

from django.db import models

from cm.models import BaseModel


class Bookmark(BaseModel):
    class Meta:
        db_table = 'bookmark'
        ordering = ['-saved_on']

    uuid = models.UUIDField(default=uuid.uuid4, unique=True, null=True, db_index=True, editable=False)
    url = models.TextField(null=True)
    resolved_title = models.TextField(null=True)
    resolved_status = models.IntegerField()
    resolved_description = models.TextField(null=True)
    saved_on = models.DateTimeField(auto_now_add=True, editable=False)
    updated = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return self.uuid, self.url or 'Unresolved URL'


class BookmarkTag(BaseModel):
    class Meta:
        db_table = 'bookmark_tag'
        ordering = ['name']

    name = models.CharField(unique=True, db_index=True, editable=False)
    bookmarks = models.ManyToManyField(Bookmark)

    def __str__(self):
        return self.name


class Domain(BaseModel):
    class Meta:
        db_table = 'domain'
        ordering = ['name']

    uuid = models.UUIDField(default=uuid.uuid5, unique=True, db_index=True, editable=False)
    name = models.CharField(unique=True, db_index=True, editable=False)
    bookmarks = models.ManyToManyField(Bookmark)
