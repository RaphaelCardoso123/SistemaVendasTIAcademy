<template>
    <h3>ATUALIZAR PEDIDO</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
            <div>
                <label class="form-label">Id</label>
                <input type="text" disabled v-model="pedido.id" class="form-control" placeholder="Id">
            </div>
            <div>
                <label class="form-label">Data</label>
                <input type="text" disabled v-model="pedido.data" class="form-control" placeholder="Data">
            </div>
            <div>
                <label class="form-label">VendedorId</label>
                <input type="text" v-model="pedido.vendedorId" class="form-control" placeholder="VendedorId">
            </div>
            <div>
                <label class="form-label">ClienteId</label>
                <input type="text" required v-model="pedido.clienteId" class="form-control" placeholder="ClienteId">
            </div>
            <button class="btn btn-success" @click="atualizarPedido" style="margin-top: 2%;">Atualizar</button>
        </div>
    </div>
</template>
<script>
import PedidoDataService from '../../services/PedidoDataService';

export default {
    data() {
        return {
            pedido: { }
        }
    },
    methods: {
        obterPedido(id) {
            PedidoDataService.obterPorId(id)
                .then((response) => {
                    this.pedido = response.data;
                });
        },
        atualizarPedido() {
            PedidoDataService.atualizar(this.pedido.id, this.pedido)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    },
    mounted() {
        this.obterPedido(this.$route.params.id);
    }
}
</script>