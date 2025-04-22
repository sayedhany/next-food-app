import React from 'react'
import classes from './page.module.css'
import { getMeal } from '@/lib/meals';
import Image from 'next/image'
import { notFound } from 'next/navigation';

export async function generateMetadata({params}) {
  const meal = await getMeal(params.slug);
  if (!meal) {
    return {
      title: 'Meal not found',
      description: 'This meal does not exist',
    }
  }
  return {
    title: meal.title,
    description: meal.summary,
    openGraph: {
      title: meal.title,
      description: meal.summary,
      images: [
        {
          url: meal.image,
          width: 800,
          height: 600,
        },
      ],
    },
  }
}

async function MealPage({params}) {
  const meal = await getMeal(params.slug);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, '<br/>');
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image alt={meal.title} src={meal.image} fill/>
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <div className={classes.summary}>
            {meal.summary}
          </div>
        </div>
      </header>
      <main>
        <div className={classes.instructions}
        dangerouslySetInnerHTML={{__html: meal.instructions}}
        ></div>
      </main>
    </>
  )
}

export default MealPage
