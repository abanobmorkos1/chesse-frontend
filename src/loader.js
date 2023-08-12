import {URL} from './base_url'
export const cheeseLoader = async () => {
    const response = await fetch(`${URL}/cheese`)
    const cheese = await response.json()
    return cheese 
}

export const cheezeLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(`${URL}/cheese/${id}`)
    const cheese = await response.json()
    console.log(cheese)
    return cheese
}