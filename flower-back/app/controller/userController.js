"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
   //根据花id查询用户评价
   async getBuyByID() {
    const {ctx} = this;
    let id = this.ctx.request.query.id;
    ctx.body = await this.ctx.service.userService.getBuyByID(id);
}
}

module.exports = UserController;
