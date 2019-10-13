import React from 'react';
import './QuoteCard.css';

class QuoteCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favorite: false,
        };
    }
handleClick = () => {
    this.setState ({favorite: !this.state.favorite});
};    

render(){
    return (
    <figure className="QuoteCard">
        <img src={this.props.image} alt={this.props.name} ></img>
        <figcaption>
            <blockquote>{this.props.quote}</blockquote>
            <p>
                <cite>{this.props.name}</cite>
                <span className={this.state.favorite ? 'is-favorite' : ''} onClick={this.handleClick}>&#9733;</span>
            </p>
         </figcaption>
    </figure>
    );

}
}

  
export default QuoteCard;

