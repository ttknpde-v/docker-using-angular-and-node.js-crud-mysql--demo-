import MyLog from "../log/my.log.js";
import sequelize from "sequelize";

class ConnectDatabase {
  myLog = null
  constructor() {
    this.myLog = new MyLog()
    this.myLog.log.info('ConnectDatabase class is created')
  }
  get sequelizeConnect() {
    return new sequelize(
      "bookstore",
      "ttknpde-v",
      "12345",
      {
        /* set different port */
        dialect: 'mysql',
        host: "database",
        port: "3306",
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
      }
    )
  }
}

/*
const connectDatabase = new ConnectDatabase()
connectDatabase.sequelizeConnect.authenticate().then(() => {
  connectDatabase.myLog.log.info('connected successfully!!')
}).catch((error) => {
  throw error
})
*/

const connectDatabase = new ConnectDatabase()
export const connectDatabaseObject = {
  sequelize : sequelize ,
  sequelizeConnect : connectDatabase.sequelizeConnect
}
