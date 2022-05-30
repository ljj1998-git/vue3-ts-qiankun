import Mock from 'mockjs';

export default [
  // GetUserInfo
  {
    url: '/upms/user/info',
    type: 'get',
    response: () => ({
      code: 401,
      message: '成功',
      data: [{
        type: 0,
        name: '德玛西亚',
        title: '11',
      }],
    }),
  },
  // GetToken
  {
    url: '/auth/oauth/token',
    type: 'post',
    response: (option: any) => {
      const $name = JSON.parse(option.body).name;
      if ($name) {
        return Mock.mock({
          code: 401,
          message: '成功',
          data: {
            name: 'testToken',
          },
        });
      }
      return Mock.mock({
        code: 400,
        message: '未提交参数',
      });
    },
  },
];
