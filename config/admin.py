from flask_admin.theme import Bootstrap4Theme
from flask_admin import Admin

def create_admin(app):
  admin = Admin(app, name='hey', theme=Bootstrap4Theme(swatch='lumen'))
  return admin
