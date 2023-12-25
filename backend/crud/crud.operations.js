import Romance from "../entity/romance.js";
import MyLog from "../log/my.log.js";
class CrudOperations {
  myLog = null
  romance = null
  constructor() {
    this.romance = new Romance().romance;
    this.myLog = new MyLog()
    this.myLog.log.info('CrudOperations class is created')
  }
  reads = async () => {
    return await this.romance.findAll()
  }
}
export default CrudOperations
