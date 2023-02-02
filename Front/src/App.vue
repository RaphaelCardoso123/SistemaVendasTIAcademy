<script setup>
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <!-- Vendedor -->
        <li class="nav-item">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Vendedor
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <router-link class="dropdown-item" to="/vendedor/listar">Listar</router-link>
                  <router-link class="dropdown-item" to="/vendedor/cadastrar">Cadastrar</router-link>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <!-- Cliente -->
        <li class="nav-item">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Cliente
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <router-link class="dropdown-item" to="/cliente/listar">Listar</router-link>
                  <router-link class="dropdown-item" to="/cliente/cadastrar">Cadastrar</router-link>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <!-- Serviço -->
        <li class="nav-item">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Serviço
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <router-link class="dropdown-item" to="/servico/listar">Listar</router-link>
                  <router-link class="dropdown-item" to="/servico/cadastrar">Cadastrar</router-link>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <!-- Pedido -->
        <li class="nav-item">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Pedido
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <router-link class="dropdown-item" to="/pedido/listar">Listar</router-link>
                  <router-link class="dropdown-item" to="/pedido/cadastrar">Cadastrar</router-link>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <!-- ItemPedido -->
        <li class="nav-item">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  ItemPedido
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <router-link class="dropdown-item" to="/itemPedido/listar">Listar</router-link>
                  <router-link class="dropdown-item" to="/itemPedido/cadastrar">Cadastrar</router-link>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      </div>
  </nav>
  <router-view />

</template>

<style scoped>

</style>
