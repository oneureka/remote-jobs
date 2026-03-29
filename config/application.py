from flask import Flask, abort
from peewee import DoesNotExist

def create_app():
  app = Flask(__name__)

  @app.errorhandler(DoesNotExist)
  def does_not_exist(e):
    return abort(404)

  return app
