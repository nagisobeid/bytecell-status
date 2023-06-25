import axios from 'axios';

export default class API {
    
    constructor( baseUrl, headers={} ) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    // get requests
    async get( resource ) {
        try {
            
            const response = await axios( 
                { 
                    url     : `${this.baseUrl}/${resource}`, 
                    headers : this.headers, 
                    method  : 'get' 
                } 
            )

            return response

        } catch ( error ) {

            console.error( 'class_api', error )
            
            let err = {
                message : error.message,
                code : error.code
            }

            if ( error.response ) {
                err.status = error.response.status;
                err.statusText = error.response.data.message;
            }

            throw( err )
        }
    }

    // post requests
    //async post( resource, body, options ) {}

    // put requests
    async put( resource, body, options=false ) {
        try {
            
            const response = await axios( 
                { 
                    url     : `${this.baseUrl}/${resource}`, 
                    headers : this.headers,
                    data    : body,
                    method  : 'put' 
                } 
            )

            return response

        } catch ( error ) {

            console.error( 'class_api', error )
            
            let err = {
                message : error.message,
                code : error.code
            }

            if ( error.response ) {
                err.status = error.response.status;
                err.statusText = error.response.statusText;
            }

            throw( err )
        }
    }

}