import {HTTP} from '../utils/http.js'

class ClassicModel extends HTTP{
    getLatest(sCallback){
        let a = ''
        this.request({
            url: 'classic/latest',
            success: (res) => {
                sCallback(res)
            }
          })
    }
}


export {ClassicModel}