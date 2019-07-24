import {
    HTTP
} from '../utils/http.js'

class ClassicModel extends HTTP {

    //获取最新期刊
    getLatest(sCallback) {
        this.request({
            url: 'classic/latest',
            success: (res) => {
                sCallback(res)
                this._setLatestIndex(res.index);
                //每次加载最新期刊 加入缓存
                let key = this._getKay(res.index)
                wx.setStorageSync(key, res)
            }
        })
    }



    //获取期刊
    getClassic(index, nextOrPrevious, sCallback) {

        //加入缓存  现在缓存中寻找有无期刊 有(读取缓存) 没有(请求api然后写入缓存)

        let key = nextOrPrevious == 'next' ? this._getKay(index + 1) : this._getKay(index - 1)
        let classic = wx.getStorageSync(key)
        if (!classic) {
            //请求api 
            this.request({
                url: 'classic/' + index + '/' + nextOrPrevious,
                success: (res) => {
                    //写入缓存
                    wx.setStorageSync(this._getKay(res.index), res)
                    sCallback(res)
                }
            })
        } else {
            sCallback(classic)
        }


    }


    //是否是第一期
    isFirst(index) {
        return index == 1 ? true : false
    }

    //是否是最后一期
    isLatest(index) {
        return index == this._getLatestIndex() ? true : false
    }

    //设置缓存
    _setLatestIndex(index) {
        wx.setStorageSync('latest', index)
    }

    //读取缓存
    _getLatestIndex() {
        let index = wx.getStorageSync('latest')
        return index
    }

    //生成缓存key
    _getKay(index) {
        let key = 'classic-' + index
        return key
    }




}


export {
    ClassicModel
}