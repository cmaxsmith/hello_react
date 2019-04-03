import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

let acornNumber = 0;
class SimpleGoldenAcornApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0
    };
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.keyPress = this.keyPress.bind(this)
  }
componentDidMount(){
  document.addEventListener("keydown", this.keyPress)
}

// componentWillMount(){
//   document.removeEventListener("keydown", this.keyPress)
// }

  increase() {
    acornNumber++
    this.setState(prevState => ({
      number: acornNumber
    }));
  }

  decrease (){
    if (acornNumber > 0) {
    acornNumber--}
    this.setState(prevState => ({
      number: acornNumber
    }))
  }

  keyPress(e){
    if (e.keyCode === 38){
      this.increase()
    } else if (e.keyCode === 40){
      this.decrease()

    }
  }

  render() {
    return (
      <div>
        <Button name="Buy One" event={this.increase}></Button> <br/>
        <Display>{acornNumber} </Display>
        <Button name="Eat One" event={this.decrease}>Eat One</Button>
      </div>
    )
  }
}

function Button(props){
  return (<button onClick={props.event}>
  {props.name}
  </button>)
}

function Display(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

ReactDOM.render(
  <SimpleGoldenAcornApp />,
  document.getElementById('root')
)




