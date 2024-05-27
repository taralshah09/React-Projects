
const LoginPage = ({page,setPage}) => {
  return (
    <div className="form-container">
      <h2>Login</h2>

      <form action=""  id="login-form">
        <div className="input-box">
        <i class="fa-solid fa-envelope"></i>
          <input type="email" className="email" placeholder="Enter your email"/>
        </div>
        <div className="input-box">
        <i class="fa-solid fa-lock"></i>
          <input type="password" className="password" placeholder="Enter your password"/>
        </div>
        <p>Lost your password? <a href="#">Click here</a></p>
      </form>

      <div className="btns-box">
        <button id="login-btn-lp" type="submit">Login</button>
        <button id="signup-btn-lp" onClick={()=>setPage(prev=>!prev)}>Sign Up</button>
      </div>
    </div>
  )
}

export default LoginPage
