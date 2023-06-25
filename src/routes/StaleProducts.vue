<template>
    <div class="container">
        <ui-table 
            class="table"
            fullwidth
            :fixedHeader="true" 
            :scroll="{ x:true, y:true }" 
            :defaultColWidth="0"  
            :data="tdata" 
            :thead="thead" 
            :tbody="tbody">

            <div v-if="!this.prods && !this.error" class="spinner-container">
                <ui-spinner active></ui-spinner>
            </div>
            <div v-else-if="this.error">
                <Error> {{  this.error  }} </Error>
            </div>

            <template #actions="{ data }">
                <ui-icon class="clickable" @click="editProduct(data)">edit</ui-icon>
            </template>

            <ui-pagination
                v-model="page"
                :total="total"
                show-total
                :pageSize="perPage"
                @update:model-value="onPage"
            ></ui-pagination>
        </ui-table>
    </div>
</template>
  
<script>

import  API from '../util/api/index';
import Error from '../components/ErrorMessage.vue';
  
export default {

    name: 'StaleProducts',

    data() {
        return {
            prods : false,
            tdata : [],
            page : 1,
            total : 0,
            perPage : 20,
            error : false,
            thead: [
                'Actions',
                'Title',
                'Collection',
                'Source',
                'ID',
                'UUID',
                'Out-Of-Stock-Count'
            ],
            tbody: [ { slot: 'actions' }, 'title', 'collection', 'href', 'id', 'uuid', 'outOfStockCount']
        }
    },

    props: {},

    async created() {
		try {

			const api = new API( 
				process.env.VUE_APP_BYTECELLAPIHOST, 
				{ 'BYTECELLAPIKEY' : process.env.VUE_APP_BYTE_CELL_API_KEY } 
			);

			const response = await api.get( 'api/products/stale' );
            const data = JSON.parse( response.data );
            this.total = data.length;
            this.prods = data;
            this.tdata = data.slice( 0,this.perPage );

		} catch (error) {

            this.error = error.statusText;
			console.error( error.statusText );

		}
	},

    methods: {
        
        onPage( page ) {
            this.tdata = this.prods.slice( ( page * this.perPage ) - this.perPage , ( page * this.perPage ) )
        },

        editProduct( product ) {
            this.$router.push({ name: 'EditProduct', params: { id: product.id } })
        }

    },

    components : {
        Error
    }

}

</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    display: flex;
    margin: 10px;
    height: 100%;
    text-align: center;
    .table {
        height: 100% !important;
        .clickable {
            cursor: pointer;
        }
    }
}
</style>
  