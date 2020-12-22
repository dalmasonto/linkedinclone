import { FiberManualRecord, Info, NewReleases } from '@material-ui/icons'
import React from 'react'
import '../styles/Widgets.css'

function Widgets() {

  const article = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__article__left">
          <FiberManualRecord className="widgets__left__icon"/>
        </div>
        <div className="widgets__article__right">
          <h4> {heading} </h4>
          <p> {subtitle} </p>
        </div>
      </div>
    )
  }

  const news = [
    {heading: "PAPA React is GREAT", subtitle: "Top news - 9099 readers"},
    {heading: "Tesla hits new highs", subtitle: "Cars & auto - 1020 readers"},
    {heading: "Covid 19 Kenya", subtitle: "Top news - 15000 readers"},
    {heading: "Aubameyang!!", subtitle: "Arsenal club news - 2000 readers"},
    {heading: "Liverpool club plans", subtitle: "Arena of sports - 5678 readers"},
    {heading: "County governments in Kenya", subtitle: "Kenya's top news - 20978 readers"},
    {heading: "Online graduations", subtitle: "Kenya's top news - 50000 readers"},
  ]

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2> LinkedIn news </h2> 
        <NewReleases className="icon"/>
      </div>

    {
      news.map((eacharticle) => {
        return (
          article(eacharticle.heading, eacharticle.subtitle)
        )
      })
    }

    </div>
  )
}

export default Widgets
