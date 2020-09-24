"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
    //注册
    async regist() {
        let nickname = this.ctx.request.body.nickname;
        let phoneNum=this.ctx.request.body.phoneNum;
        let pwd = this.ctx.request.body.pwd;
        let list = await this.ctx.service.userService.regist(nickname,phoneNum,pwd)
        this.ctx.response.body = list;
    }

    //登录
    async login() {
        let phoneNum=this.ctx.request.body.phoneNum;
        let pwd = this.ctx.request.body.pwd;
        let list = await this.ctx.service.userService.login(phoneNum, pwd);
        this.ctx.response.body = list;
    }
    //判断是否电话号的唯一性
    async onlyphone(){
        let phoneNum=this.ctx.request.body.phoneNum;
        let list = await this.ctx.service.userService.onlyphone(phoneNum);
        this.ctx.response.body = list;
    }

    //根据id获取用户信息
    async getUserinf(){
        let user_id=this.ctx.request.query.user_id;
        let list = await this.ctx.service.userService.getUserinf(user_id);
        this.ctx.response.body = list;
    }
    //修改用户信息
    async infchange(){
        // let user_id = this.ctx.request.body.user_id;
        // let nickname = this.ctx.request.body.nickname;
        // let phoneNum=this.ctx.request.body.phoneNum;
        // let pwd = this.ctx.request.body.pwd;
        // let sex=this.ctx.request.body.sex;
        let list = await this.ctx.service.userService.infchange()
        this.ctx.response.body = list;
    }

    //根据花id查询用户评价
   async getBuyByID() {
    const {ctx} = this;
    let id = this.ctx.request.query.id;
    ctx.body = await this.ctx.service.userService.getBuyByID(id);

    }
}

module.exports = UserController;
