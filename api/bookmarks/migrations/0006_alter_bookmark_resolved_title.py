# Generated by Django 5.0.3 on 2024-03-31 18:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookmarks', '0005_alter_bookmark_updated'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookmark',
            name='resolved_title',
            field=models.TextField(null=True),
        ),
    ]