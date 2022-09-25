import React from 'react'
import './header.css'
import ai from '../../assets/ai.png'
import people from '../../assets/people.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div class="gpt3__header-content">
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, modi veniam praesentium iusto blanditiis quia dolorem reprehenderit deserunt deleniti quo.</p>
        <div className='gpt3__header-content__input'>
          <input type="text" placeholder='Your email adress' />
          <button type="button">Get started</button>
        </div>

        <div className='gpt3__header-content__people'>
            <img src={people} />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>

      <div class="gpt3__header-image">
        <img src={ai} alt="" />
      </div>
    </div>
  )
}

export default Header
