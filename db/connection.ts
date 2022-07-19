import { Sequelize } from 'sequelize'

const db = new Sequelize(
    'db_dilmer', 
    'admin', 
    '87654321', 
    {
        host: 'database-dilmer.consx55jg2fc.us-east-1.rds.amazonaws.com',
        dialect: 'mysql',
        //logging: false
    }
)

export default db