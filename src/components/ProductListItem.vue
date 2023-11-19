<template>
    <div class="col-lg-4 col-md-6 col-sm-4 mb-4">
        <div class="card  h-100">
            <div class="text-center mt-2">
                <router-link :to="{ name: 'ProductDetail', params: { id: book.bookid }}">
                    <img :src="book.thumbnailUrl" style="width: 200px;" class="card-img-top" alt="..." />
                </router-link>
            </div>
            <div class="card-body">
                <router-link :to="{ name: 'ProductDetail', params: { id: book.bookid }}">
                    
                    <h5 class="card-title fw-bold fs-5">{{book.title}}</h5>
                
                </router-link>
                <!-- <p class="card-text text-black">{{ book.shortDescription.substring(0,100)+" ..." }}</p> -->
                
                <div class="row">
                    <div class="col-4 fs-5  fw-bold text-start text-primary">
                        {{book.price}}  ฿
                    </div>
                    <div class="col-8 text-end">
                        <button class="btn btn-primary" @click="store.addToCart(book)">
                            <i class="bi bi-cart-check"></i> เพิ่มลงรถเข็น
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>  
</template>

<script setup >
    import { useShoppingStore} from '@/stores/index'

    const store = useShoppingStore()
    const props = defineProps(["book"])
</script>

<style>
    
</style>