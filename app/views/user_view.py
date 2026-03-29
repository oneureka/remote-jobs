from flask_admin.contrib.peewee import ModelView

class UserView(ModelView):
  can_delete = False
