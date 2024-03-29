import React, { useRef, useEffect, useState } from 'react';
import './App.css';

import { TweenMax } from 'gsap';

const App = () => {
  let logoItem1 = useRef(null);
  let logoItemCont = useRef(null);

  const handleReload1 = () => {
    TweenMax.to(logoItem1, 3, { css: { top: "40vh", right: "40vw", opacity: "1", transform: "scale(2) rotateZ(0)" } })
  }
  const handleClick1 = () => {
    TweenMax.to(logoItemCont, 0, { css: { position: "relative" } })
    TweenMax.to(logoItem1, 3, { css: { top: "0vh", right: "0vw", opacity: "1", transform: "scale(1)" } })
  }

  useEffect(handleReload1, []);

  function getRandomPair() {
    const randomValue = Math.random();
    let top, right;

    if (randomValue < 0.25) {
      top = 0;
      right = Math.floor(Math.random() * 101);
    } else if (randomValue < 0.5) {
      right = 0;
      top = Math.floor(Math.random() * 101);
    } else if (randomValue < 0.75) {
      top = 105;
      right = Math.floor(Math.random() * 101);
    } else {
      right = 105;
      top = Math.floor(Math.random() * 101);
    }

    return { top, right };
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }}>
      <div className='divu-container' ref={e => logoItemCont = e}>
        <img src='https://i.pinimg.com/474x/7d/b5/22/7db522c102cd030f2ee3ae115f56f966.jpg' style={{ position: "absolute", top: `${getRandomPair().top}vh`, right: `${getRandomPair().right}vw` }} className='divu1' ref={e => logoItem1 = e} />
      </div>
    </div>
  );
};

export default App;
