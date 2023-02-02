<template>
    <h3>ATUALIZAR ITEM PEDIDO</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
            <div>
                <label class="form-label">Id</label>
                <input type="text" disabled v-model="itemPedido.id" class="form-control" placeholder="Id">
            </div>
            <div>
                <label class="form-label">PedidoId</label>
                <input type="text" disabled v-model="itemPedido.pedidoId" class="form-control" placeholder="PedidoId">
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
            <button class="btn btn-success" @click="atualizarItemPedido" style="margin-top: 2%;">Atualizar</button>
        </div>
    </div>
</template>
<script>
import ItemPedidoDataService from '../../services/ItemPedidoDataService';

export default {
    data() {
        return {
            itemPedido: { }
        }
    },
    methods: {
        obterItemPedido(id) {
            ItemPedidoDataService.obterPorId(id)
                .then((response) => {
                    this.itemPedido = response.data;
                });
        },
        atualizarItemPedido() {
            ItemPedidoDataService.atualizar(this.itemPedido.id, this.itemPedido)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    },
    mounted() {
        this.obterItemPedido(this.$route.params.id);
    }
}
</script>