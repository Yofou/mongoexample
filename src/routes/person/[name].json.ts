import type { RequestHandler } from "@sveltejs/kit"
import { Person } from '$lib/models/Person'

export const get: RequestHandler = async ({ params }) => {

    const { name } = params
    const person = await Person.findOne({ name })

    if ( !person ) return { body: {} }

    return {
        body: {
            name: person.name,
            age: person.age,
            country: person.country
        }
    }
}