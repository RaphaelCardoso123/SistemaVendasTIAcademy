<template>
    <h3>LISTAGEM DE ITENS PEDIDO</h3>
    <div class="col-7">
        <hr/>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">PedidoId</th>
                    <th scope="col">ServicoId</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Valor Total</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
               <tr v-for="(itemPedido, index) in itensPedido" :key="index">
                    <td>{{ itemPedido. id }}</td>
                    <td>{{ itemPedido. pedidoId }}</td>
                    <td>{{ itemPedido. servicoId }}</td>
                    <td>{{ itemPedido. quantidade }}</td>
                    <td>{{ itemPedido. valor }}</td>
                    <td>{{ itemPedido. valorTotal }}</td>
                    <td>
                        <button class="btn btn-success" @click="editarItemPedido(itemPedido.id)">Editar</button>
                        <button class="btn btn-danger" @click="excluirItemPedido(itemPedido)">Excluir</button>
                    </td>
               </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ItemPedidoDataService from '../../services/ItemPedidoDataService';

export default {
    data() {
        return {
            itensPedido: []
        }
    },
    methods: {
        obterItensPedido() {
            ItemPedidoDataService.listar()
                .then(response => {
                    this.itensPedido = response.data;
                    for(let item of this.itensPedido)
                    {
                        item.valorTotal = item.quantidade*item.valor;
                    }
                });
        },
        editarItemPedido(id) {
            this.$router.push('/itemPedido/' + id);
        },
        async excluirItemPedido(itemPedido) {
            if (confirm(`Tem certeza que deseja excluir o item pedodo ${itemPedido.id}?`)) { 
                await ItemPedidoDataService.deletar(itemPedido.id);
                this.obterItensPedido();
            }
        }
    },
    mounted() {
        this.obterItensPedido();
    }

}
</script>