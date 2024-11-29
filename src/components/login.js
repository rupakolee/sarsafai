import style from './login.css'

export default function Login() {
    return (
        <div className="container">
      <div className="login-form">
        <div className="logo">
          <img src="" alt="logo" />
        </div>
        <h2>Login to Sarsafai</h2>
        <div className="login-panel">
          <div className="username">
            <label for="username">Username/Phone/Email</label>
            <input type="text" name="username" />
          </div>
          <div className="password-field">
            <label for="username">Password</label>
            <input type="text" name="password" />
          </div>
          <div className="other-actions">
            <a href="#">Forgot Password?</a>
            <button><strong>Sign in</strong></button>
          </div>
          
        </div>
        <div className="bottom">
          <span>New to Sarsafai?</span>
          <span id="register">Register your account</span>
        </div>
      </div>
    </div>
    )
}