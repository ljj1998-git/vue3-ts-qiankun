from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import exception_handler


def my_exception_handler(exc, context):
    # 先调用DRF默认的 exception_handler 方法, 对异常进行处理，
    # 如果处理成功，会返回一个`Response`类型的对象
    response = exception_handler(exc, context)
    if response is None:
        # 项目出错了，但DRF框架对出错的异常没有处理,
        # 可以在此处对异常进行统一处理，比如：保存出错信息到日志文件
        view = context['view']  # 出错的视图
        error = '服务器内部错误, %s' % exc
        # print('%s: %s' % (view, error))
        return Response({"status:1", 'message:' + error}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return Response({"status:1", "message:" + Response.data.get("detail")},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR)