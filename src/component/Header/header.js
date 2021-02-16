import React,{Component} from 'react';

class Header extends Component{

    render(){
        return(
            <div>
                <div className="body-bg">
                <div className="container">
                  <nav className="navbar navbar-expand-lg "> <a className="navbar-brand" href="#"><img src="images/logo.png" width={100} height={46} alt="" /></a>
                    <button className="btn btn-sm btn-white pr-3 pl-3" type="submit">Admin Console</button>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span className="fa fa-bars text-white" /> </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"> <a className="nav-link blue-txt" href="#"><img src="images/user.png" alt="" /> <strong>Admin Name</strong> <span className="sr-only">(current)</span></a> </li>
                        <li className="nav-item"> <a className="nav-link text-white" href="login"><img src="images/logout.png" alt="" /> Logout</a> </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
        )
    }
}
export default Header;