"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('db_dilmer', 'admin', '87654321', {
    host: 'database-dilmer.consx55jg2fc.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    //logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map