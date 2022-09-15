
import React,{Component} from 'react'
class Item extends Component{

    render(){
        const legend="Item Pokéfanaticos";
        return(
           
             <div className="card" >
                <strong> {legend}</strong>
                
                <div className="card-body">
                <h5 className="card-title">Un producto {this.props.valor}</h5>
                <p className="card-text">Descripcion del producto.</p>
                <p className="card-text">Precio:${this.props.precio}</p>
                <p className="card-text">SKU:520</p>
                <div className="btn btn-primary">Comprar</div>
                <img _ngcontent-auu-c31="" alt="Ver datos de Bulbasaur" src="https://pokefanaticos.com/pokedex/assets/images/pokemon_iconos/1.png"></img>
                </div>
          </div>
           
           
        )
    }
}
export default Item;