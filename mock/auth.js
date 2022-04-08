
const token= {
  token: '__TEMP_TOKEN__',
  refreshToken: '__TEMP_REFRESH_TOKEN__',
};

const apis= [

  // 密码登录
  {
    url: '/mock/submit/order',
    method: 'post',
    timeout:700,  //设置响应时间
    response:() => {
      return {
        code: 200,
        message: 'ok',
        data: token,
      };
    },
  },
  // 获取用户信息(请求头携带token)
  {
    url: '/mock/getUserInfo',
    method: 'get',
    response:() => {
      return {
        code: 200,
        message: 'ok',
        data: {
          userId: '0',
          userName: 'Soybean',
          userPhone: '15170283876',
          userRole: 'super',
        },
      };
    },
  }
];

export default apis;
