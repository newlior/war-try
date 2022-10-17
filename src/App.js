import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GiHearts, GiDiamonds, GiSpades, GiClubs } from 'react-icons/gi'
import { Provider } from './compements/Context/Context.js'
import War from './compements/War/War.js'

function App() {
  let createFullDeck = (g) => {
    const cards = [
      {
        symbol: <GiHearts />,
        numbers: [
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          'J',
          'Q',
          'K',
          'A',
        ],
        color: 'red',
      },
      {
        symbol: <GiDiamonds />,
        numbers: [
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          'J',
          'Q',
          'K',
          'A',
        ],
        color: 'red',
      },
      {
        symbol: <GiSpades />,
        numbers: [
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          'J',
          'Q',
          'K',
          'A',
        ],
        color: 'black',
      },
      {
        symbol: <GiClubs />,
        numbers: [
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          'J',
          'Q',
          'K',
          'A',
        ],
        color: 'black',
      },
    ]
    let deckArr = [],
      randDeck = []
    cards.forEach((item) => {
      for (let i = 0; i < g; i++) {
        //item.numbers.length
        let card = {
          cardSymbol: item.symbol,
          cardNumber: item.numbers[i],
          value: i,
          color: item.color,
        }
        deckArr.push(card)
      }
    })
    while (randDeck.length < g) {
      let rand = Math.floor(Math.random() * deckArr.length)
      rand = deckArr.splice(rand, 1)
      randDeck.push(rand[0])
    }
    return randDeck
  }
  const deck = createFullDeck(10)
  const deck1 = createFullDeck(10)

  let shuffle = () => {
    let computerBinCards = document.getElementById('computer-bin')
    let playerBinCards = document.getElementById('player-bin')
    let computerDeckCards = document.querySelector('#computer-deck div')
    let playerDeckCards = document.querySelector('#player-deck div')
    let computerDeckCardsCount = computerDeckCards.childElementCount
    let playerDeckCardsCount = playerDeckCards.childElementCount
    let computerBinCardsCount = computerBinCards.childElementCount
    let playerBinCardsCount = playerBinCards.childElementCount
    for (
      let i = computerDeckCardsCount - 1;
      computerDeckCards.hasChildNodes();
      i--
    ) {
      console.log(computerDeckCards.hasChildNodes())
      computerBinCards.appendChild(computerDeckCards.children[i])
    }
    for (
      let i = playerDeckCardsCount - 1;
      playerDeckCards.hasChildNodes();
      i--
    ) {
      console.log(playerDeckCards.hasChildNodes())
      playerBinCards.appendChild(playerDeckCards.children[i])
    }

    for (
      let i = computerBinCards.childElementCount - 1;
      computerBinCards.hasChildNodes();
      i--
    ) {
      console.log(computerBinCards.hasChildNodes() + 'b')
      let rand = Math.floor(Math.random() * computerBinCards.childElementCount)
      //console.log(sec.children[rand]);
      computerDeckCards.appendChild(computerBinCards.children[rand])
    }
    for (
      let i = playerBinCards.childElementCount - 1;
      playerBinCards.hasChildNodes();
      i--
    ) {
      console.log(playerBinCards.hasChildNodes() + 'b')
      let rand = Math.floor(Math.random() * playerBinCards.childElementCount)
      //console.log(sec.children[rand]);
      playerDeckCards.appendChild(playerBinCards.children[rand])
    }
    document.getElementById('shuffle-modal').style.display = 'none'

    // console.log(firstcount);
    //console.log(seccount);
    // console.log(rand);*/
  }

  /* let anmiton = (compCard, playCard, compPlace, playPlace, compClass, playClass)=>{
    compCard.classList.add(compClass);
    playCard.classList.add(playClass);
    compCard.addEventListener('animationend', function animaEnd(){
      compCard.classList.remove(compClass);
      compPlace.appendChild(compCard);
      playCard.classList.remove(playClass);
      playPlace.appendChild(playCard);
      compCard.removeEventListener('animationend', animaEnd);
    });
  }*/
  let anmiton = (gameCard, place, cardClass) => {
    gameCard.classList.add(cardClass)
    gameCard.addEventListener('animationend', function animaEnd() {
      gameCard.classList.remove(cardClass)
      place.appendChild(gameCard)
      gameCard.removeEventListener('animationend', animaEnd)
    })
  }

  let checkDecks = () => {
    let computerBin = document.getElementById('computer-bin')
    let playerBin = document.getElementById('player-bin')
    let computerDeck = document.querySelector('#computer-deck div')
    let playerDeck = document.querySelector('#player-deck div')
    if (
      (computerBin.childElementCount === 0 &&
        computerDeck.childElementCount === 0) ||
      (playerBin.childElementCount === 0 && playerDeck.childElementCount === 0)
    ) {
      if (
        computerBin.childElementCount === 0 &&
        computerDeck.childElementCount === 0
      ) {
        console.log('player winner')
      } else if (
        playerBin.childElementCount === 0 &&
        playerDeck.childElementCount === 0
      ) {
        console.log('computer winner')
      }
    } else if (
      computerDeck.childElementCount === 0 &&
      computerBin.childElementCount > 0
    ) {
      document.getElementById('shuffle-modal').style.display = 'block'
    } else if (
      playerDeck.childElementCount === 0 &&
      playerBin.childElementCount > 0
    ) {
      document.getElementById('shuffle-modal').style.display = 'block'
    }
  }

  /* let card1 = (computerCardPlace, playerCardPlace, computerBin, playerBin)=>{
    let computerCardPlaceCounter = computerCardPlace.childElementCount;
    let playerCardPlaceCounter = playerCardPlace.childElementCount;
    let computerBinCounter = computerBin.childElementCount;
    let playerBinCounter = playerBin.childElementCount;
    let computerDeckCard = document.querySelector('#computer-deck .card');
    let playerDeckCard = document.querySelector('#player-deck .card');
    let computerCard = document.querySelector('#computer-card .card');
    let playerCard = document.querySelector('#player-card .card');
    anmiton(computerDeckCard, playerDeckCard, 
      computerCardPlace, playerCardPlace, 'tocomputercard', 'toplayercard');

  }*/

  let tie = () => {
    let computerDeck = document.querySelector('#computer-deck div')
    let playerDeck = document.querySelector('#player-deck div')
    let computerCardPlace = document.getElementById('computer-card')
    let playerCardPlace = document.getElementById('player-card')
    let computerBin = document.getElementById('computer-bin')
    let playerBin = document.getElementById('player-bin')
    let playerValue, computerValue

    for (let i = 0; i < 4; i++) {
      console.log(playerDeck.children[i])
      console.log(computerDeck.children[i])
      if (
        playerDeck.children[3] !== undefined &&
        computerDeck.children[3] !== undefined
      ) {
        setTimeout(() => {
          let computerDeckCard = document.querySelector('#computer-deck .card')
          let playerDeckCard = document.querySelector('#player-deck .card')
          playerDeckCard.classList.add('turned')
          computerDeckCard.classList.add('turned')
          anmiton(computerDeckCard, computerCardPlace, 'tocomputercard')
          anmiton(playerDeckCard, playerCardPlace, 'toplayercard')
        }, i * 3000)
        setTimeout(() => {
          playerValue = playerCardPlace.lastChild.querySelector('.values')
            .innerHTML
          computerValue = computerCardPlace.lastChild.querySelector('.values')
            .innerHTML
          console.log(playerValue + 'playerValiue')
          console.log(computerValue + 'computerValiue')
          console.log(playerCardPlace.childElementCount + 'playercount')
          console.log(computerCardPlace.childElementCount + 'computercount')
          if (playerValue === computerValue) {
            bin(computerValue, playerValue)
          } else {
            for (let z = 0; z < playerCardPlace.childElementCount; z++) {
              if (playerCardPlace.children[z].classList.contains('turned')) {
                playerCardPlace.children[z].classList.remove('turned')
                computerCardPlace.children[z].classList.remove('turned')
              }
              setTimeout(() => {
                bin(computerValue, playerValue)
              }, z * 3000)
            }
          }
        }, 12200)
      } else {
        setTimeout(() => {
          if (
            playerDeck.children[0] !== undefined &&
            computerDeck.children[0] !== undefined
          ) {
            let computerDeckCard = document.querySelector(
              '#computer-deck .card',
            )
            let playerDeckCard = document.querySelector('#player-deck .card')
            anmiton(computerDeckCard, computerCardPlace, 'tocomputercard')
            anmiton(playerDeckCard, playerCardPlace, 'toplayercard')
          } else if (
            computerBin.childElementCount > 0 &&
            playerBin.childElementCount > 0
          ) {
            shuffle()
            let computerDeckCard = document.querySelector(
              '#computer-deck .card',
            )
            let playerDeckCard = document.querySelector('#player-deck .card')
            anmiton(computerDeckCard, computerCardPlace, 'tocomputercard')
            anmiton(playerDeckCard, playerCardPlace, 'toplayercard')
          } else if (
            (computerDeck.childElementCount === 0 &&
              computerBin.childElementCount === 0) ||
            (playerDeck.childElementCount === 0 &&
              playerBin.childElementCount === 0)
          ) {
            if (
              computerDeck.childElementCount === 0 &&
              computerBin.childElementCount === 0 &&
              playerDeck.childElementCount > 0
            ) {
              let playerDeckCard = document.querySelector('#player-deck .card')
              anmiton(playerDeckCard, playerCardPlace, 'toplayercard')
            } else if (
              playerDeck.childElementCount === 0 &&
              playerBin.childElementCount === 0 &&
              computerDeck.childElementCount > 0
            ) {
              let computerDeckCard = document.querySelector(
                '#player-deck .card',
              )
              anmiton(computerDeckCard, computerCardPlace, 'tocomputercard')
            }
            playerValue = playerCardPlace.lastChild.querySelector('.values')
              .innerHTML
            computerValue = computerCardPlace.lastChild.querySelector('.values')
              .innerHTML
            console.log(playerCardPlace.lastChild)
            console.log(computerCardPlace.lastChild)
          }
          console.log('done')
        }, i * 3000)
      }
      /* setTimeout(() => {      
          let computerDeckCard = document.querySelector('#computer-deck .card');
          let playerDeckCard = document.querySelector('#player-deck .card');
          let computerCard = document.querySelectorAll('#computer-card .card');
          let playerCard = document.querySelectorAll('#player-card .card');  
          if(computerDeck.childElementCount > 0 && playerDeck.childElementCount > 0){
            anmiton(computerDeckCard, computerCardPlace, 'tocomputercard');
            anmiton(playerDeckCard, playerCardPlace, 'toplayercard');
          }else if(computerDeck.childElementCount === 0 && computerBin.childElementCount === 0
            && playerDeck.childElementCount > 0){
              anmiton(playerDeckCard, playerCardPlace, 'toplayercard');
          }else if(playerDeck.childElementCount === 0 && playerBin.childElementCount === 0
            && computerDeck.childElementCount > 0){
              anmiton(computerDeckCard, computerCardPlace, 'tocomputercard');
          }else if((computerDeck.childElementCount === 0 && computerBin.childElementCount > 0) ||
            (playerDeck.childElementCount === 0 && computerBin.childElementCount > 0)){
              shuffle();
              setTimeout(() => {      
                anmiton(computerDeckCard, computerCardPlace, 'tocomputercard');
                anmiton(playerDeckCard, playerCardPlace, 'toplayercard'); 
              }, 1000);
          }/*else if(playerDeck.childElementCount === 0 && playerBin.childElementCount === 0
            && computerDeck.childElementCount === 0 && computerBin.childElementCount === 0){
              if(computerCard[i] !== undifned)*/
    }
    /*console.log(computerCard[i + 1]);
          computerCard[i].classList.add('turned');
          playerCard[i].classList.add('turned');
        }, i * 3000);
    }
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        card1(computerCardPlace, playerCardPlace, computerBin, playerBin);
        }, i * 3000);
    }*/
  }

  let append = () => {
    let computerCardPlace = document.getElementById('computer-card')
    let playerCardPlace = document.getElementById('player-card')
    let computerCard = document.querySelector('#computer-deck .card')
    let playerCard = document.querySelector('#player-deck .card')
    //anmiton(computerCard, playerCard, computerCardPlace, playerCardPlace, 'tocomputercard', 'toplayercard');
    anmiton(computerCard, computerCardPlace, 'tocomputercard')
    anmiton(playerCard, playerCardPlace, 'toplayercard')
    let computerValue = computerCard.querySelector('.values').innerHTML
    let playerValue = playerCard.querySelector('.values').innerHTML
    setTimeout(() => {
      bin(computerValue, playerValue)
    }, 3000)
  }

  let bin = (computerValue, playerValue) => {
    let computerBin = document.getElementById('computer-bin')
    let playerBin = document.getElementById('player-bin')
    let computerCard = document.querySelector('#computer-card .card')
    let playerCard = document.querySelector('#player-card .card')
    let flag = true
    console.log(computerValue)
    console.log(playerValue + 'p')
    if (computerValue > playerValue) {
      //anmiton(computerCard, playerCard, computerBin, computerBin, 'fromcomputertocomputerbin', 'fromplayertocomputerbin');
      anmiton(computerCard, computerBin, 'fromcomputertocomputerbin')
      anmiton(playerCard, computerBin, 'fromplayertocomputerbin')
      console.log('com')
    } else if (computerValue < playerValue) {
      // anmiton(computerCard, playerCard, playerBin, playerBin, 'fromcomputertoplayerbin', 'from');
      anmiton(computerCard, playerBin, 'fromcomputertoplayerbin')
      anmiton(playerCard, playerBin, 'from')
      console.log('pla')
    } else if (computerValue === playerValue) {
      // anmiton(computerCard, playerCard, computerBin, computerBin, 'fromcomputertocomputerbin', 'fromplayertocomputerbin');
      console.log('draw')
      flag = false
      tie()
    }
    if (flag) {
      setTimeout(() => {
        checkDecks()
      }, 4000)
    }
  }

  return (
    <Provider
      value={{
        deck: deck,
        deck1: deck1,
        actions: {
          append: append,
          shuffle: shuffle,
        },
      }}
    >
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<War />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  )
}

export default App
