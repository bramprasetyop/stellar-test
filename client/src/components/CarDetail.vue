<template>
  <div class="container">
    <a @click="toHome">
      <h1 style="color:white">Car</h1>
    </a>

    <hr>
    <div class="row">
      <div class="input-field col s12">

        <div id="containername">
          <div class="row">
            <div class="col s10">
              <h4 id="carname">{{car.brand}}</h4>
            </div>
            <div class="col s2">
              <a @click="editData" v-if="!showEdit" class="btn-floating btn-large waves-effect waves-light red">
                <i class="material-icons">edit</i>
              </a>
              <a @click="saveEdit(car.model,car.color,car.year,car.price)" v-if="showEdit" class="btn-floating btn-large waves-effect waves-light red">
                <i class="material-icons">save</i>
              </a>
            </div>
          </div>

          <div class="row">
            <div class="col s12 ">
              <h5 v-if="!showEdit" id="max" style="text-align:center"> Model : {{car.model}}</h5>
              <label v-if="showEdit">
                <h6 style="color:white">Model</h6>
              </label>
              <input v-if="showEdit" id="editData" v-model="car.model">

            </div>
            <div class="col s12 ">
              <h5 v-if="!showEdit" id="city" style="text-align:center">Color : {{car.color}}</h5>
              <label v-if="showEdit">
                <h6 style="color:white">Color</h6>
              </label>

              <input v-if="showEdit" id="editData" v-model="car.color">

            </div>
            <div class="col s12 ">
              <h5 v-if="!showEdit" id="city" style="text-align:center">Year : {{car.year}}</h5>
              <label v-if="showEdit">
                <h6 style="color:white">Year</h6>
              </label>

              <input v-if="showEdit" id="editData" v-model="car.year">

            </div>
            <div class="col s12 ">
              <h5 v-if="!showEdit" id="city" style="text-align:center">Price : Rp. {{formatPrice(car.price)}}</h5>
              <label v-if="showEdit">
                <h6 style="color:white">Price</h6>
              </label>

              <input v-if="showEdit" id="editData" v-model="car.price">

            </div>
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
      car: '',
      showEdit: false,
      dataCar: []
    }
  },
  created() {
    this.getData()
    
  },
  methods: {
    toHome() {
      this.$router.push('/garages')
    },
    getData() {
      this.$http
        .get(`http://localhost:3000/car/${this.$route.params.id}`)
        .then(response => {
          this.car = response.data.car
          // console.log(response.data.car);
          
          
        })
    },
       formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    editData() {
      this.showEdit = true
    },
    saveEdit(model,color,year,price) {
      if (model === '' || color === '' || year === '' || price === '') {
        alert('all forms must be filled!')
      } else {
        let cars = {
          model: model,
          color: color,
          year: year,
          price: price
        }
        this.$http
          .put(`http://localhost:3000/car/${this.$route.params.id}`, cars)
          .then(response => {
            // console.log(response)
          })
        this.showEdit = false
        alert('Success!')
      }
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

#max {
  color: white;
}
#city {
  color: white;
}
#carname {
  color: black;
  margin-left: 150px;
}
#carcarname {
  color: black;
  /* margin-left: 150px; */
}
#editData {
  width: 50%;
}
#rowcar {
  /* border: 1px solid rgb(15, 15, 15); */
  position: relative;
  width: 70%;
  left: 15%;
  right: 15%;
}
#carbrand {
  margin-left: 30px;
}
</style>

