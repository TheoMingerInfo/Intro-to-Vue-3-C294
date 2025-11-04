const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            url:'https://www.etml.ch',
            inventory: 9,
            onSale: false,
            variants: [
                    { id: 2234, color: 'green' },
                    { id: 2235, color: 'blue' }
        ],
        sizes:['XS','S','M','L','XL']
    }
    }
})

