import bodyParser from 'body-parser'
import ep from 'express'
import MyLog from "../log/my.log.js";
import cors from 'cors'
class ModulesApi {
  myLog = null
  constructor() {
    this.myLog = new MyLog()
    this.myLog.log.info('ModulesApi class is created')
  }
  get app() {
    return ep()
  }
  get router () {
    return ep.Router()
  }

}

const modulesApi = new ModulesApi()
export const modulesApiObject= {
  express : ep ,
  bodyParser : bodyParser ,
  application : modulesApi.app ,
  router : modulesApi.router ,
  cors : cors
  //** remember getter in js is not a method So don't use ** ()
}
