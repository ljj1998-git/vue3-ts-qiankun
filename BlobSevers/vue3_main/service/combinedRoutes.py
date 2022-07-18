# model
from this import d
from vue3_main.models import Menus, Menu_Tree_Info
# serializer
from vue3_main.serializer import vue3_main_menusSerializer, vue3_main_menusTreeInfoSerializer
from vue3_main.serializers import combindMenusSerializer


def combindedRoutes(tel,systemId):
    # 创建空数组
    newArr = []
    allRules = []
    # 获取所有菜单关系表,升序排序
    if systemId:
        allRules = Menu_Tree_Info.objects.filter(systemId=systemId).order_by('level')
    else:
        allRules = Menu_Tree_Info.objects.all().order_by('level')

    filterDatas = combindMenusSerializer(allRules, many=True)

    for item in filterDatas.data:
        level = item.get('level')
        ancestorId1 = item.get('ancestorId')
        if level == "0":
            newArr.append(item)
        else:
            for val in newArr:
                ancestorId2 = val.get('ancestorId')
                if 'children' in val:
                    if(ancestorId1 == ancestorId2):
                        val['children'].append(item)
                else:
                    val['children'] = []
                    if(ancestorId1 == ancestorId2):
                        val['children'].append(item)

    print(newArr)

    # for k in allRules:
    #     menuId = k.get('menuId')
    #     ancestorId = k.get('ancestorId')
    #     level = k.get('level')
    #     if level == 0:
    #         newArr.append()

    # print(vue3_main_menusTreeInfoSerializer(allRules, many=True).data)

    return newArr
