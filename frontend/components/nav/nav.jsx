import React from 'react';

class Nav extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestQuote();
  }

  renderQuote(){
    if(this.props.quote[0]){
      return(
        <span className='quote'>
        <span dangerouslySetInnerHTML={{__html:`${this.props.quote[0].content} - ${this.props.quote[0].title}`}}></span>
        </span>
      )
    }else{
      return null;
    }
  }

  render(){
    return(
      <h1 className='header'><span onClick={this.props.requestQuote} className='logo'>Todo</span>
      {this.renderQuote()}
      </h1>
    )
  }
}

export default Nav
