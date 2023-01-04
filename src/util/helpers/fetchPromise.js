const axios = require('axios');

const headers = { 'BYTECELLAPIKEY' : process.env.VUE_APP_BYTE_CELL_API_KEY }

export const fetchPromise = ( url ) => {
    return new Promise( ( resolve, reject ) => {
        try {
            let res = axios( { url, headers, method : 'get' } )
            resolve( res )
        } catch ( error ) {
            reject( error )
        }
    } )
}