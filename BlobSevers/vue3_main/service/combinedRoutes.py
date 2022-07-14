# model
from vue3_main.models import Menus,Menu_Tree_Info
# serializer
from vue3_main.serializer import vue3_main_menusSerializer,vue3_main_menusTreeInfoSerializer
from vue3_main.serializers import combindMenusSerializer

def combindedRoutes():
    # 创建空数组
    newArr = []
    # 获取所有的菜单
    allMenu = Menus.objects.all()
    
    # 获取所有菜单关系表,升序排序
    allRules = Menu_Tree_Info.objects.all().order_by('level')

    a = combindMenusSerializer(instance=allRules,many=True)

    print(a)



    # for k in allRules:
    #     menuId = k.get('menuId')
    #     ancestorId = k.get('ancestorId')
    #     level = k.get('level')
    #     if level == 0:
    #         newArr.append()



    print(vue3_main_menusTreeInfoSerializer(allRules,many=True).data)

    return vue3_main_menusTreeInfoSerializer(allRules,many=True).data