import React from 'react';
import './deck.css';
import { Consumer } from './../Context/Context.js'; 

export default function Deck(prop){
    return(
        <Consumer>
            {
                context =>{
                    return(
                        <div>
                            {prop.deck.map(item =>{
                                return(
                                    <div className='card'>
                                        <div className='fliper'>    
                                            <div className="outline shadow rounded" style={{color: item.color}}>
                                                <div className="top">
                                                    <span>{item.cardSymbol}</span>
                                                    <span className='num'>{item.cardNumber}</span>
                                                </div>
                                                <h1>{item.cardSymbol}</h1>
                                                <div className="bottom">
                                                    <span className='num'>{item.cardNumber}</span>
                                                    <span>{item.cardSymbol}</span>
                                                </div>
                                            </div>
                                            <p className='values'>{item.value}</p>
                                            <div className='backface shadow'></div>
                                        </div>
                                    </div>
                                )}
                            )}
                        </div>
                    );
                }
            }
        </Consumer>
    )
}