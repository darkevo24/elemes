import React from 'react';
import logo from './logo.svg';
import './App.css';
import elemes from "./elemes.png";
import image from "./Image.png";
import food from "./Food.png";
import pizza from "./pizza.png";
import kebab from "./kebab2.png";
import salmon from "./salmon.png";
import donat from "./donat.png";
import paperoni from "./paperoni.png";
import meat from "./meat.png";
import doner from "./doner.png";
import roll from "./roll.png";
import cake from "./cake.png";
import milk from "./milk.png";
import unicorn from "./unicorn.png";
import kathi from "./kathi.png";
import prev from "./prev.png";
import next from "./next.png";
import call from "./call.png";
import mail from "./mail.png";
import phone from "./phone.png";

function App() {
  function navbar(){
    document.getElementById("navbarNav").classList.toggle("collapse");
  }
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a id="elemes" class="navbar-brand" href="#"><img src = {elemes} ></img></a>
  <button onClick={navbar} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li id="one" class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li id="on" class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li id="on" class="nav-item">
        <a class="nav-link" href="#">Promotions</a>
      </li>
      <li id="on" class="nav-item">
        <a class="nav-link " href="#">Blogs</a>
      </li>
      <li id="on" class="nav-item">
        <a class="nav-link " href="#">Contact Us</a>
      </li>
      <div id="log">
      <li id="two" id="masuk" class="nav-item">
        <a class="nav-link " href="#">Masuk</a>
      </li>
      <div id="daftar">
      <li id="two" class="nav-item">
        <a id="daftar2" class="nav-link " href="#">Daftar Sekarang</a>
      </li>
      </div>
      </div>
    </ul>
  </div>
</nav>
<div id="title">
  <div id="left">
    <div id="top">
      <h1 id="good">GOOD FOOD US GOOD MOOD</h1>
      </div>
      <div id="bot1">
      <p>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
    </div>
  </div>
  <div id="right">
      <img id="image" src = {image}></img>
    </div>
</div>
<div id="mid">
  <div id="top1">
    <h1>Browser Our Category</h1>
    <h1 id="bottom-text">Receipt</h1>
  </div>
  <div id="bot">
    <div id="box1">
      <img class= "img" id="food" src={food}></img>
    </div>
    <div id="box2">
      <img class= "img" id="pizza" src = {pizza}></img>
      </div>
      <div id="box3">
      <img class= "img" id="kebab" src={kebab}></img>
      </div>
      <div id="box4">
      <img class= "img" id="salmon" src= { salmon}></img>
      </div>
      <div id="box5">
      <img class= "img" id="donat" src = {donat}></img>
      </div>
  </div>
  <div id="geser">
    <img src={prev}></img>
    <img src={next}></img>
  </div>
</div>
<div id="bottom">
  <div id="text">
    <h1>Browser Our Trending</h1>
    <h1 id="bot-text">Receipt</h1>
  </div>
  <div id="atas">
    <img id="atas1" src = {paperoni}></img>
    <img id="atas1" src = {meat}></img>
    <img id="atas1" src = {doner}></img>
    <img id="atas1" src = {roll}></img>
  </div>
  <div id="atas2">
    <img id="atas1" src = {cake}></img>
    <img id="atas1" src = {milk}></img>
    <img id="atas1" src = {unicorn}></img>
    <img id="atas1" src = {kathi}></img>
  </div>
  <div id="bottom1">
  <div id="text-bottom">
    All Receipt
  </div>
  </div>
  </div>
  <div id="final">
    <div id="el">
      <div id="left1">
        <img src = {elemes}></img>
        <p>Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, 
Kecamatan Setiabudi, Kota Jakarta Selatan, 
Daerah Khusus Ibukota Jakarta 12950</p>
<img src={call}></img>
      </div>
      <div id="left2">
        <h3>Categories</h3>
        <p>Cupcake</p>
        <p>Pizza</p>
        <p>Kebab</p>
        <p>Salmon</p>
        <p>Doughnut</p>
      </div>
      <div id="right2">
        <h3>About Us</h3>
        <p>About Us</p>
        <p>FAQ</p>
        <p>Report Problem</p>
      </div>
      <div id="right1">
        <h3>Newsletter</h3>
        <p>Get now free 50% discount for alll products on your first order</p>
        <div id="input">
          <input placeholder = "Your email address"></input>
          <div id="send">
            SEND
          </div>
        </div>
        <div id="mail">
          <img src={mail}></img>
          <h6>elemesid@gmail.com</h6>
        </div>
        <div id="mail">
          <img src={phone}></img>
          <h6>0888 1111 2222</h6>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default App;
