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

			<div v-if="!this.collections" class="spinner-container">
                <ui-spinner active></ui-spinner>
            </div>

            <template #actions="{ data }">
                <ui-icon class="clickable" @click="editProduct(data)">edit</ui-icon>
            </template>
        </ui-table>
    </div>
</template>

<script>
import store from '@/store';
import  API from '../util/api/index';


export default {
	name: 'StatusPage',

	data() {
        return {
            collections : false,
            tdata : [],
            page : 1,
            total : 0,
            perPage : 20,
            thead: [
                'COLL',
                'SCHEDULE',
                'LASTUPDATE',
                'CURTIME',
                'SINCE_LASTSYNC',
                'STATUS'
            ],
            tbody: [ 
				'COLL',
                'SCHEDULE',
                'LASTUPDATE',
                'CURTIME',
                'SINCE_LASTSYNC',
                'STATUS'
			]
        }
    },

	props: {
		msg: String
	},

	async created() {
		try {

			const api = new API( 
				process.env.VUE_APP_BYTECELLAPIHOST, 
				{ 'BYTECELLAPIKEY' : process.env.VUE_APP_BYTE_CELL_API_KEY } 
			);

			const response = await api.get( 'api/collections/status' );
			this.collections = response.data;
            this.tdata = response.data.slice( 0,this.perPage );
			store.dispatch( 'setCollections', response.data )

		} catch (error) {

			console.error( error )

		}
	},

	methods: {
		onPage( page ) {
            this.tdata = this.prods.slice( ( page * this.perPage ) - this.perPage , ( page * this.perPage ) )
        }
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    display: flex;
    margin: 10px;
    max-height: 100%;
	text-align: center;
    .table {
        max-height: 100% !important;
        .clickable {
            cursor: pointer;
        }
    }
}

</style>
