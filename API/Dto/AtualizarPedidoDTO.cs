using SistemaVendas.Models;

namespace SistemaVendas.Dto
{
    public class AtualizarPedidoDTO
    {
        public DateTime Data { get; set; }
        public int VendedorId { get; set; }
        public int ClienteId { get; set; } 
    }
}