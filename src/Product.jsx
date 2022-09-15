
import React,{Component} from 'react'
import Item from './Item'
class Product extends Component{
    constructor(props){
        super(props);
        this.state={
            productos:[1, 2, 3, 4, 5]
        }
        
    }
    render(){
        const datos=['45','77','99','100','68','34']
        const legend=['Charmander','Charmeleon','Charizard','Squirtle','Bulbasaur','Ivysaur']
        const items=this.state.productos.map(t=>
            <Item key={t.toString()} valor={legend[t]} precio={datos[t]}/>            
            )
        return(
            <div className="container text-center">
                <div className="row">  
                        {items}     
                </div>
            </div>
        )
    }
}
export default Product;