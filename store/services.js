import axios from 'axios'
const baseUrl = ''
const apiUrl = 'http://47.105.223.108:9191/mock/16/ice'

class Services {
  getWechatSignature (url) {
    return axios.get(`${baseUrl}/wechat-signature?url=${url}`)
  }
  getUserByOAuth (url) {
    console.log('url2', url)
    return axios.get(`${baseUrl}/wechat-oauth?url=${url}`)
  }
  fetchHouses () {
    return axios.get(`${apiUrl}/home/houses`)
  }
  fetchCities () {
    return axios.get(`${apiUrl}/home/city`)
  }
  fetchCharacters () {
    return axios.get(`${apiUrl}/home/characters`)
  }

  focusHouse (id) {
    return axios.get(`${apiUrl}/house/id`)
  }
}

export default new Services()
