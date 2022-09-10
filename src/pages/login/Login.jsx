import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Lamasocial</h3>
                <span className="loginDesc">
                    Connect with friends... what an awesome social network.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" type="Email" className="loginInput" />
                    <input placeholder="Password" type="Password" className="loginInput" />
                    <button className="loginButton">LogIn</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a new Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
