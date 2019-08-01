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

    //es6  解构
    request({url, data={}, method='GET'}){
        return new Promise((resolve, reject)=>{
            this._request(url, resolve, reject, method, data);
        })
          
    }
    _request(url, resolve, reject, method='GET', data={}) {
        wx.request({
            url: config.api_base_url + url,
            data: data,
            method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: {
                'content-type': 'application/json',
                'appkey': config.appkey
            }, // 设置请求的 header
            success: (res) => {
                let code = res.statusCode.toString();
                if (code.startsWith('2')) {
                    resolve(res.data);
                } else {
                    //显示错误信息
                    reject();
                    let error_code = res.data.error_code;
                   this._show_error(error_code);
                }
            },
            fail: (err) => {
                // fail
                reject();
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