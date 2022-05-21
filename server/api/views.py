from rest_framework import viewsets
from .models import Project
from .models import Issue
from .models import Comment
from .serializers import ProjectSerializer
from .serializers import IssueSerializer
from .serializers import CommentSerializer

class ProjectView(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class IssueView(viewsets.ModelViewSet):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer

class CommentView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
