# Generated by Django 5.1.7 on 2025-04-03 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tour', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tour',
            name='tour_time',
        ),
        migrations.AddField(
            model_name='attraction',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='attractions/'),
        ),
        migrations.AddField(
            model_name='tour',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='tours/'),
        ),
        migrations.AddField(
            model_name='tour',
            name='related_tours',
            field=models.ManyToManyField(blank=True, to='tour.tour'),
        ),
    ]
