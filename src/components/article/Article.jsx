import React from 'react'
import './article.css'

const Article = ({imgUrl, date, text}) => {
  return (
    <div className='container-article'>
      <div className='container-image'>
        <img src={imgUrl} alt="" />
      </div>
      <div className='container-info'>
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read full details</p>
      </div>
    </div>
  )
}

export default Article
