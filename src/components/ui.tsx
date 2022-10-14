import React from 'react'
import classes from './ui.module.scss'


export const Wrapper = (props: any) => {
  return (
    <div className={classes.Container}>
      {props.children}
    </div>
  )
}
 export const Title = (props: any) => {
    return (
      <h1 className={classes.title}>
        {props.children}
      </h1>
    )
  }
