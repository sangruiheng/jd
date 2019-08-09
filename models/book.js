import {
    HTTP
} from '../utils/http-p.js'

class BookModel extends HTTP {


    //获取书籍列表
    getHotList() {
        return this.request({
            url: 'book/hot_list'
        })
    }

    //获取喜欢书籍
    getMyBookCount() {
        return this.request({
            url: 'book/favor/count'
        })
    }


    //获取书籍详情
    getDetail(bid) {
        return this.request({
            url: `book/${bid}/detail`
        });
    }

    //获取当前书籍的点赞状态
    getLikeStatus(bid) {
        return this.request({
            url: `book/${bid}/favor`
        });
    }

    //获取当前数据的短评信息
    getComments(bid) {
        return this.request({
            url: `book/${bid}/short_comment`
        });
    }

    //提交书籍评论
    postComment(bid, comment) {
        return this.request({
            url: 'book/add/short_comment',
            method: 'POST',
            data: {
                book_id: bid,
                content: comment
            }
        })
    }


}

export {
    BookModel
}