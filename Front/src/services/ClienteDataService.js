import http from "../http-common";

class ClienteDataService {
    
    cadastrar(cliente) {      //CADASTRAR
        return http.post('/cliente', cliente);
    }
    
    obterPorId(id) {           //CONSULTAR
        return http.get(`/cliente/${id}`)
    }
    
    atualizar(id, cliente) {  //ATUALIZAR    
        return http.put(`/cliente/${id}`, cliente);
    } 
    
    async deletar(id) {        //EXCLUIR
        return await http.delete(`/cliente/${id}`)
    }
    
    listar() {                //LISTAR
        return http.get ('/cliente/listar');
    }
}

export default new ClienteDataService();