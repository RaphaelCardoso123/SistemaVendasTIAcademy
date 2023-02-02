import http from "../http-common";

class ServicoDataService {
    
    cadastrar(servico) {      //CADASTRAR
        return http.post('/servico', servico);
    }
    
    obterPorId(id) {           //CONSULTAR
        return http.get(`/servico/${id}`)
    }
    
    atualizar(id, servico) {   //ATUALIZAR    
        return http.put(`/servico/${id}`, servico);
    } 
    
    async deletar(id) {        //EXCLUIR
        return await http.delete(`/servico/${id}`)
    }
    
    listar() {                 //LISTAR
        return http.get ('/servico/listar');
    }
}

export default new ServicoDataService();