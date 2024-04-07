# Generated by Django 5.0.3 on 2024-03-31 19:17

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookmarks', '0007_alter_bookmark_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookmark',
            name='uuid',
            field=models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, null=True, unique=True),
        ),
    ]
