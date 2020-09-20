"use strict";

let Service = require("egg").Service;

class FlowerService extends Service {
    // 根据类别查询花
    async flowerByPurpose(purpose) {
        let sql = "select * from flower where purpose=? limit 0,10";
        // let sql = "select * from flower where purpose=?";
        let list = await this.ctx.app.mysql.query(sql,[purpose]);
        return list;
    }
}
module.exports = FlowerService;
