<template>
    <h3>ATUALIZAR SERVIÇO</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
            <div>
                <label class="form-label">Id</label>
                <input type="text" disabled v-model="servico.id" class="form-control" placeholder="Id">
            </div>
            <div>
                <label class="form-label">Nome</label>
                <input type="text" required v-model="servico.nome" class="form-control" placeholder="Nome">
            </div>
            <div>
                <label class="form-label">Descrição</label>
                <input type="text" v-model="servico.descricao" class="form-control" placeholder="Descrição">
            </div>
            <button class="btn btn-success" @click="atualizarServico" style="margin-top: 2%;">Atualizar</button>
        </div>
    </div>
</template>
<script>
import ServicoDataService from '../../services/ServicoDataService';

export default {
    data() {
        return {
            servico: { }
        }
    },
    methods: {
        obterServico(id) {
            ServicoDataService.obterPorId(id)
                .then((response) => {
                    this.servico = response.data;
                });
        },
        atualizarServico() {
            ServicoDataService.atualizar(this.servico.id, this.servico)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    },
    mounted() {
        this.obterServico(this.$route.params.id);
    }
}
</script>