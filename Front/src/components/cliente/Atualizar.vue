<template>
    <h3>ATUALIZAR CLIENTE</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
            <div>
                <label class="form-label">Id</label>
                <input type="text" disabled v-model="cliente.id" class="form-control" placeholder="Nome">
            </div>
            <div>
                <label class="form-label">Nome</label>
                <input type="text" required v-model="cliente.nome" class="form-control" placeholder="Nome">
            </div>
            <div>
                <label class="form-label">Login</label>
                <input type="text" v-model="cliente.login" class="form-control" placeholder="Login">
            </div>
            <div>
                <label class="form-label">Senha</label>
                <input type="password" required v-model="cliente.senha" class="form-control">
            </div>
            <button class="btn btn-success" @click="atualizarCliente" style="margin-top: 2%;">Atualizar</button>
        </div>
    </div>
</template>
<script>
import ClienteDataService from '../../services/ClienteDataService';

export default {
    data() {
        return {
            cliente: { }
        }
    },
    methods: {
        obterCliente(id) {
            ClienteDataService.obterPorId(id)
                .then((response) => {
                    this.cliente = response.data;
                });
        },
        atualizarCliente() {
            ClienteDataService.atualizar(this.cliente.id, this.cliente)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    },
    mounted() {
        this.obterCliente(this.$route.params.id);
    }
}
</script>