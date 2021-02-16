import React,{Component} from 'react';

class Login extends Component{
  constructor(){
    super();
    this.state={
      Email:"",
      Password:""
    }
    this.btnSignin= this.btnSignin.bind(this);
    this.Email= this.Email.bind(this);
    this.Password= this.Password.bind(this);
  }

  Email(event) {
    this.setState({ Email: event.target.value })
}
Password(event) {
    this.setState({ Password: event.target.value })
}

  btnSignin=()=>{
    if(this.state.Email==""|| this.state.Password=="")
    {
      
    }
    else
    {
      this.props.history.push("/search");
    }
  }


    render(){
      
        return(
            <div>

            <div className="body-bg-login" >
        <meta charSet="utf-8" />
        <title >Alcon Rewards</title>
        {/* Bootstrap CSS File */}
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        {/* Main Stylesheet File */}
        <link href="css/style.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&display=swap" rel="stylesheet" />
        <div className="container py-5 " >
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="col-sm-4 m-auto">
              <div className="text-center"><img src="images/logo.png" alt="" /></div>
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center blue-txt font-weight-bold">Admin Console</h5>
                  <form className="form-signin">
                    <div className="form-label-group">
                      <input type="email" id="inputEmail" className="form-control"  onChange={this.Email} placeholder="Email address" required autofocus />
                    </div>
                    <div className="form-label-group">
                      <input type="password" id="inputPassword" className="form-control"  onChange={this.Password} placeholder="Password" required />
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="custom-control custom-checkbox mb-3">
                          <input type="checkbox" className="custom-control-input" id="customCheck1" />
                          <label className="custom-control-label blue-txt small" htmlFor="customCheck1">Remember password</label>
                        </div>
                      </div>
                      {/* <div className="col">
                        <div className="text-right forgot small"><a href='ResetPassword'>forgot password ?</a></div>
                      </div> */}
                    </div>
                    <br className="py-5" />
                    <button className="btn btn-lg btn-dark-blue btn-block text-uppercase" type="submit" onClick={this.btnSignin}>Sign in</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* JavaScript Libraries */} 
      </div>
        );

}
}
export default Login;