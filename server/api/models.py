from django.db import models
from django.utils.text import slugify

class Project(models.Model):
    id = models.AutoField(primary_key=True)
    slug = models.SlugField(blank=True ,max_length = 50)
    name = models.CharField(unique=True, max_length=200)
    description = models.CharField(max_length=200)
    author = models.CharField(max_length=200, null=True, blank=True)
    creation_date = models.DateField(auto_now=True)

    def save(self, *args, **kwargs):
        self.slug =slugify(self.name).upper()
        super().save(*args, **kwargs)

class Issue(models.Model):
    id = models.AutoField(primary_key=True)
    issue_number = models.CharField(blank=True ,max_length=200)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    status = models.CharField(blank=True ,max_length=200)
    project_id = models.ForeignKey(to='Project', null=True, blank=True,on_delete=models.SET_NULL)
    author = models.CharField(max_length=200, null=True, blank=True)
    comments = models.ForeignKey(to='Comment', null=True, blank=True,on_delete=models.SET_NULL)
    creation_date = models.DateField(auto_now=True)
    due_date = models.DateField(null=True, blank=True)

class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.CharField(max_length=200)
    author = models.CharField(max_length=200, null=True, blank=True)
    creation_date = models.DateField(auto_now=True)
