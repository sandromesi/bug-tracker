# Generated by Django 4.0.4 on 2022-05-27 15:01

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_remove_issue_comments_comment_issue_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='creation_date',
            field=models.DateField(auto_now=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='issue',
            name='creation_date',
            field=models.DateField(auto_now=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='project',
            name='creation_date',
            field=models.DateField(auto_now=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
