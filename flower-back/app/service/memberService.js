"use strict";
const fs = require("fs");
const path = require("path");
let Service = require("egg").Service;


class MemberService extends Service {
    //根据user_id创建用户积分
    async setIntegral(u_id) {
        let sql = "insert into member u_id values ?";
        let list = await this.ctx.app.mysql.query(sql, [u_id]);
        return list
    }
    //根据user_id查询用户积分
    async getIntegral(u_id) {
        let sql = "select * from member where u_id=?"
        let list = await this.ctx.app.mysql.query(sql, [u_id]);
        console.log(list);
        return list;
    }
    async getAvatar(user_id){
        let sql = 'select * from user where user_id=?'
        let list = await this.ctx.app.mysql.query(sql,[user_id]);
        return list;
    }

    
}
module.exports = MemberService;

