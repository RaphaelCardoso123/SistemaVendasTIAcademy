using SistemaVendas.Dto;
using SistemaVendas.Models;
using SistemaVendas.Repository;
using Microsoft.AspNetCore.Mvc;

namespace SistemaVendas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemPedidoController : ControllerBase
    {
        
        private readonly ItemPedidoRepository _repository;
        public ItemPedidoController(ItemPedidoRepository repository)

        {
            _repository = repository;
        }


        [HttpPost]
        public IActionResult Cadastrar(CadastrarItemPedidoDTO dto)
        {
            var itemPedido = new ItemPedido(dto);
            _repository.Cadastrar(itemPedido);
            return Ok(itemPedido);
        }


        [HttpGet("{id}")]
        public IActionResult ObterPorId(int id)
        {
            var itemPedido  = _repository.ObterPorId(id);
            if (itemPedido  is not null)
            {
                return Ok(itemPedido );
            }
            else
            {
                return NotFound(new {Mensagem = "ItemPedido não encontrado!"});
            }
        }


        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            var itemPedido = _repository.ObterPorId(id);

            if(itemPedido is not null)
            {
                _repository.DeletarItemPedido(itemPedido);
                return NoContent();
            }
            else
            {
                return NotFound(new { Mensagem = "ItemPedido não encontrado"});
            }
        }


        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, AtualizarItemPedidoDTO dto)
        {
            var itemPedido = _repository.ObterPorId(id);
            if (itemPedido is not null)
            {
                itemPedido.MapearAtualizarItemPedidoDTO(dto);
                _repository.AtualizarItemPedido(itemPedido);
                return Ok(itemPedido);
            }
            else
            {
                return NotFound(new {Mensagem = "ItemPedido não encontrado!"});
            }
        }


        [HttpGet("Listar")]
        public IActionResult Listar()
        {
            var itemPedido = _repository.Listar();
            return Ok(itemPedido);
        }
    }
}