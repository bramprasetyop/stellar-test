<template>
  <div class="content">
    <Car msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Car from '@/components/CarDetail.vue'

export default {
  components: {
    Car
  }
}
</script>