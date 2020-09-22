"use strict";

let Service = require("egg").Service;

class UserService extends Service {
    //根据花id查询用户评价
    async getBuyByID(id) {
        let sql = "select * from buy,user where user_id=u_id and f_id =?";
        let list = await this.ctx.app.mysql.query(sql,[id]);
        return list;
    }
}
module.exports = UserService;
