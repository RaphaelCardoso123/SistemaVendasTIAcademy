import http from "../http-common";

class ItemPedidoDataService {
    
    cadastrar(itemPedido) {      //CADASTRAR
        return http.post('/itemPedido', itemPedido);
    }
    
    obterPorId(id) {           //CONSULTAR
        return http.get(`/itemPedido/${id}`)
    }
    
    atualizar(id, itemPedido) {  //ATUALIZAR    
        return http.put(`/itemPedido/${id}`, itemPedido);
    } 

    async deletar(id) {         //EXCLUIR
        return await http.delete(`/itemPedido/${id}`)
    }

    listar() {                //LISTAR
        return http.get ('/itemPedido/listar');
    }
}

export default new ItemPedidoDataService();