import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {

  return (
    <div>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                <a class="navbar-brand" href="/">LeetCode</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Problems</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/signup">SignUp</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/single">SingleProb</a>
                    </li>
                    {/* <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                    </li> */}
                </ul>
                </div>
            </div>
            </nav>
    </div>
  )
}
