<script setup>
import { ref } from 'vue';

const fotos = ref(['src/assets/escritorio1.jfif', 'src/assets/escritorio2.jfif', 'src/assets/loja1.jfif'])

</script>

<template>
    <section class="d-flex flex-column align-self-center w-100 text-center">
       <h1 class="mt-5">Vento fresco</h1>

       <p class="mt-3">Venda, instalação e manutenção de sistemas de ar condicionado residenciais, comerciais e industriais
Abre às 07:30 de segunda-feira</p>



<div id="carouselExample"  style="max-width: 700px;" class="carousel slide mx-auto mt-5 mb-5 w-100">
  <div class="carousel-inner">
    <div v-for="foto in fotos" class="carousel-item active">
      <img :src="foto" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<ul>
    <li>seg.:	07:30 – 17:30</li>
    <li>ter.:	07:30 – 17:30</li>
    <li>qua.:	07:30 – 17:30</li>
    <li>qui.:	07:30 – 17:30</li>
    <li>sex.:	07:30 – 17:30</li>
    <li>sab :   Fechado</li>
    <li>dom:    Fechado</li>
</ul>
    </section>
</template>

<style></style>
