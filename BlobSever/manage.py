# from flask import Flask, escape, request
from navbar import navbar
import app.configs.config as config
from exts import db
from app.utils.response import JsonFlask,JsonResponse

App = JsonFlask(__name__)
App.config.from_object(config)
db.init_app(App)

import app.models.article
db.create_all()
# 蓝图
App.register_blueprint(navbar)

@App.errorhandler(Exception)
def error_handler(e):
    return JsonResponse.error(msg=str(e))

if __name__ == '__main__':
    App.run(debug=True, threaded=True, host='0.0.0.0', port=4600)
