import { redirect } from "react-router-dom"
import {URL} from './base_url'

export const createAction = async ({request}) => {
  const formData = await request.formData()
  const newCheese = {
      name: formData.get('name'),
      image: formData.get('image')
  }
  await fetch(`${URL}/cheese`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newCheese)
  })

  return redirect('/')
}

export const updateAction = async ({request, params}) => {
  const id = params.id
  const formData = await request.formData()
  const updatedCheese = {
      name: formData.get('name'),
      image: formData.get('image'),

  }
  await fetch(`${URL}/cheese/${id}`, {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedCheese)
  })
  return redirect(`/${id}`)
}

export const deleteAction = async({params}) => {
  const id = params.id
  await fetch(`${URL}/cheese/${id}` , {
      method: 'DELETE'
  })
  return redirect('/')
}