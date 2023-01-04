import { fetchPromise } from '../helpers/fetchPromise'

class API {
    constructor( server ) {
        this.server = server
    }

    async makeCall( ep ) {
        try {
            let path = this.createTarget( ep )
            let res = await fetchPromise( path )
            return res.data.data
        } catch (error) {
            console.log( error )
        }
    }

    createTarget( ep ) {
        return 'http://' + this.server + '/' + ep
    }
}

export { API }
