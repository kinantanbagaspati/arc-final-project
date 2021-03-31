import './App.css';
import { Parallax, Background } from "react-parallax";
import bgLeft from './assets/beidou.png';
import bgRight from './assets/ningguang.jpg';
import data from "./data.json"
import ListCakru from "./containers/instanceCakru";
import ListKru from "./containers/instanceKru";
import React, {useEffect, useState} from "react";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="body">
      <div className="background">
        <div className="background-cakru" style={{transform: `translateY(${offsetY * 0.7}px)`}}/>
        <div className="background-kru" style={{transform: `translateY(${offsetY * 0.7}px)`}}/>
      </div>
      <div className="container">
        <div className="container-cakru">
          <ListCakru data = {data.CaKru}/>
        </div>
        <div className="container-kru">
          <ListKru data = {data.Kru}/>
        </div>
      </div> 
    </div>
  );
}

export default App;
/*
<div className="container">
        <Parallax bgImage={bgLeft} strength={1000}>
          <div className="container-cakru">
            <ListCakru data = {data.CaKru} className="container-cakru"/>
          </div>
        </Parallax>
        <Parallax bgImage={bgRight} strength={1000}>
          <div className="container-kru">
            <ListKru data = {data.Kru}/>
          </div>
        </Parallax>
      </div>

<div className="container">
<div className="container-cakru">
<ListCakru data = {data.CaKru}/>
</div>
<div className="container-kru">
<ListKru data = {data.Kru}/>
</div>
</div>
*/
