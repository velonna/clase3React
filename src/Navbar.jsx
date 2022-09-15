import React,{Component} from 'react'
class Navbar extends Component{
    render(){
        return(
            <>
            
            <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand">Trabajo práctico Unidad N° 3 (optativo-ecommerce)</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <div className="nav-link active" aria-current="page" >Home</div>
                    </li>
                    <li className="nav-item">
                    <div className="nav-link" >Features</div>
                    </li>
                    <li className="nav-item">
                    <div className="nav-link" >Pricing</div>
                    </li>
                    <li className="nav-item">
                    <div className="nav-link disabled">Disabled</div>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            </>
        )
    }
}
export default Navbar;