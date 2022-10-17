import React from 'react';
import './war.css';
import { Consumer } from './../Context/Context.js'; 
import Deck from './../Deck/Deck.js';
import Shuffle from './../Shuffle/Shuffle.js';

export default function War(prop){
    return(
        <Consumer>
            {
                context =>{
                    return(
                        <div>
                            <div className='board'>
                                <div className='row'>
                                    <div className='deck-place turned' id='computer-deck'>
                                        <Deck deck={context.deck}/>
                                    </div>
                                    <div className='deck-place turned' id='computer-bin'></div>
                                </div>

                                <div className='deck-place bigger' id='computer-card'></div>
                                <div className='deck-place bigger' id='player-card'></div>
                                <div className='row'>
                                    <div className='deck-place turned' id='player-bin'></div>
                                    <div className='deck-place turned' id='player-deck'>
                                        <Deck deck={context.deck1}/>
                                    </div>
                                </div>
                                <button onClick={()=>{context.actions.append()}}>draw</button>
                            </div>
                            <Shuffle />
                        </div>
                    );
                }
            }
        </Consumer>
    )
}