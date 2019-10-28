import React from "react";

class Compteur extends React.Component {
    constructor(props){
        super(props);
     this.state = {
         count: 0
     };
    }
     
     increment = () => {
         const count = this.state.count;
         this.setState({count: count + 1});
     }

     decrement = () => {
         const count = this.state.count;
         this.setState({count: count - 1});
     }

    render() {
         const count =  this.state.count;
         return (
        <>
             < button onClick={this.increment}>
                  +1
             </button>
             < button onClick={this.decrement}>
                  -1
             </button>
             <div>
                 {count}
             </div>
        </>
           
         );
     
        }
}



export default Compteur;