from django.urls import path, include
from . import views
from rest_framework import routers

#https://www.codingforentrepreneurs.com/blog/how-django-urls-work-with-regular-expressions/

router = routers.DefaultRouter()
router.register('projects', views.ProjectsView)
router.register('issues', views.IssuesView)
router.register('issues/(?P<id>\d+)', views.IssuesView, basename='comments')
router.register('comments', views.CommentsView)

""" <URLPattern '^issues/$' [name='issue-list']>
<URLPattern '^issues\.(?P<format>[a-z0-9]+)/?$' [name='issue-list']>

<URLPattern '^issues/comments/$' [name='issue-comments']>
<URLPattern '^issues/comments\.(?P<format>[a-z0-9]+)/?$' [name='issue-comments']>

<URLPattern '^issues/(?P<pk>[^/.]+)/$' [name='issue-detail']>
<URLPattern '^issues/(?P<pk>[^/.]+)\.(?P<format>[a-z0-9]+)/?$' [name='issue-detail']> """


""" <URLPattern '^issues/(?P<id>\d+)/comments/$' [name='issue-comments-list']>
<URLPattern '^issues/(?P<id>\d+)/comments\.(?P<format>[a-z0-9]+)/?$' [name='issue-comments-list']>
<URLPattern '^issues/(?P<id>\d+)/comments/comments/$' [name='issue-comments-comments']>
<URLPattern '^issues/(?P<id>\d+)/comments/comments\.(?P<format>[a-z0-9]+)/?$' [name='issue-comments-comments']>
<URLPattern '^issues/(?P<id>\d+)/comments/(?P<pk>[^/.]+)/$' [name='issue-comments-detail']>
<URLPattern '^issues/(?P<id>\d+)/comments/(?P<pk>[^/.]+)\.(?P<format>[a-z0-9]+)/?$' [name='issue-comments-detail']> """

""" <URLPattern '^issues/(?P<id>\d+)/comments/$' [name='issue-list']>
<URLPattern '^issues/(?P<id>\d+)/comments\.(?P<format>[a-z0-9]+)/?$' [name='issue-list']>
<URLPattern '^issues/(?P<id>\d+)/comments/comments/$' [name='issue-comments']>
<URLPattern '^issues/(?P<id>\d+)/comments/comments\.(?P<format>[a-z0-9]+)/?$' [name='issue-comments']>
<URLPattern '^issues/(?P<id>\d+)/comments/(?P<pk>[^/.]+)/$' [name='issue-detail']>
<URLPattern '^issues/(?P<id>\d+)/comments/(?P<pk>[^/.]+)\.(?P<format>[a-z0-9]+)/?$' [name='issue-detail']> """

""" for url in router.urls:
    print('--------------------------------------------------')
    print(url)
    print('--------------------------------------------------') """

urlpatterns = [
    path('', include(router.urls)),
]
