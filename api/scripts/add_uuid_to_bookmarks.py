import uuid

from bookmarks.models import Bookmark


def run():
    bookmarks = Bookmark.objects.all()
    for b in bookmarks:
        b.uuid = uuid.uuid4()
        b.save()


if __name__ == '__main__':
    run()
