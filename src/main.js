import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import BalmUI from 'balm-ui';
import 'balm-ui-css';

const app = createApp( App )
app.use( router( app ) )
app.use( store )
app.use( BalmUI )

app.mount( '#app' )

