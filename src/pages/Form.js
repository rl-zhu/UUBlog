function Form(showLog) {
    return (
        <div>

            {/* Form */}
            <div className={`${showLog} welbox`}>

                <div className="login-box">
                    <h4>Login</h4>
                    <p>Name</p>
                    <input placeholder="name"></input>
                    <p>Password</p>
                    <input placeholder="password"></input>
                    <button>Login</button>
                </div>
                <div className="login-box">
                    <h4>Register</h4>
                    <p>Name</p>
                    <input placeholder="name"></input>
                    <p>Password</p>
                    <input placeholder="password"></input>
                    <p>Email</p>
                    <input placeholder="Email"></input>
                    <button>Login</button>
                    <a> Register</a>
                </div>
            </div>
            {/* Backgroud-info */}
            <div className={`${showLog} bgbox`}>
                {/* Login-show register */}
                <div>
                    <p>nihao</p>
                    Already have an account?

                </div>
                <div>

                </div>
            </div>
        </div>

    )
}

export default Form