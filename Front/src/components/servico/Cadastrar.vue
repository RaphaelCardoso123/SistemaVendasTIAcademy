<template>
    <h3>NOVO SERVIÇO</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
            <div>
                <label class="form-label">Nome</label>
                <input type="text" required v-model="servico.nome" class="form-control" placeholder="Nome">
            </div>
            <div>
                <label class="form-label">Descrição</label>
                <input type="text" required v-model="servico.descricao" class="form-control" placeholder="Descrição">
            </div>
            <button class="btn btn-success" @click="cadastrarServico" style="margin-top: 2%;">Cadastrar</button>
        </div>
    </div>
</template>
<script>
import ServicoDataService from '../../services/ServicoDataService';

export default {
    data() {
        return {
            servico: {
                nome: '',
                descricao: ''
            }
        }
    },
    methods: {
        cadastrarServico() {
            var data = {
                nome: this.servico.nome,
                descricao: this.servico.descricao
            };

            ServicoDataService.cadastrar(data)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    }
}
</script>