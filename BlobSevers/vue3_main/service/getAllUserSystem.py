# model
from vue3_main.models import System, User
from vue3_main.serializer import vue3_main_SystemSerializer


def getAllUserSystem(tel):
    # 查询当前登录人对象
    curtentUser = User.objects.get(tel=tel)
    # 反向查询 多对多模型
    instance = curtentUser.system_set.all()
    # 序列化
    datas = vue3_main_SystemSerializer(instance=instance, many=True).data

    return datas
