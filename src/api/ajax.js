// ajax请求函数模块
import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {
    return new Promise(function(resolve,reject){
        let promise
        let datastr = ''
        if (type === 'GET') {
            Object.keys(data).forEach(el => {
                datastr += el + '=' + data[el] + '&'
            })
            if(datastr!==''){
                datastr = datastr.substring(0,datastr.lastIndexOf('&'))
                url+='?'+datastr
            }
            promise = axios.get(url)
        }else{
            promise = axios.post(url,data)
        }
        promise.then(reponse=>{
            resolve(reponse.data)
        }).catch(err=>{
            reject(err)
        })
    })
}