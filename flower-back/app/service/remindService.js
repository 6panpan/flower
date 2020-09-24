"use strict";

let Service = require("egg").Service;

class RemindService extends Service {
    //增加纪念日
    async addRemind(re_id,re_name,re_sex,re_birth,re_mark){
        let sql = "insert into remind (re_id,re_name,re_sex,re_birth,re_mark)values(?,?,?,?,?)"
        let list = await this.ctx.app.mysql.query(sql, [re_id,re_name,re_sex,re_birth,re_mark]);
        return list;
    }

    //根据用户id获取他所添加的纪念日
    async getRemind(re_id){
        let sql = "select * from remind where re_id=?"
        let list = await this.ctx.app.mysql.query(sql, [re_id]);
        return list;
    }

    //删除纪念日
    async delRemind(id){
        let sql="delete from remind where id=?"
        let list=await this.ctx.app.mysql.query(sql,[id])
        return list.affectedRows
    }
}
module.exports = RemindService;