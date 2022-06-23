from rest_framework.response import Response

class response:
    """api返回的信息的封装"""

    def __init__(self,data):
        self.status = 200
        self.message = "请求成功"
        self.data = data

    @property
    def success(self):
        return Response(self)




