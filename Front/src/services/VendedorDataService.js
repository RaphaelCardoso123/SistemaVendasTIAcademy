import http from "../http-common";

class VendedorDataService {
    
    cadastrar(vendedor) {      //CADASTRAR
        return http.post('/vendedor', vendedor);
    }

    obterPorId(id) {           //CONSULTAR
        return http.get(`/vendedor/${id}`)
    }

    atualizar(id, vendedor) {  //ATUALIZAR    
        return http.put(`/vendedor/${id}`, vendedor);
    } 

    async deletar(id) {         //EXCLUIR
        return await http.delete(`/vendedor/${id}`)
    }

    listar() {                //LISTAR
        return http.get ('/vendedor/listar');
    }
}

export default new VendedorDataService();