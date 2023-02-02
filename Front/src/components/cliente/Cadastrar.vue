<template>
    <h3>NOVO CLIENTE</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
            <div>
                <label class="form-label">Nome</label>
                <input type="text" required v-model="cliente.nome" class="form-control" placeholder="Nome">
            </div>
            <div>
                <label class="form-label">Login</label>
                <input type="text" required v-model="cliente.login" class="form-control" placeholder="Login">
            </div>
            <div>
                <label class="form-label">Senha</label>
                <input type="password" required v-model="cliente.senha" class="form-control">
            </div>
            <button class="btn btn-success" @click="cadastrarCliente" style="margin-top: 2%;">Cadastrar</button>
        </div>
    </div>
</template>
<script>
import ClienteDataService from '../../services/ClienteDataService';

export default {
    data() {
        return {
            cliente: {
                nome: '',
                login: '',
                senha: ''
            }
        }
    },
    methods: {
        cadastrarCliente() {
            var data = {
                nome: this.cliente.nome,
                login: this.cliente.login,
                senha: this.cliente.senha
            };

            ClienteDataService.cadastrar(data)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    }
}
</script>