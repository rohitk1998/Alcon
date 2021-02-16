import React,{Component} from 'react';
import Header from '../Header/header';




class Product extends Component{
  constructor(){
    super();
    
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
              <h4 className="blue-txt pt-3"><a href="search"><i className="fa fa fa-angle-left" /></a> ACE OPTICAL LTD</h4>
              <div className="row pt-3 pb-5 ">
                <div className="col-sm-4  border-right">
                  <table className="table table-borderless table-sm">
                    <tbody>
                      <tr>
                        <td className="text-muted">User ID</td>
                        <td>10038869</td>
                      </tr>
                      <tr>
                        <td className="text-muted">Address</td>
                        <td>Kwun Tong, Kowloon</td>
                      </tr>
                      <tr>
                        <td className="text-muted">Phone</td>
                        <td>1345 1256 233</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col py-3">
                  <h6 className="blue-txt-dark">STAMP BALANCE</h6>
                  <div className="row no-gutters ">
                    <div className="col-1 pr-5 "><img src="images/icon.png" alt="" /></div>
                    <div className="col-2">
                      <h3 className="blue-txt-dark">1802</h3>
                    </div>
                  </div>
                </div>
                <div className="col text-right">
                  <div className="form-label-group form-signin">
                    <button type="button" id="w-change-location" className="btn btn-lg btn-dark-blue btn-block text-uppercase mt-5" data-toggle="modal" data-target="#locModal"> Reset Password </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="container" style={{marginTop: '-50px'}}> 
              {/* For demo purpose */}
              <div className="row">
                <table className="table bg-white tablefixed table-responsive-xl">
                  <thead className="bg-light">
                    <tr>
                      <th className="border-top-0">Product <img src="images/arrow.png" alt="" /></th>
                      <th className="border-top-0"># Packs <img src="images/arrow.png" alt="" /></th>
                      <th className="border-top-0">Calulated Stamps <img src="images/arrow.png" alt="" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AIR OPTIC AQUA 6pcs</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td><img src="images/icon.png" width="20px" height="19px" alt="" /> 300</td>
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td><img src="images/icon.png" width="20px" height="19px" alt="" /> 300</td>
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td><img src="images/icon.png" width="20px" height="19px" alt="" /> 300</td>
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td />
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td />
                    </tr>
                    <tr>
                      <td>3435656</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td><img src="images/icon.png" width="20px" height="19px" alt="" /> 300</td>
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td />
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td><img src="images/icon.png" width="20px" height="19px" alt="" /> 62</td>
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td />
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td><img src="images/icon.png" width="20px" height="19px" alt="" /> 25</td>
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td />
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td />
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td />
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td />
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td>100388911</td>
                    </tr>
                    <tr>
                      <td>RAY`S VISION CO</td>
                      <td><span className="label label-default label-outlined pl-5 pr-5">50</span></td>
                      <td>100388911</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row bluebg p-2 bradius-top  ">
              <div className="container">
                <div className="row ">
                  <div className="col-sm-4 text-white">Manual Stamp Entry</div>
                  <div className="col-sm-4"> </div>
                  <div className="col-sm-2">
                    <div className="form-group "> <span className=" form-control-icon2"><img src="images/icon.png" width={16} height={16} alt="" /></span>
                      <input type="text" className="form-control form-control-sm rounded-pill" placeholder />
                    </div>
                  </div>
                  <div className="col-sm-2"> </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row bluebgdark p-2 bradius-top" style={{marginTop: '-20px'}}>
            <div className="container">
              <div className="row">
                <div className="col-sm-6" />
                <div className="col-sm-6">
                  <div className="row ">
                    <div className="col text-right text-white p-2">Total</div>
                    <div className="col text-white pr-2 ">
                      <div className="form-group "> <span className=" form-control-icon"><img src="images/icon.png" width={16} height={16} alt="" /></span>
                        <input type="text" className="form-control rounded-pill" placeholder={652} />
                      </div>
                    </div>
                    <div className="col">
                      <button id="w-change-location1" type="button" className="btn btn-lg btn-block  btn-apply text-uppercase" data-toggle="modal" data-target="#locModal1"> Apply </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="locModal" tabIndex={-1} role="dialog" aria-labelledby="locModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="card card-signin my-5">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h5 className="card-title  text-center blue-txt-dark font-weight-bold">Reset Password</h5>
                        </div>
                        {/* <div className="col-1">
                          <button type="button" className="close" aria-label="Close" id="w-change-close"> <span aria-hidden="true">×</span> </button>
                        </div> */}
                      </div>
                      <form className="form-signin">
                        <div className="form-label-group">
                          <div className="input-group mt-4">
                            <input type="password" className="form-control border-right-0" placeholder="New password" required />
                            <span className="input-group-append bg-white">
                              <button className="btn border border-left-0" type="button"><img src="images/eye-close.png" alt="" /></button>
                            </span> </div>
                          <div className="input-group mt-4">
                            <input type="password" className="form-control border-right-0" placeholder="New password again" required />
                            <span className="input-group-append bg-white">
                              <button className="btn border border-left-0" type="button"><img src="images/eye-close.png" alt="" /></button>
                            </span> </div>
                        </div>
                        <br className="py-5" />
                        <button className="btn btn-lg btn-dark-blue btn-block text-uppercase" type="submit">Reset</button>
                        <button className="btn btn-lg btn-light btn-block text-uppercase" data-dismiss="modal" type="submit">Cancel</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="locModal1" tabIndex={-1} role="dialog" aria-labelledby="locModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="card card-signin my-5 form-signin">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h5 className="card-title  text-center blue-txt-dark font-weight-bold">Confirm stamp update</h5>
                        </div>
                        {/* <div className="col-1">
                          <button type="button" className="close" aria-label="Close" id="w-change-close1"> <span aria-hidden="true">×</span> </button>
                        </div> */}
                      </div>
                      <div className="row py-5 no-gutters">
                        <div className="col text-right pr-2"><img src="images/icon.png" alt="" /></div>
                        <div className="col text-left">
                          <h3 className="blue-txt-dark">627</h3>
                        </div>
                      </div>
                      <p className="text-center blue-txt-dark">stamps will be added to balance.</p>
                      <br className="py-5" />
                      <button className="btn btn-lg btn-dark-blue btn-block text-uppercase" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#locModal2">Proceed</button>
                      <button className="btn btn-lg btn-light btn-block text-uppercase" data-dismiss="modal" type="submit">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="locModal2" tabIndex={-1} role="dialog" aria-labelledby="locModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="card card-signin my-5 form-signin">
                  <div className="card-body">
                  <h5 className="card-title text-center blue-txt-dark font-weight-bold ">Confirm stamp update</h5>
                  <div className="row py-5 no-gutters">
                    <div className="col text-right pr-2"><img src="images/remove-icon.png" alt="" /></div>
                    <div className="col text-left">
                      <h3 className="blue-txt-dark">56</h3>
                    </div>
                  </div>
                  <p className="text-center blue-txt-dark">stamps will be removed from balance.</p>
                  <br className="py-5" />
                  <button className="btn btn-lg btn-dark-blue btn-block text-uppercase" type="submit">Proceed</button>
                  <button className="btn btn-lg btn-light btn-block text-uppercase" data-dismiss="modal" type="submit">Cancel</button>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* JavaScript Libraries */} 
          {/**/}
        </div>
      );
    }

}
export default Product;