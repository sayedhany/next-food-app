'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidText = (text) => {
  return text.length || text.trim() === '' ;
}
export async function submitData(_,formdata){
  console.log('Form submitted!', formdata);
  const meal = {
    creator_email: formdata.get('email'),
    title: formdata.get('title'),
    summary: formdata.get('summary'),
    instructions: formdata.get('instructions'),
    image: formdata.get('image'),
    creator: formdata.get('name'),
    slug: formdata.get('title').toLowerCase().replace(/ /g, '-'),
  };

  const errors = {};

  if (isInvalidText(meal.title)) {
    errors.title = 'Title is invalid or empty.';
  }
  if (isInvalidText(meal.summary)) {
    errors.summary = 'Summary is invalid or empty.';
  }
  if (isInvalidText(meal.instructions)) {
    errors.instructions = 'Instructions are invalid or empty.';
  }
  if (isInvalidText(meal.creator)) {
    errors.creator = 'Creator name is invalid or empty.';
  }
  if (isInvalidText(meal.creator_email)) {
    errors.creator_email = 'Creator email is invalid or empty.';
  }
  if (isInvalidText(meal.image)) {
    errors.image = 'Image URL is invalid or empty.';
  }

  if (Object.keys(errors).length > 0) {
    return {
      message: 'Invalid input',
      errors,
    };
  }

  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
  
  
}