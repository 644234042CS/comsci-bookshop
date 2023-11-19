<template>
    <div class="row mt-4">
        <div class="col-md-4">
            <img :src="books.find(x => x.bookid === bookid )?.thumbnailUrl" class="card-img-top rounded" alt="..." />
        </div>
        <div class="col-md-8">
            <div class="row">
                <div class="col-md-8 mt-3">
                    <h2 class="fw-bold mb-4">{{ books.find(x => x.bookid === bookid )?.title }}</h2>
                </div>
                <div class="col-md-4 text-end">
                    <router-link to='/' class="btn btn-secondary"><i class="bi bi-caret-left"></i> กลับหน้าหลัก</router-link>
                </div>
            </div>
            
            <h4 class="fw-bold card-text mb-3  text-danger">{{ books.find(x => x.bookid === bookid )?.author }}</h4>
            <p style="white-space: pre-line">{{ books.find(x => x.bookid === bookid )?.shortDescription }}</p>
            <h5 class="fw-bold text-success">ข้อมูลหนังสือ</h5>
            <div><b>ISBN</b> : {{ books.find(x => x.bookid === bookid )?.isbn  }}</div>
            <div><b>จำนวนหน้า</b> : {{ books.find(x => x.bookid === bookid )?.pageCount  }}</div>
            <div><b>พิมพ์เมื่อ</b> : {{ monthYear  }}</div>
            
           <div class="row mt-4">
            <div class="col text-start">
                <h5 class="card-text text-primary fw-bold">ราคา: {{ books.find(x => x.bookid === bookid )?.price }} ฿</h5>
        
            </div>
            <div class="col text-end">
                <button class="btn btn-primary"  @click="store.addToCart(books.find(x => x.bookid === bookid ))">
                    <i class="bi bi-cart-check"></i> เพิ่มลงรถเข็น
                </button>
            </div>
           </div>
            
                    
           
            
        </div>
    </div>
</template>
<script setup >
    import { useRoute } from 'vue-router'
    import {  ref,computed,onMounted } from 'vue'
    import axios from "axios";

    // Mockup Data
    //import products from '@/mockupdata/products'
    import { useShoppingStore} from '@/stores/index'
    const store = useShoppingStore()

    const route = useRoute()
    let bookid = Number(route.params.id)

    const books=ref([])
    const apiUrl = 'https://raw.githubusercontent.com/kesinee-bo/sp01/master/Json/books_v2.json'
    onMounted(async () => {
        const response = await axios.get(apiUrl );
        books.value =  await response.data;
    })


    const monthYear=computed(()=>{
        const date=new Date(books.value.find(x => x.bookid === bookid )?.publishedDate)
        const result = date.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            //day: 'numeric',
        })
        return  result;
    })
</script>
<style scoped>
</style>