import React from 'react'
import { logo } from '../assets/assets'

const Hero = () => {
  return (
    <header className='w-full flex flex-col justify-center items-center'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="logo" className='w-28 object-contain' />
        <button
          type='button'
          onClick={() => window.open('https://github.com/HasanHafizurRahman/ai-article-summarizer')}
          className='black_btn'
        >Code</button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero