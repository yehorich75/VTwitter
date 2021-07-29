const app = {
    data() {
        return {
            title: "VTwitter",
            item: "",
            items: [],
        }
    },
    methods: {
        onSubmit () {
            this.items.push(this.item);
            // reset
            this.item = "";
            
        },
    },
};

// const menu = {
//     data() {
//         return {
//             title: 'Menu'
//         }
//     }
// }

Vue.createApp(app).mount('#app');
// Vue.createApp(menu).mount('#menu');