
import React,{Component} from 'react'
import Home from './Home';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import Product from './Product';
class Container extends Component{
    render(){
        let product="Lista de productos";
        return(
            <div className='container'>
                 {/* <header>*/}
                <Header/>                
                <Home/>
                <div >
                    <h1>{product}</h1>
                    
                    <Product/>
                </div>
                <Banner />
                {/* Footer*/}


                <Footer/>
            </div>
          
        )
    }
}
export default Container;