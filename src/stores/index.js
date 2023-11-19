import {defineStore} from 'pinia'
import Swal from 'sweetalert2'
import {ref} from 'vue'
//import books from '@/mockupdata/books'

export const useShoppingStore = defineStore('shopping',()=>{

    const cartItems=ref([])


    function addToCart(item) {
        const index = cartItems.value.findIndex((book) => book.bookid === item.bookid)
        if (index !== -1) {
            cartItems.value[index].quantity += 1
            Swal.fire({
                //position: 'top-end',
                icon: 'success',
                title: `"${item.title}" ถูกปรับปรุงข้อมูบในตระกร้าสินค้า`,
                showConfirmButton: false,
                timer: 1500
            })
        } else {
item.quantity = 1
            cartItems.value.push(item)
            Swal.fire({
                //position: 'top-end',
                icon: 'success',
                title: `"${item.title}" ถูกเพิ่มไปยังตระกร้าสินค้า`,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    function incrementQ(item){
        const index = cartItems.value.findIndex((book) => book.bookid === item.bookid)
            cartItems.value[index].quantity += 1
    }

    function decrementQ(item){
        const index = cartItems.value.findIndex((book) => book.bookid === item.bookid)
            if (cartItems.value[index].quantity > 1) {
                cartItems.value[index].quantity -= 1
        }
    }


    // Remove Item from Cart
    function removeFromCart(item) {
        cartItems.value = cartItems.value.filter((book) => book.bookid !== item.bookid)
    }

    return { cartItems, addToCart,removeFromCart,incrementQ,decrementQ }
    
})