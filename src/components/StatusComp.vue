<template>
  <div class="container center">
    <table>
      <tr>
        <th v-for="header in headers" v-bind:key="header" > <p class="header-text"> {{ header }} </p> </th>
      </tr>
      <tr v-for="entry in $store.getters['collections']" v-bind:key="entry" >
        <td v-for="data in entry" v-bind:key="data" > <p class="data-text"> {{ data }} </p> </td>
      </tr>
    </table>
  </div>
</template>

<script>
import store from '@/store'
import { API } from '../util/api/index'

export default {
  name: 'StatusComp',
  data() {
    return {
      headers : []
    }
  },

  props: {
    msg: String
  },

  async created() {
    const bc = new API( process.env.VUE_APP_BYTECELLAPIHOST )
    store.dispatch( 'setCollections', await bc.makeCall( 'collections/status' ) )
    this.extractHeaders()
    //console.log( store.getters['collections'] )
  },

  methods: {
    extractHeaders() {
      this.headers = Object.keys( store.getters['collections'][0] )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 90%;
  overflow: scroll;
}
table {
  width: 100%;
}
.center {
  margin: auto;
  width: 90%;
  border: 3px solid rgb(196, 218, 218);
  padding: 10px;
}

tr:nth-child(even){background-color: #f2f2f2;}

tr:hover {background-color: #ddd;}

.error {
  background-color: rgb(207, 90, 90);
}
.healty {
  background-color: rgb(103, 194, 103);
}

@media screen and (max-width: 760px) {
  .data-text {
    font-size: 10px;
  }
  .header-text {
    font-size: 10px;
  }
}

@media screen and (max-width: 487px) {
  .data-text {
    font-size: 8px;
  }
  .header-text {
    font-size: 8px;
  }
}

</style>
