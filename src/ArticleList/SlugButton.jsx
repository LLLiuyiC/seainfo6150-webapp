import React from 'react';
import style from './SlugButton.module.css'

const SlugButton = (props) => {

    return(
            <button onClick={() => alert(`${props.slug}`)} className={style.container}>
            {props.buttonText}
      </button>
     


    );
}


export default SlugButton;