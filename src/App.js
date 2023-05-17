import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componet/Navbar';
import Singlebox from './componet/Singlebox';
import Addmovie from './componet/Addmovie';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <Navbar />
        </div>
        <div className="singlebox-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-movie" element={<Addmovie />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <Singlebox
        cnt="230392"
        title="Final Trade : Zee Business Live | Share Market Live Updates | Stock Market News Live | 17th May 2023 by Zee Business"
        imgsrc="https://i.ytimg.com/vi/U9q4wKfB4Ys/hq720_live.jpg?sqp=CMzNkqMG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrR07x5HCZDrAim8Uaq3KIb6PsjA"
        watch="true"
      />
      <Singlebox
        cnt="42541"
        title="Sidda Wins High Stake Battle With DKS | Can This Come To Haunt Congress? Karnataka CM Suspense"
        imgsrc="https://i.ytimg.com/vi/7CmMo1N1sBA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaC7k4Q9AdVp6CGfWYsZZ4ajQu2A"
        watch="false"
      />
      <Singlebox
        cnt="230392"
        title="Final Trade : Zee Business Live | Share Market Live Updates | Stock Market News Live | 17th May 2023 by Zee Business"
        imgsrc="https://i.ytimg.com/vi/U9q4wKfB4Ys/hq720_live.jpg?sqp=CMzNkqMG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrR07x5HCZDrAim8Uaq3KIb6PsjA"
        watch="false"
      />
      <Singlebox
        cnt="42541"
        title="Sidda Wins High Stake Battle With DKS | Can This Come To Haunt Congress? Karnataka CM Suspense"
        imgsrc="https://i.ytimg.com/vi/7CmMo1N1sBA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg=="
        watch="false"
      />
       <Singlebox
        cnt="230392"
        title="Final Trade : Zee Business Live | Share Market Live Updates | Stock Market News Live | 17th May 2023 by Zee Business"
        imgsrc="https://i.ytimg.com/vi/U9q4wKfB4Ys/hq720_live.jpg?sqp=CMzNkqMG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrR07x5HCZDrAim8Uaq3KIb6PsjA"
        watch="true"
      />
      <Singlebox
        cnt="42541"
        title="Sidda Wins High Stake Battle With DKS | Can This Come To Haunt Congress? Karnataka CM Suspense"
        imgsrc="https://i.ytimg.com/vi/7CmMo1N1sBA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaC7k4Q9AdVp6CGfWYsZZ4ajQu2A"
        watch="false"
      />
      <Singlebox
        cnt="230392"
        title="Final Trade : Zee Business Live | Share Market Live Updates | Stock Market News Live | 17th May 2023 by Zee Business"
        imgsrc="https://i.ytimg.com/vi/U9q4wKfB4Ys/hq720_live.jpg?sqp=CMzNkqMG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrR07x5HCZDrAim8Uaq3KIb6PsjA"
        watch="false"
      />
      <Singlebox
        cnt="42541"
        title="Sidda Wins High Stake Battle With DKS | Can This Come To Haunt Congress? Karnataka CM Suspense"
        imgsrc="https://i.ytimg.com/vi/7CmMo1N1sBA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg=="
        watch="false"
      />
    </div>
  );
}
