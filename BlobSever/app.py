import pymysql
from flask import Flask, escape, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# HOSTNAME = 'localhost'
# PORT = "3306"
# DATABASE = 'vue3app'
# USERNAME = 'root'
# PASSWORD = 'root'
# DB_URL = 'mysql+pymysql://{}:{}@{}:{}/{}?charset=utf8'.format(
#     USERNAME, PASSWORD, HOSTNAME, PORT, DATABASE)
# app.config['SQLALCHEMY_DATABASE_URI'] = DB_URL
# db = SQLAlchemy(app)


# class Article(db.Model):
#     __tablename__ = 'article'
#     id = db.Column(db.Integer, primary_key=True, autoincrement=True)


# db.create_all()


db = pymysql.connect(host="112.124.37.144", user="root",
                     password="L_jj1998", database="Blob")


@app.route('/')
def hello_world():
    cursor = db.cursor()
    sql = "select * from article"
    cursor.execute(sql)
    result = cursor.fetchall()
    print(result)
    # engine = db.get_engine()
    # with engine.connect() as conn:
    #     result = conn.execute('Select 1')
    #     print(result.fetchone(), 55555)
    # 使用cursor()方法获取操作游标
    return '655'


if __name__ == '__main__':
    app.run(debug=True, threaded=True, host='0.0.0.0', port=4600)
