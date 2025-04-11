# Generated by Django 5.1.7 on 2025-04-05 14:02

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tour', '0002_remove_tour_tour_time_attraction_image_tour_image_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='attraction',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='tour',
            name='facilities',
        ),
        migrations.RemoveField(
            model_name='tour',
            name='tour_guides',
        ),
        migrations.AddField(
            model_name='attraction',
            name='built_date',
            field=models.DateField(blank=True, null=True, verbose_name='تاریخ ساخت مکان تاریخی'),
        ),
        migrations.AddField(
            model_name='tour',
            name='company_address',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='tour',
            name='company_email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='tour',
            name='company_name',
            field=models.CharField(default='company-x', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='tour',
            name='company_phone',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='tour',
            name='company_website',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='tour',
            name='daily_schedule',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='tour',
            name='tour_guides_info',
            field=models.TextField(blank=True, help_text='نام و تخصص و شغل راهنمایان تور را وارد کنید.', null=True),
        ),
        migrations.AddField(
            model_name='tour',
            name='tour_manager',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='managed_tours', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='tour',
            name='tourism_services',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='tour',
            name='transportation',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='tour',
            name='travel_insurance',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='tour',
            name='related_tours',
            field=models.ManyToManyField(blank=True, help_text='تورهایی که از نظر مقصد، قیمت یا خدمات مشابه این تور هستند.', related_name='similar_tours', to='tour.tour'),
        ),
    ]
