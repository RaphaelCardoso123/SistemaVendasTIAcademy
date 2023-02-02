<template>
    <h3>NOVO ITEM PEDIDO</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
            <div>
                <label class="form-label">PedidoId</label>
                <input type="text" required v-model="itemPedido.pedidoId" class="form-control" placeholder="PedidoId">
            </div>
            <div>
                <label class="form-label">ServicoId</label>
                <input type="text" required v-model="itemPedido.servicoId" class="form-control" placeholder="ServicoId">
            </div>
            <div>
                <label class="form-label">Quantidade</label>
                <input type="text" required v-model="itemPedido.quantidade" class="form-control" placeholder="Quantidade">
            </div>
            <div>
                <label class="form-label">Valor</label>
                <input type="text" required v-model="itemPedido.valor" class="form-control" placeholder="Valor">
            </div>
            <button class="btn btn-success" @click="cadastrarItemPedido" style="margin-top: 2%;">Cadastrar</button>
        </div>
    </div>
</template>
<script>
import ItemPedidoDataService from '../../services/ItemPedidoDataService';

export default {
    data() {
        return {
            itemPedido: {
                pedidoId: '',
                servicoId: '',
                quantidade: '',
                valor: ''
            }
        }
    },
    methods: {
        cadastrarItemPedido() {
            var data = {
                pedidoId: this.itemPedido.pedidoId,
                servicoId: this.itemPedido.servicoId,
                quantidade: this.itemPedido.quantidade,
                valor: this.itemPedido.valor
            };

            ItemPedidoDataService.cadastrar(data)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    }
}
</script>