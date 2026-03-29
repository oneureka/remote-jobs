from flask_admin.theme import Bootstrap4Theme
from flask_admin import Admin
from app.views import UserView
from app.models import User

def dashboard(app):
  admin = Admin(app, name='hey')
  admin.add_view(UserView(User))

  return admin
