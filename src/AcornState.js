import React from 'react';
import Button from './components/Button';
import Display from './components/Display';

let acornNumber = 0;
export class SimpleGoldenAcornApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: acornNumber
    };
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.keyPress = this.keyPress.bind(this)
  }
componentDidMount(){
  document.addEventListener("keydown", this.keyPress)
}

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
        <Button name="Buy One" onClick={this.increase}/><br/>
        <Display>
          {acornNumber} [state]
        </Display>
        <Button name="Eat One" onClick={this.decrease}/>
      </div>
    )
  }
}