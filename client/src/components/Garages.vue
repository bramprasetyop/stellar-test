<template>
  <div class="container">
    <h1 style="color:white">Garages</h1>
    <hr>
    <div class="row">
      <div class="input-field col s12" v-for="(garage) in garages" :key="garage">

        <div id="containername">
          <a @click="detailGarage(garage._id)">
            <h4 id="garagename">{{garage.name}}</h4> </a>
            <div class="row">
              <!-- <div class="col s3 "></div> -->
              <div class="col s6 "><h6 id="max" style="text-align:right"> Max Car: {{garage.maximum_cars}}</h6></div>
              <div class="col s6 "><h6 id="city" style="text-align:left">City: {{garage.address}}</h6></div>
              
              <!-- <div class="col s3"></div> -->
            </div>

         
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      garages: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$http.get('http://localhost:3000/garage').then(response => {
        this.garages = response.data.garages
      })
    },
    detailGarage(id){
      // console.log(id,'masuk sini gan');
      this.$router.push(`/garage/${id}`)
      
    }
  }
}
</script>


<style scoped>
.container {
  /* border: 1px solid black; */
  position: absolute;
  width: 70%;
  left: 15%;
  right: 15%;
}
a:hover {
  cursor: pointer;
  color: white;
}

a {
  color: black;
}
#containername {
  border: 1px solid rgb(243, 239, 239);
  border-radius: 10px;
}
hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
}

#max{
  color: white;
}
#city{
    color: white;

}
</style>

