import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Login() {
  return (
    <div>
       <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="bg-light p-4">
            <h1 className="text-center">Login</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Email or Phone Number</label>
                <input type="text" className="form-control" id="username" placeholder="Enter your email or phone number" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your password" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="robotCheck" />
                <label className="form-check-label" htmlFor="robotCheck">I am not a robot</label>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
