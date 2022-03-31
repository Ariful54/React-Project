import React from 'react'
import style3 from '../CSS/style3.css';
import Aboutus from '../CSS/Aboutus.jpg';

export const Todos = () => {
  return (
    <div className='container'>
         <section class="TopNav">
        <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
            <div class="container">  
                <div class="logo"><a href="#">Portfo<span>lio.</span></a></div>
               
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span> 
                </button>
                <div class="collapse navbar-collapse justify-content-end " id="main-nav">
                    <ul id="menu" class="menu navbar-nav fs-3 ">
                        <li><a class="nav-link" href="#">Home</a> </li>
                        <li><a class="nav-link" href="#about">About</a></li>
                        <li><a class="nav-link" href="#service">Services</a></li>
                        <li><a class="nav-link" href="#Teams">Teams</a></li>
                        <li><a class="nav-link" href="#content">Contact</a></li>       
                    </ul>
                </div>
            </div>
        </nav>
    </section> 
    <section  class="home" id="home">
        <div class="container pt-5">
            <div class="home-content ">
                <div class="text-1 pt-5 ">Hello, my name is</div>
                <div class="text-2">Md. Ariful Islam</div>
                <div class="text-3">And I'm a <span> Developer</span></div>
                <a>Hire me</a>
            </div> 
        </div>
    </section>
    <section id="about" class="about bg-dark">
        <div class="container">
            <div class="row ">
                <h2 class="d-flex justify-content-center mt-5">About &nbsp; <span> me</span></h2>
                <div class="col-lg-5 col-md-5 col-sm-12  ">
                    <div class="left">
                        <img class="img-fluid mt-3" src={Aboutus} alt="AboutUs" />
                    </div>
                </div>
                <div class="col-lg-7 col-md-7  col-sm-12 d-flex align-items-center mt-3 "> 
                    <div class="right">
                        <div class="text">I'm Ariful and I'm a <span>Designer.</span></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                        <a href="#">Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

   
    </div>
  )
}
