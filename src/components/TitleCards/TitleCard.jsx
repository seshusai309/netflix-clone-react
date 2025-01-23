import React, { useEffect, useRef } from 'react'
import cards_data from '../../assets/cards/Cards_data'
import './titleCards.css'

const TitleCard = ({title, category}) => {

  const cardsRef = useRef();

  const handelWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=> {
    cardsRef.current.addEventListener('wheel', handelWheel);
  }, [])


  return (
    <div className='titleCards'>
       <h2>{title?title:"popular on netflix"}</h2>
       <div className="cards-list" ref={cardsRef}>
         {cards_data.map((card, index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
         })}
       </div>
    </div>
  )
}

export default TitleCard
