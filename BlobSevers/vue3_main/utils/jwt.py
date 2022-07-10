import jwt
import datetime

JWT_SECRET_KEY = 'ljj66'
# 生成token


def get_jwt_token(user_name, seconds):
    """
    生成jwt-token
    :param unit_name:
    :param role_data:
    :return:
    """
    payload = {
        'exp': datetime.datetime.now() + datetime.timedelta(seconds=seconds),  # 过期时间
        'iat': datetime.datetime.now(),  # 开始时间
        'data': {  # 内容，一般存放该用户id和开始时间
            'userName': user_name,
        },
    }
    encoded_jwt = jwt.encode(payload, JWT_SECRET_KEY, algorithm='HS256')
    return encoded_jwt

# 解密token


def decode_jwt_token(encoded_jwt):
    # 关闭过期时间检验
    de_code = jwt.decode(encoded_jwt, JWT_SECRET_KEY, algorithms=['HS256'])
    return de_code
