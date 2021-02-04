import axios from 'axios';
import { message } from 'antd'

export default function ajax(url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let Promise;
    if (type === 'GET') {
      Promise = axios.get(url, { params: data });
    } else if (type === 'POST') {
      Promise = axios.post(url, data);
    } else if (type === 'delete') {
      Promise = axios.delete(url, data);
    } else {
      Promise = axios.put(url, data);
    }
    Promise.then(response => {
      resolve(response.data);
    }).catch(error => {
      message.error('请求错误' + error.message)
    });
  });
}
