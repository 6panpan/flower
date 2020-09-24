"use strict";

const Controller = require("egg").Controller;

class RemindController extends Controller {
    //增加纪念日
    async addRemind(){
        let re_id = this.ctx.request.body.re_id;
        let re_name = this.ctx.request.body.re_name;
        let re_sex=this.ctx.request.body.re_sex;
        let re_birth = this.ctx.request.body.re_birth;
        let re_mark = this.ctx.request.body.re_mark;
        let list = await this.ctx.service.remindService.addRemind(re_id,re_name,re_sex,re_birth,re_mark)
        this.ctx.response.body = list;
    }

    //根据用户id获取他所添加的纪念日
    async getRemind(){
        let re_id = this.ctx.request.body.re_id;
        let list = await this.ctx.service.remindService.getRemind(re_id)
        this.ctx.response.body = list;
    }

    //删除纪念日
    async delRemind(){
        let id = this.ctx.request.body.id;
        let list = await this.ctx.service.remindService.delRemind(id)
        this.ctx.response.body = list;
    }
}

module.exports = RemindController;