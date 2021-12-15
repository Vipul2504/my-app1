import React from 'react';
function Card(props){
    return(
        <>
            <div className="cards">
          <div className="card">
            <img src={props.imgsrc} alt="my-pic" className="card__img"></img>
            <div className="card_info">
              <span className="card_category">{props.title}</span>
              <h3 className="heading">{props.sname}</h3>
              <a href={props.link} target="_blank" rel="noreferrer">
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
        </>
    )
}

export default Card;
