from flask import Flask, jsonify
class JsonFlask(Flask):
    def make_response(self, rv):
        """视图函数可以直接返回: list、dict、None"""
        if rv is None or isinstance(rv, (list, dict)):
            rv = JsonResponse.success(rv)

        if isinstance(rv, JsonResponse):
            rv = jsonify(rv.to_dict())

        return super().make_response(rv)



class JsonResponse(object):
    def __init__(self, data, code, msg):
        self.data = data
        self.code = code
        self.msg = msg
    @classmethod
    def success(cls, data=None, code=0, msg='success'):
        return cls(data, code, msg)
    @classmethod
    def error(cls, data=None, code=-1, msg='error'):
        return cls(data, code, msg)
    def to_dict(self):
        return {
            "code": self.code,
            "msg": self.msg,
            "data": self.data
        }