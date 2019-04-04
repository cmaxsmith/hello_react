import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { acornEaten, acornBought} from './action_creators/action_creators'
import store from './store'
import  App  from './App'

// const initialState = {
//   number: 0
// };

// function deleteAcorn(acornCount){
//   return {
//     type: 'EAT_ACORN',
//     todo: acornCount - 1
//   };
// };
  
// function increaseAcorn(acornCount){
//   return {
//     type: 'BUY_ACORN',
//     todo:  acornCount + 1
//   }
// };

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))
  
  
// const rootReducer = (state = initialState, action)=> {
//   if (action.type ==='BUY_ACORN' || action.type === 'EAT_ACORN'){
//     return {
//       ...state,
//       number: action.todo
//     }
//   } else {
//     return state
//   }
// }

// const store = createStore(acorns, composeWithDevTools());

console.log(store.getState());
store.subscribe(() => console.log('Look ma, Redux!!'))
store.dispatch(acornBought(1))
console.log(store.getState().number);
store.dispatch(acornBought(1))
console.log(store.getState().number);
store.dispatch(acornEaten(1))
console.log(store.getState().number);




// function Button(props){
//   return (<button onClick={props.event}>
//   {props.name}
//   </button>)
// }

// function Display(props) {
//   return (
//     <div>
//       {props.children}
//     </div>
//   );
// }

// let testConnect = connect([mapStateToProps], [mapDispatchToProps],[mergeProps], [options])

// const initialState = {
//   articles : []
// };

// function rootReducer (state = initialState, action) {
//   if (action.type === ADD_ARTICLE) {
//     return Object.assign({}, state, {
//       articles: state.articles.concat(action.payload)
//     });
//   };
//   return state
// };

// const ADD_ARTICLE = "ADD_ARTICLE";

// function addArticle(payload){
//   return { type: ADD_ARTICLE, payload}
// }

// console.log(store.getState());
// store.subscribe(() => console.log('Look ma, Redux!!'))
// store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )
// store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )
// console.log(store.getState());


// // window.store = store;
// // window.addArticle = addArticle
///////// wednesday below here//////////

// let acornNumber = 0;
// class SimpleGoldenAcornApp extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       number: acornNumber
//     };
//     this.increase = this.increase.bind(this)
//     this.decrease = this.decrease.bind(this)
//     this.keyPress = this.keyPress.bind(this)
//   }
// componentDidMount(){
//   document.addEventListener("keydown", this.keyPress)
// }

//   increase() {
//     acornNumber++
//     this.setState(prevState => ({
//       number: acornNumber
//     }));
//   }

//   decrease (){
//     if (acornNumber > 0) {
//     acornNumber--}
//     this.setState(prevState => ({
//       number: acornNumber
//     }))
//   }

//   keyPress(e){
//     if (e.keyCode === 38){
//       this.increase()
//     } else if (e.keyCode === 40){
//       this.decrease()

//     }
//   }

//   render() {
//     return (
//       <div>
//         <Button name="Buy One" event={this.increase}></Button> <br/>
//         <Display>{acornNumber} </Display>
//         <Button name="Eat One" event={this.decrease}>Eat One</Button>
//       </div>
//     )
//   }
// }

// function Button(props){
//   return (<button onClick={props.event}>
//   {props.name}
//   </button>)
// }

// function Display(props) {
//   return (
//     <div>
//       {props.children}
//     </div>
//   );
// }

// Button.propTypes = {
//   name: PropTypes.string.isRequired,
//   event: PropTypes.func.isRequired
// }

// ReactDOM.render(
//   <SimpleGoldenAcornApp />,
//   document.getElementById('root')
//   )
  



