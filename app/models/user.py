from datetime import datetime
from .base import BaseModel
from peewee import *

class User(BaseModel):
  email = CharField()
  password_digest = CharField()
  created_at = DateTimeField()
  updated_at = DateTimeField()
