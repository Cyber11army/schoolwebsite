import React from 'react';
import {Link} from 'react-router-dom';
import Slider1 from '../images/logo.png';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" id="Navbar">
        <div class="container-fluid">
        <img src={Slider1} class="me-2 " height="60" alt="Cherry Blossom Kinder Garten" loading="lazy" />
          <Link to="/" class="navbar-brand pt-3" id="school-responsive">
            Cherry Blossom Kinder Garten</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 pt-3">
              <li class="nav-item">
                <Link to="/" class="nav-link active text-white">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link active text-white">About Us</Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link active text-white">Contact Us</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu ">
                  <li><a class="dropdown-item" href="/">Action</a></li>
                  <li><a class="dropdown-item" href="/">Another action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
             
            </ul>
            <form class="d-flex pt-3 nav-item dropdown" role="search" >
              <input class="form-control me-2  dropdown-toggle" href="/" role="button" id="myInput" data-bs-toggle="dropdown"
               onKeyUp={myFunction} aria-expanded="false" type="search" placeholder="Search" aria-label="Search"/> 
              <ul class="dropdown-menu p-1" id="myUL">
                   <h5><strong>Results</strong></h5>
                   <hr/>
                   <li><a class=" nav-link active " href="/" >Home</a></li>
                   <li><a class=" nav-link active " href="/about" >About Us</a></li>

                  <li><a class=" nav-link active" href="/contact">Contact Us</a></li>
                  </ul>
              {/* <button class="btn btn-outline-success" onKeyUp={myFunction} type="submit">Search</button> */}
              
            </form>
            
          </div>
        </div>
      </nav>
    );
   
}


function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}



export default Navbar;