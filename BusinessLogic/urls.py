from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('courses', views.getCourses),
    path('assignments',views.getAssignments),
]