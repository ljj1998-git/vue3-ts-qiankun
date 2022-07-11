import hashlib

#盐
SALT = 'LJJ66'

def get_md5_salt(value):
    md5 = hashlib.md5()       # 2，实例化md5() 方法
    newValue = value + SALT
    md5.update(newValue.encode())      # 3，对字符串的字节类型加密
    return md5.hexdigest()