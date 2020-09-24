"use strict";

const Controller = require("egg").Controller;

class MemberController extends Controller {
    //根据user_id创建用户积分
    async setIntegral(){
        let u_id=this.ctx.request.query.u_id;
        let list = await this.ctx.service.memberService.setIntegral(u_id);
        this.ctx.response.body = list;
    }

    //根据user_id查询用户积分
   async getIntegral() {
    const {ctx} = this;
    let u_id = this.ctx.request.query.u_id;
    this.ctx.body = await this.ctx.service.memberService.getIntegral(u_id);
    }
    
    async getAvatar(){
        let user_id =  this.ctx.request.query.user_id;
        this.ctx.body = await this.ctx.service.memberService.getAvatar(user_id);
    }
}

module.exports = MemberController;
