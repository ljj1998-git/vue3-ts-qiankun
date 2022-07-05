
class response:
    """api返回的信息的封装"""
    STATUS_MESSAGE = {
        200:'请求成功'
    }

    # def __init__(self):
    #     self.status = 200
    #     self.message = "请求成功"

    def success(self,data):
        return {
            "status":200,
            "message":self.STATUS_MESSAGE[200],
            "data":data
        }
