"use strict";

const Controller = require("egg").Controller;

class GoodsController extends Controller {
    // 根据类别查询花
    async flowerByPurpose() {
        let purpose = this.ctx.request.query.purpose;
        console.log(purpose)
        let list = await this.ctx.service.flowerService.flowerByPurpose(purpose);
        this.ctx.response.body = list;
    }
}

module.exports = GoodsController;
