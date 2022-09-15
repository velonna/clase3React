
import React,{Component} from 'react'
class Banner extends Component{
    render(){
        return(

            <div>           

                <div className="container-fluid bg-3 text-center">    
                    <div className="row">
                        <div className="col-sm-3">
                        <p> texto para banner..</p>
                        <a href="web/pokefanaticos/pokemon-domain/">
                            <img className="img-thumbnail" src="https://pokefanaticos.com/imagenes/pokefanaticos/pokemon_domain/pkd_version_uno.webp" alt="Pokémon Domain"/>
                        </a>
                        
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Banner;