
import React,{Component} from 'react'
class Footer extends Component{
    render(){
        const legend="Este es el footer";
        return(
            <div>
                <footer className="container-fluid text-center">
                <legend>{legend}</legend>
                <a  href="http://www.facebook.com/pages/Pok%C3%A9fanaticos/189444954406941" >
                            <img  src="https://pokefanaticos.com/pokedex/assets/images/pokedex/navbar_icono_facebook.png" alt="Síguenos en Facebook"/>
                            </a>
                </footer>
                
                
            </div>
        )
    }
}
export default Footer;