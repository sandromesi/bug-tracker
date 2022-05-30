from django.shortcuts import get_object_or_404
from rest_framework.decorators import action
from rest_framework import viewsets
from .models import Project
from .models import Issue
from .models import Comment
from .serializers import ProjectSerializer
from .serializers import IssueSerializer
from .serializers import CommentSerializer
from rest_framework.response import Response

class ProjectsView(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class IssuesView(viewsets.ModelViewSet):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer

    @action(methods=['get'], detail=False)
    def comments(self, request, id):

        comments = Comment.objects.filter(issue=id)
        serializer_class = CommentSerializer(comments, many=True)
        return Response(serializer_class.data)

class CommentsView(viewsets.ModelViewSet):
    #queryset = Comment.objects.filter(issue=15)
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer



