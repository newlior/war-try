import React from 'react';
import './shuffle.css';
import { Consumer } from './../Context/Context.js'; 
import shuffleImg from './../img/shuffle.gif';


export default function Shuffle(){
    return(
        <Consumer>
            {
                context =>{
                    return(
                        <div id='shuffle-modal'>
                            <h1>shuffling decks</h1>
                            <img src={shuffleImg} alt='shuffle' />
                            <div id='opti'>
                                <p>the decks are ready!</p>
                                <button onClick={()=>{context.actions.shuffle()}} 
                                className='btn'>contiue</button>
                            </div>
                        </div>
                    );
                }
            }
        </Consumer>
    )
}