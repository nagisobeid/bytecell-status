<template>
    <div class="container">
        <div v-if="!this.product && !this.error" class="spinner-container">
            <ui-spinner active></ui-spinner>
        </div>
        <div v-else-if="this.error">
            <Error> {{  this.error  }} </Error>
        </div>
        <div v-else-if="this.product">
            <div class="display-flex small-spacing" >
                <h3 style="color : green" >{{ this.product.id }} </h3> 
                <h3 style="color : rgb(0, 107, 128)"><strong> :{{ this.product.title }}</strong></h3>
            </div>
            <div class="display-flex2 small-spacing">
                <p class="mini-width">SOURCE</p>
                <ui-textfield 
                    class="large-width"
                    fullwidth
                    v-model="product.href"
                    outlined>
                </ui-textfield>
            </div>
            <div class="display-flex2 small-spacing">
                <p class="mini-width">UUID</p>
                <ui-textfield 
                    class="large-width"
                    fullwidth
                    v-model="product.uuid"
                    outlined>
                </ui-textfield>
            </div>
            <div style="width: 100%">
                <ui-button 
                    @click="updateProduct"
                    style="width: 100%" 
                    class="small-spacing" 
                    raised>
                    Update
                </ui-button>
            </div>
        </div>
    </div>
</template>
  
<script>

import  API from '../util/api/index';
import Error from '../components/ErrorMessage.vue'
  
export default {

    name: 'StaleProducts',

    data() {
        return {
            product : false,
            oldUuid : false,
            error : false,
            api :  new API( 
				process.env.VUE_APP_BYTECELLAPIHOST, 
				{ 'BYTECELLAPIKEY' : process.env.VUE_APP_BYTE_CELL_API_KEY } 
			)
        }
    },

    props: {},

    async created() {
		try {

			const response = await this.api.get( `api/products/${this.$route.params.id}` );
            this.product = response.data;
            this.oldUuid = this.product.uuid;

		} catch (error) {
            this.error = error.statusText;
			console.error( error.statusText );
		}
	},

    methods: {
        async updateProduct() {
            const product = this.product;
            this.product = false;
            const response = await this.api.put( `api/products/many/${this.oldUuid}`, product );
            console.log( response )
            this.product = response.data;
        }
    },

    components : {
        Error
    }

}

</script>
  
 
<style scoped>
.container {
    display: block;
    margin: 10px;
    height: 100%;
    text-align: center;

    .small-spacing {
        margin: 5px;
    }

    .display-block {
        display: inline-block;
    }
    .display-flex {
        display: flex;   
    }
    .mini-width {
        flex: 1;
    }
    .large-width {
        flex: 11;
    }
}
</style>
  