<script setup>
import { ref } from 'vue';

const produtos = ref([{
    foto: 'src/assets/fotosventiladores/v1.jfif',
    modelo: 'modelo bom',
    informativo: 'ventilador bom',
    preco: 200
}, {
    foto: 'src/assets/fotosventiladores/v1.jfif',
    modelo: 'modelo bom',
    informativo: 'ventilador bom',
    preco: 200
}, {
    foto: 'src/assets/fotosventiladores/v1.jfif',
    modelo: 'modelo bom',
    informativo: 'ventilador bom',
    preco: 200
}, {
    foto: 'src/assets/fotosventiladores/v1.jfif',
    modelo: 'modelo bom',
    informativo: 'ventilador bom',
    preco: 200
}])

</script>

<template>
    <section class="d-flex flex-column align-self-center w-100">


        <div class="d-flex justify-content-center mt-5">
            <div v-for="produto in produtos" class="card m-2" style="width: 18rem;">
                <img :src="produto.foto" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ produto.modelo }}</h5>
                    <h5 class="card-title">R${{ produto.preco }}</h5>
                    <p class="card-text">{{ produto.informativo }}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>


    </section>
</template>

<style></style>
