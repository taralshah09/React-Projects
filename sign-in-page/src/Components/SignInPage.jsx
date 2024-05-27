const SignInPage = ({page,setPage}) => {
  return (
    <div className="form-container">
      <h2>Sign Up </h2>

      <form action="" id="signup-form">
        <div className="input-box">
        <i class="fa-solid fa-user"></i>
          <input type="text" className="name" placeholder="Enter your name" />
        </div>
        <div className="input-box">
        <i class="fa-solid fa-envelope"></i>
          <input type="email" className="email" placeholder="Enter your email"/>
        </div>
        <div className="input-box">
        <i class="fa-solid fa-lock"></i>
          <input type="password" className="password" placeholder="Enter your password"/>
        </div>
      </form>

      <div className="btns-box">
        <button id="signup-btn-sp" >Sign Up</button>
        <button id="login-btn-sp" onClick={()=>setPage(prev=>!prev)}>Login</button>
      </div>
    </div>
  );
};

export default SignInPage;
