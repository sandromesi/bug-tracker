from django.db import models
from django.utils.text import slugify

class Project(models.Model):
    id = models.AutoField(primary_key=True)
    slug = models.SlugField(max_length = 50, null=True, blank=True)
    name = models.CharField(unique=True, max_length=200)
    description = models.CharField(max_length=200, blank=True, null=True)
    author = models.CharField(max_length=200)
    creation_date = models.DateField(auto_now=True, editable=False)

    def save(self, *args, **kwargs):
        self.slug =slugify(self.name).upper()
        super().save(*args, **kwargs)

class Issue(models.Model):
    id = models.AutoField(primary_key=True)
    issue_number = models.CharField(null=True, blank=True ,max_length=200)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200, blank=True, null=True)
    status = models.CharField(max_length=200, default='To Do', blank=True, null=True)
    project = models.ForeignKey(to='Project', null=True, on_delete=models.SET_NULL)
    author = models.CharField(max_length=200)
    creation_date = models.DateField(auto_now=True, editable=False)
    due_date = models.DateField()

    def save(self, *args, **kwargs):
        self.creation_date = models.DateField(auto_now=True)
        super().save(*args, **kwargs)

class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    issue = models.ForeignKey(to='Issue', null=True, on_delete=models.SET_NULL)
    creation_date = models.DateField(auto_now=True, editable=False)

    def save(self, *args, **kwargs):
        self.creation_date = models.DateField(auto_now=True)
        super().save(*args, **kwargs)
