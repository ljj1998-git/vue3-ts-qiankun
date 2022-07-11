
from rest_framework import status
class response:
    """api返回的信息的封装"""
    STATUS_MESSAGE = {
        status.HTTP_200_OK:'请求成功',
        status.HTTP_500_INTERNAL_SERVER_ERROR:'请求失败',
    }

    def success(self,data,message=None):

        return {
            "status":200,
            "message":self.STATUS_MESSAGE[status.HTTP_200_OK] if message==None else message,
            "data":data
        }
    
    def error(self,data,message):
        return {
            "status":500,
            "message":self.STATUS_MESSAGE[status.HTTP_500_INTERNAL_SERVER_ERROR] if message==None else message,
            "data":data
        }
