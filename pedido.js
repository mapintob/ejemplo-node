const config = require("./dbconfig")

class Pedido{
    constructor(id,cliente,factura){
        this.pedidoid=id;
        this.clienteid=cliente;        
        this.factura=factura;              
    }
}

module.exports = Pedido;