from config.application import create_app
from config.admin import create_admin

app = create_app()
admin = create_admin(app)

if __name__ == '__main__':
  app.run()
