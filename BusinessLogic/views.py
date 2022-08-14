from django.shortcuts import render
from django.http import HttpResponse

from .models import Course, Assignment

# Create your views here.
def getCourses(request):
    courses = Course.objects.all()
    return HttpResponse(courses)

def getAssignments(request):
    assignments = Assignment.objects.all()
    return HttpResponse(assignments)