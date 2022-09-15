import React,{Component} from 'react';


class Home extends Component{//todo metodo tiene que tener una funcion render
    render(){
        
        let date = new Date();
        let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
       
        return(
           
                <div>
                  
                    {output}
               
                </div>
              
            
        )
    }
}

export default Home

