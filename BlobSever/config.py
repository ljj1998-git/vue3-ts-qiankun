import pymysql

db = pymysql.connect(host="localhost", user="root",
                     password="root", database="vue3app")
# 使用cursor()方法获取操作游标
cursor = db.cursor()
# sql语句
sql = "select * from vue3app"
try:
    # 执行sql语句
    cursor.execute(sql)
    # 查询中的一个操作，获取所有记录
    result = cursor.fetchall()
    print(result)
except:
    print("Error!")
# 关闭数据库
db.close()
