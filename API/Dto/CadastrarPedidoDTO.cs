namespace SistemaVendas.Dto
{
    public class CadastrarPedidoDTO
    {
        public DateTime Data { get; set; }
        public int VendedorId { get; set; }
        public int ClienteId { get; set; }
    }
}