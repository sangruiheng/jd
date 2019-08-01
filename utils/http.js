//在import时  使用相对路径
import {
  config
} from '../config.js'

const tips = {
  1005: 'appKey无效',
  3000: '期刊不存在',
  1: '抱歉,出现了一个错误'
};

class HTTP {
  request(params) {
      if (!params.method) {
          params.method = 'GET';
      }
      wx.request({
          url: config.api_base_url + params.url,
          data: params.data,
          method: params.method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {
              'content-type': 'application/json',
              'appkey': config.appkey
          }, // 设置请求的 header
          success: (res) => {
              let code = res.statusCode.toString();
              if (code.startsWith('2')) {
                  params.success && params.success(res.data);
              } else {
                  //显示错误信息
                  let error_code = res.data.error_code;
                 this._show_error(error_code);
              }
          },
          fail: (err) => {
              // fail
            this._show_error(1);
          },
          complete: function () {
              // complete
          }
      })
  }

  //首字母下划线 模拟私有方法
  _show_error(error_code) {
      if(!error_code){
          error_code = 1;
      }
 const tip = tips[error_code];
      wx.showToast({
          title: tip?tip:tips[1],
          icon: 'none',
          duration: 2000
      });
  }





}



export {
  HTTP
}
