<template>
    <h3>NOVO PEDIDO</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
            <div>
                <label class="form-label">Data</label> 
                <input type="text" disabled v-model="pedido.data" class="form-control" placeholder="Data">
            </div>
            <div>
                <label class="form-label">VendedorId</label>
                <input type="text" required v-model="pedido.vendedorId" class="form-control" placeholder="VendedorId">
            </div>
            <div>
                <label class="form-label">ClienteId</label>
                <input type="text" required v-model="pedido.clienteId" class="form-control"  placeholder="ClienteId">
            </div>
            <button class="btn btn-success" @click="cadastrarPedido" style="margin-top: 2%;">Cadastrar</button>
        </div>
    </div>
</template>
<script>
import PedidoDataService from '../../services/PedidoDataService';

export default {
    data() {
        return {
            pedido: {
                data: new Date().toISOString(),
                vendedorId: '',
                clienteId: ''
            }
        }
    },
    methods: {
        cadastrarPedido() {
            var data = { 
                data: this.pedido.data,
                vendedorId: this.pedido.vendedorId, 
                clienteId: this.pedido.clienteId
            };

            PedidoDataService.cadastrar(data)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    }
}
</script>