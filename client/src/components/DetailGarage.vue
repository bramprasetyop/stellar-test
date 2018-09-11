<template>
  <div class="container">
    <a @click="toHome">
      <h1 style="color:white">Garage</h1>
    </a>

    <hr>
    <div class="row">
      <div class="input-field col s12">

        <div id="containername">
          <div class="row">
            <div class="col s10">
              <h4 id="garagename">{{garage.name}}</h4>
            </div>
            <div class="col s2">
              <a @click="editData" v-if="!showEdit" class="btn-floating btn-large waves-effect waves-light red">
                <i class="material-icons">edit</i>
              </a>
              <a @click="saveEdit(garage.maximum_cars,garage.address,garage.email,garage.phone)" v-if="showEdit" class="btn-floating btn-large waves-effect waves-light red">
                <i class="material-icons">save</i>
              </a>
            </div>
          </div>

          <div class="row">
            <div class="col s12 ">
              <h5 v-if="!showEdit" id="max" style="text-align:center"> Max Car : {{garage.maximum_cars}}</h5>
              <label v-if="showEdit">
                <h6 style="color:white">Max car</h6>
              </label>
              <input v-if="showEdit" id="editData" v-model="garage.maximum_cars">

            </div>
            <div class="col s12 ">
              <h5 v-if="!showEdit" id="city" style="text-align:center">City : {{garage.address}}</h5>
              <label v-if="showEdit">
                <h6 style="color:white">Address</h6>
              </label>

              <input v-if="showEdit" id="editData" v-model="garage.address">

            </div>
            <div class="col s12 ">
              <h5 v-if="!showEdit" id="city" style="text-align:center">Email : {{garage.email}}</h5>
              <label v-if="showEdit">
                <h6 style="color:white">Email</h6>
              </label>

              <input v-if="showEdit" id="editData" v-model="garage.email">

            </div>
            <div class="col s12 ">
              <h5 v-if="!showEdit" id="city" style="text-align:center">Phone : {{garage.phone}}</h5>
              <label v-if="showEdit">
                <h6 style="color:white">Phone</h6>
              </label>

              <input v-if="showEdit" id="editData" v-model="garage.phone">

            </div>
            &nbsp;
            <h4 id="garagecarname">Cars</h4>
            <hr>

            <div id="rowcar" class="row">

              <div class="col s12" v-for="car in dataCar" :key="car">
                <a @click="editCar(car._id)" id="caringarage">
                  <h5 id="carbrand" style="color:white">{{car.brand}}</h5>
                </a>
              </div>
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
      garage: '',
      showEdit: false,
      dataCar: []
    }
  },
  created() {
    this.getData()
    this.getDataCar()
  },
  methods: {
    toHome() {
      this.$router.push('/garages')
    },
    getData() {
      this.$http
        .get(`http://localhost:3000/garage/${this.$route.params.id}`)
        .then(response => {
          this.garage = response.data.garage
        })
    },
    getDataCar() {
      this.$http
        .get(`http://localhost:3000/carbyid/${this.$route.params.id}`)
        .then(response => {
  
          this.dataCar = response.data.cars[0].carId
          // console.log(response.data.cars[0].carId)
        })
    },
    editCar(id) {
      this.$router.push(`/car/edit/${id}`)
    },
    editData() {
      this.showEdit = true
    },
    saveEdit(max, address, email, phone) {
      if (max === '' || address === '' || email === '' || phone === '') {
        alert('all forms must be filled!')
      } else {
        let garages = {
          address: address,
          phone: phone,
          email: email,
          maximum_cars: max
        }
        this.$http
          .put(`http://localhost:3000/garage/${this.$route.params.id}`, garages)
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
#garagename {
  color: black;
  margin-left: 150px;
}
#garagecarname {
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

