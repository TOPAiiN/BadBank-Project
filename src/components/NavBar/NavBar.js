import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';


function NavBar2(){
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-menu">
        <a className="navbar-brand" href="#" data-toggle="tooltip" data-placement="bottom" title="Go back home">BadBank </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link nav-high" href="#/CreateAccount/" data-toggle="tooltip" data-placement="bottom" title="Join our community!">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-high" href="#/deposit/" data-toggle="tooltip" data-placement="bottom" title="Start transfering money">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-high" href="#/withdraw/" data-toggle="tooltip" data-placement="bottom" title="We all need some cash!">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-high" href="#/alldata/" data-toggle="tooltip" data-placement="bottom" title="Transaction Logs">AllData</a>
            </li>          
          </ul>
        </div>
      </nav>
      </>
    );
  }

export default NavBar2;