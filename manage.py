from config.application import create_app
from config.dashboard import dashboard

app = create_app()
dashboard(app)

if __name__ == '__main__':
  app.run()
