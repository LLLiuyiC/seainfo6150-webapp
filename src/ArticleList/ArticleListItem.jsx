import React from 'react';
import SlugButton from './SlugButton.jsx'
import style from './ArticleListItem.module.css'

const ArticleListItem = (props) => {
  return (
  <div>
    <section className={style.container}>
        <h3 className={style.title}> {props.article.title}</h3>
        <p>{props.article.shortText}</p>
        <time className={style.time} dateTime={props.article.pubYear}>{props.article.pubDate}</time>
      
      <SlugButton slug={props.article.slug} buttonText={props.article.author}></SlugButton>

    </section>

  </div>
  );
}

export default ArticleListItem;