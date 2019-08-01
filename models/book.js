import {
    HTTP
} from '../utils/http-p.js'

class BookModel extends HTTP{


    //获取书籍列表
    getHotList(){
        return this.request({
            url:'book/hot_list'
        })
    }

    //获取喜欢书籍
    getMyBookCount(){
        return this.request({
            url :'book/favor/count'
        })
    }


}

export {BookModel}