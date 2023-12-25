import MyLog from "../log/my.log.js";
import {connectDatabaseObject} from "../config/connect.database.js";

class Romance {
  constructor() {
    this.myLog = new MyLog()
    this.myLog.log.info('Romance class is created')
  }
  get romance () {
    return connectDatabaseObject.sequelizeConnect.define(
      'romance' , {
        rid : {
          type : connectDatabaseObject.sequelize.STRING ,
          primaryKey: true
        },
        title : {
          type : connectDatabaseObject.sequelize.STRING
        } ,
        price : {
          type : connectDatabaseObject.sequelize.DECIMAL
        }
      } ,
      {
        freezeTableName: true , // freeze name table not using *s on name
        timestamps: false // don't use createdAt/update
      }
    )
  }

}

export default Romance
