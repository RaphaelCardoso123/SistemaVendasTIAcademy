<template>
    <h3>LISTAGEM DE PEDIDOS</h3>
    <div class="col-7">
        <hr/>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Data</th>
                    <th scope="col">VendedorId</th>
                    <th scope="col">ClienteId</th>
                    <th scope="col">Ações</th>
                    <!--<th scope="col">ValorTotal</th>-->
                </tr>
            </thead>
            <tbody>
               <tr v-for="(pedido, index) in pedidos" :key="index">
                    <td>{{ pedido. id }}</td>
                    <td>{{ pedido. data }}</td> 
                    <td>{{ pedido. vendedorId }}</td>
                    <td>{{ pedido. clienteId }}</td>
                    <!--<td>{{ pedido. valorTotal }}</td>-->
                    <td>
                        <button class="btn btn-success" @click="editarPedido(pedido.id)">Editar</button>
                        <button class="btn btn-danger" @click="excluirPedido(pedido)">Excluir</button>
                    </td>
               </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import PedidoDataService from '../../services/PedidoDataService';

export default {
    data() {
        return {
            pedidos: []
        }
    },
    methods: {
        obterPedidos() {
            PedidoDataService.listar()
                .then(response => {
                    this.pedidos = response.data;
                });
        },
        editarPedido(id) {
            this.$router.push('/pedido/' + id);
        },
        async excluirPedido(pedido) {
            if (confirm(`Tem certeza que deseja excluir o pedido ${pedido.id}?`)) { 
                await PedidoDataService.deletar(pedido.id);
                this.obterPedidos();
            }
        }
    },
    mounted() {
        this.obterPedidos();
    }

}
</script>