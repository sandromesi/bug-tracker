from rest_framework import serializers
from .models import Project
from .models import Issue
from .models import Comment

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id',
                'slug', 
                'name', 
                'description',
                'author',
                'creation_date')

class IssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = ('id',
                'issue_number', 
                'title', 
                'description', 
                'status',
                'project',
                'author',
                'creation_date',
                'due_date')
    
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id',
                'text', 
                'author',
                'issue',
                'creation_date')