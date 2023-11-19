<template>
    <nav class="navbar navbar-expand-lg bg-dark fixed-top">
        <div class="container">

            <router-link class="navbar-brand mt-1 fs-5 text-light" to="/">ComSci Book Shop</router-link>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav  mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link text-light" :to="{ name: 'Home' }">หน้าหลัก</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-light" :to=" { name: 'About'}">เกี่ยวกับเรา</router-link>
                    </li>
                </ul>
            </div>

            <div class="d-flex">
                
                <span class="d-block px-2"></span>

                <router-link class="nav-link text-light mt-1" :to="{ name: 'Cart' }"><i class="bi bi-cart-check"></i> ตะกร้าสินค้า ({{ store.cartItems.length}})</router-link> 
                  <span class="d-block px-2"></span>

                <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="bi bi-list"></i>
                </button>

                

            

            </div>
            
            
        </div>
    </nav>
</template>

<script setup >
  
    import { useShoppingStore} from '@/stores/index'

    const store = useShoppingStore()
</script>


<style>
</style>