import React from 'react';
import './QuoteCard.css';
import axios from 'axios';

class QuoteCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favorite: false,
            pers: '',
        };
        this.getQuote = this.getQuote.bind(this);
    }
componentWillMount(){
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
        .then(res => {
            this.setState({pers: res.data[0]})
        })
}

getQuote(){
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
        //.then(nike => console.log(nike))
        .then(res => {
            this.setState({pers: res.data[0]})
            
}  
        )  
};

handleClick = () => {
    this.setState ({favorite: !this.state.favorite});
};    

render(){
    return (
    <figure className="QuoteCard">
        <img src={this.state.pers.image} alt={this.props.character} ></img>
        <figcaption>
            <button type='text' onClick={this.getQuote}>New Quote</button>
            {/*<blockquote>{this.props.quote}</blockquote>*/}
            <p>
                <p>{this.state.pers.quote}</p>
                <cite>{this.state.pers.character}</cite>
              
                <span className={this.state.favorite ? 'is-favorite' : ''} onClick={this.handleClick}>&#9733;</span>
            </p>
         </figcaption>
    </figure>
    );

}
}

  
export default QuoteCard;

