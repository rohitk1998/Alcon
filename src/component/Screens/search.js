import React,{Component} from 'react';
import Header from '../Header/header';

class Search extends Component{
  constructor(){
    super();
    this.handleClick=this.handleClick.bind(this);
    this.searchtxt=this.searchtxt.bind(this);
  }

  searchtxt=(e)=>{
    var txt = this.refs.searchtxt.value;
    
  }

  handleClick=()=>{
    this.props.history.push("/product");
  }
    render(){
        return (
            <div className="bg-light-pat">
              <meta charSet="utf-8" />
              <title>Alcon Rewards</title>
              {/* Bootstrap CSS File */}
              <link href="css/bootstrap.min.css" rel="stylesheet" />
              {/* Main Stylesheet File */}
              <link href="css/style.css" rel="stylesheet" />
              <link href="css/font-awesome.min.css" rel="stylesheet" />
              <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&display=swap" rel="stylesheet" />
              <Header/>
              <div className="bg-white shadow bradius-bottom">
                <div className="container">
                  <div className="row pt-2 pb-5">
                    <div className="main">
                      <div className>
                        <div className="form-group has-search"> <span className="form-control-feedback blue-txt-dark"><img src="images/serch-icon.png" width={17} height={17} alt="" /></span>
                          <input type="text" ref="searchtxt" onChange={this.searchtxt.bind(this)} className="form-control" placeholder="Search by Name, Address, Phone Number or User ID" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container" style={{marginTop: '-50px'}}> 
                {/* For demo purpose */}
                <table className="table bg-white tablefixed ">
                  <thead>
                    <tr >
                      <td className="border-top-0"><strong>ECP Name</strong> <img src="images/arrow.png" alt="" /></td>
                      <td className="border-top-0"><strong>Address</strong> <img src="images/arrow.png" alt="" /></td>
                      <td className="border-top-0"><strong>Phone Number</strong> <img src="images/arrow.png" alt="" /></td>
                      <td className="border-top-0"><strong>User ID</strong> <img src="images/arrow.png" alt="" /></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr onClick={this.handleClick}>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">3435656</td>
                      <td>BBBBB</td>
                      <td>2773 6423</td>
                      <td>323232</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">RAY`S VISION CO</td>
                      <td>Hung Hom, Kowloon</td>
                      <td>2773 6423</td>
                      <td>100388911</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* JavaScript Libraries */} 
              {/**/}
            </div>
          );
      
    }

}
export default Search;