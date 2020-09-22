const Server = require('egg').Service;
class OrderService extends Server {
     //得到訂單
    //  商品、价格、数量
     async addOrder(flower_id,name,price,num) {
        let sql = "insert into flowerOrder (flower_id,name,price,num) values(?,?,?,?)";
        let list = await this.ctx.app.mysql.query(sql,[flower_id,name,price,num]);
        return list;
    }
    //获取订单
    async getOrderByID(id){
        let sql = "select * from flowerorder where id =?";
        let list = await this.ctx.app.mysql.query(sql,[id]);
        return list;
    }
    //修改订单(修改数量)
    async updateorder(id, num) {
        let sql = "update flowerorder set num=? where id=?"
        let r = await this.ctx.app.mysql.query(sql, [num, id])
        return r.affectedRows;
    };

}
//导出类
module.exports = OrderService;