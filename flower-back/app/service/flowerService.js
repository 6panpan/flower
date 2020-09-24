"use strict";

let Service = require("egg").Service;

class FlowerService extends Service {
    // 根据类别查询花
    async flowerByPurpose(purpose) {
        let sql = "select * from flower where purpose like ? limit 0,8";
        // let sql = "select * from flower where purpose=?";
        let list = await this.ctx.app.mysql.query(sql, ["%" + purpose + "%"]);
        return list;
    }
    // 根据任意字符查询全部花
    async allFlower(flower_name, purpose, kind, num) {
        let sql =
            "select * from flower where flower_name like ? || purpose like ?||kind like ?||num =?";
        let list = await this.ctx.app.mysql.query(sql, [
            "%" + flower_name + "%",
            "%" + purpose + "%",
            "%" + kind + "%",
            "%" + num + "%",
        ]);
        return list;
    }
    //查询花的信息
    async getFlowers() {
        let sql = "select * from flower limit 0,5";
        let list = await this.ctx.app.mysql.query(sql, []);
        return list;
    }
    //根据id查询花的信息
    async getFlowersByID(id) {
        let sql = "select * from flower where flower_id =?";
        let list = await this.ctx.app.mysql.query(sql, [id]);
        return list;
    }
}
module.exports = FlowerService;
