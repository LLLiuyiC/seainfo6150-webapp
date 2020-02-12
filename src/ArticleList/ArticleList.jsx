import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from './ArticleListItem.jsx'
import style from './ArticleList.module.css'

const ArticleList = props => {
   
  return (
   
    
    <ul className={style.container}>
      <section> 
      {props.articles.map(article => (
<li key={article.slug}><ArticleListItem article={article}/></li>
      ))}
      </section>
      <body className={style.body}>
       <li id="li1"></li>
			<li id="li2"></li>
			<li id="li3"></li>
			<li id="li4"></li>
      </body>
   
      
    
    </ul>
    
    
  
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};




export default ArticleList;
