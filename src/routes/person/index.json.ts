import type { RequestHandler } from "@sveltejs/kit";
import type { JSONValue } from "@sveltejs/kit/types/endpoint";
import { Person } from '$lib/models/Person';

export const get: RequestHandler =  async () => {
    const allPerson = await Person.find()

    return {
        body: {
            people: allPerson as JSONValue
        }
    }
}

export const post: RequestHandler = async ({ body }) => {
    const { name, age, country } = body as any
    
    if ( !name || !age || !country  ) return {
        body : {
            res: null
        }
    }

    const person = new Person({
        name, age, country
    })

    await person.save()

    return {
        body: {
            res: 'user added'
        }
    }
}