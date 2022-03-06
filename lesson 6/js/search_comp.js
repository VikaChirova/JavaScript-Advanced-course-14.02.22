Vue.component('searchform', {
   props: ['value'],
   template: `
   <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
       <input type="text" class="header-top-input" v-model="userSearch">
       <button class="btn-search" type="submit">
           <i class="fas fa-search"></i>
       </button>
   </form>
   `
});
