import MyLog from "../log/my.log.js";
import RouterBook from "../router/router.book.js";
import {modulesApiObject} from "../service/modules.api.js";

class ControlApp {

  myLog = null
  router = null
  app = null

  constructor() {
    this.myLog = new MyLog()
    this.myLog.log.info('ControlApp class is created')
    this.app = modulesApiObject.application
    this.router = new RouterBook()
  }

  display() {
    this.app.use(this.router.getRouterRomance) // initial router books
    this.app.listen(3000, (error) => {
      if (!error) {
        this.myLog.log.info(`You're on port 3000`)
      } else {
        throw error
      }
    })
  }
}

new ControlApp().display()
