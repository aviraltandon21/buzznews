import React from 'react'
import { useGlobalContext } from './context'

const Stories = () => {
  const {isLoading,hits} = useGlobalContext()
  if (isLoading) {
    return <div className='loading'></div>
  }
  return (

  <section className='stories'>
  {hits.map((story) => {
    const { objectID, title, num_comments, url,author } = story
    return ( 
      <article className="story">
          <article key={objectID} className='story'>
            <h4 className='title'>{title}</h4>
            <p className='info'>
              Author : <span>{author} | </span> {num_comments}{' '}
              comments
            </p>
            <div>
              <a
                href={url}
                className='read-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                read more
              </a>
            </div>
            </article>
      </article>
    )
  })}
</section>
)
}

export default Stories