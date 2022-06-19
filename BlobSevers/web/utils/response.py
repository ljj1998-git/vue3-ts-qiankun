class Response(object):
    """api返回的信息的封装"""

    def __init__(self):
        self.status = 200
        self.message = "请求成功"
        self.sysMsg = "success"

    @property
    def get_dict(self):
        return self.__dict__
