import { HTTP } from "../utils/http";

class LikeModel extends HTTP{
    like(behavior, artID, category){
        let url = behavior == 'like' ? 'like' : 'like/cancel'
        this.request({
            url:url,
            method:'POST',
            data:{
                art_id:artID,
                type:category
            }
        })
    }


    //获取点赞信息
    getClassicLikeStatus(artID, category, sCallback){
        this.request({
            url:'classic/' + category + '/' + artID + '/favor',
            success:sCallback
        })
    }



}

export {LikeModel}