import {
    HTTP
} from '../utils/http.js'

class ClassicModel extends HTTP {
    getLatest(sCallback) {
        this.request({
            url: 'classic/latest',
            success: (res) => {
                sCallback(res)
                this._setLatestIndex(res.index);
            }
        })
    }



    //获取期刊
    getClassic(index, nextOrPrevious, sCallback){
        this.request({
            url: 'classic/' + index + '/' + nextOrPrevious,
            success: (res)=>{
                sCallback(res)
            }
        })
    }


    //是否是第一期
    isFirst(index) {
        return index == 1 ? true : false
    }

    //是否是最后一期
    isLatest(index) {
        return index == this._getLatestIndex() ? true : false
    }

    _setLatestIndex(index){
        wx.setStorageSync('latest', index)
    }

    _getLatestIndex(){
        let index = wx.getStorageSync('latest')
        return index
    }




}


export {
    ClassicModel
}