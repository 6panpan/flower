"use strict";
const fs = require("fs");
const path = require("path");

let Service = require("egg").Service;

class UserService extends Service {
    //注册
    async regist(nickname, phoneNum, pwd) {
        let sql = "insert into user (nickname,phoneNum,pwd)values(?,?,?)";
        let list = await this.ctx.app.mysql.query(sql, [nickname, phoneNum, pwd]);
        return list
    }

    //登录
    async login(phoneNum, pwd) {
        let sql = "select * from user where phoneNum=? and pwd=?";
        let list = await this.ctx.app.mysql.query(sql, [phoneNum, pwd]);
        return list;
    }

    //判断电话号码的唯一性
    async onlyphone(phoneNum) {
        let sql = "select * from user where phoneNum=?";
        let list = await this.ctx.app.mysql.query(sql, [phoneNum]);
        return list;
    }

    //根据id获取用户信息
    async getUserinf(user_id) {
        let sql = "select * from user where user_id=?"
        let list = await this.ctx.app.mysql.query(sql, [user_id]);
        return list;
    }

    //根据用户id修改用户信息
    async infchange() {
        let user_id = this.ctx.request.body.user_id;
        let nickname = this.ctx.request.body.nickname;
        let phoneNum = this.ctx.request.body.phoneNum;
        let pwd = this.ctx.request.body.pwd;
        let sex = this.ctx.request.body.sex;

        const file = this.ctx.request.files[0];

        if (file) {
            const toFileName = '/public/upload/' + Date.now() + file.filename;

            let to = path.dirname(__dirname) + toFileName;

            await fs.copyFileSync(file.filepath, to);

            await fs.unlinkSync(file.filepath);

            const newUrl = "http://localhost:7001" + toFileName;
            let sql = "update user set nickname=?,phoneNum=?,pwd=?,sex=?,headimg=? where user_id=?";
            let list = await this.ctx.app.mysql.query(sql, [nickname, phoneNum, pwd, sex, newUrl, user_id]);
            if (list.affectedRows == 1) {
                return newUrl
            } else {
                return;
            }
        }else{
            let sql="update user set nickname=?,phoneNum=?,pwd=?,sex=? where user_id=?"
            let list = await this.ctx.app.mysql.query(sql, [nickname,phoneNum,pwd,sex,user_id]);
            return list.affectedRows;
        }

    }
}
module.exports = UserService;
