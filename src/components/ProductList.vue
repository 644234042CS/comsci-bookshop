<template>
    <div className='row my-4'>

        <ProductListItem  v-for="book in books" :key="book.bookid" :book="book"/>
        
    </div>
</template>

<script setup >
import ProductListItem from '@/components/ProductListItem.vue'
import {  ref,onMounted } from 'vue'
import axios from "axios"

const books=ref([])
const apiUrl = 'https://raw.githubusercontent.com/kesinee-bo/sp01/master/Json/books_v2.json'
    onMounted(async () => {
        const response = await axios.get(apiUrl );
        books.value =  response.data;
    })

</script>

<style>
</style>