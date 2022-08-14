from turtle import title
from django.db import models

# Create your models here.
class Course(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title

class Assignment(models.Model):
    PROGRAMMING_LANGUAGES=(
        ('PY','Python'),
        ('CPP', 'C++'),
        ('JAVA', 'Java'),
        ('JS', 'JavaScript'),
        ('CS', 'C#'),
    )
    title = models.CharField(max_length=100)
    programingLanguage = models.TextField(choices=PROGRAMMING_LANGUAGES)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
