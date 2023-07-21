import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='overlay lg:flex lg:items-center lg:justify-center lg:space-x-60 mx-20'>
            <article className='lg:mt-20'>
                <h1 className='text-2xl text-gray-400 '>SO, YOU WANT TO TRAVEL TO <span className='block text-4xl lg:text-6xl mt-5 mb-4 text-white'>SPACE</span></h1>
                <p className='text-gray-400'>
                Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well, sit back, and relax because we'll give you a truly out
              of this world experience!
                </p>
            </article>

            <article className='mt-14'>
                <button className='w-52 h-52 rounded-full bg-white text-black uppercase font-bold lg:text-2xl tracking-wide animate-pulse '>
                    <Link to="/destination">
                        Explore
                    </Link>
                </button>
            </article>
        </div>
      </section>
    </>
  )
}

export default Home