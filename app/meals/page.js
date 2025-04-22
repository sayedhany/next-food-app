import React, { Suspense } from 'react'
import classes from './page.module.css'
import Link from 'next/link'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals';
import Loading from './laoding/loading';
async function Meals(){
  const meals = await getMeals();
  return <MealsGrid meals={meals}/>
}
async function MealsPage() {
  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>By You</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself
        </p>
        <p className={classes.cta}>
          <Link href='/meals/share'>
            Share your own recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching ....</p>}>

        <Meals/>
        </Suspense>
      </main>
    </>
  )
}

export default MealsPage
