import type { Handle } from "@sveltejs/kit";
import { connect, connection } from 'mongoose'

export const handle: Handle = async ({ request, resolve }) => {    
    // if they first connection is disconnected (ready state 0), then connect they client
    // this should only ever run once.
    if ( connection.readyState === 0 ){
        const MONGO = import.meta.env.VITE_MONGO as string
        connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true})
    }

    // anything ran before the resolve function is server side, any thing ran past it client side
    const response = await resolve( request ) 
    return {
        ...response,
    }
}   