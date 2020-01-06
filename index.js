import React, { Component } from 'react';
import { render } from 'react-dom';
import Details from './Details';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
       name: 'React',
       color: 'white',
       height:'5.5',
       Hobbies:'Singing,Novel reading'
      
    };
  }
  componentWillMount(){
    console.log("app.js component will mount");
  }
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate()
  {
    console.log("snapshot");
    return true;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  componentDidUpdate (){
     console.log('[App.js] componentDidUpdate');
  }
  

nameChange=()=>
{
  this.setState({name:'Full Name : Sappa Manisha Rao'});
}

showManishadetails = () =>
{
  this.setState({ 
      name: 'Manu',
      color: 'Dusky',
      height:'5.4',
      Hobbies:'Music, Charity'})
}
showPallavidetails =() =>
{
  this.setState({ 
      name: 'Pallavi',
      color: 'Dusky',
      height:'5.5',
      Hobbies:'Music, Gossping'})
}

showVikash=()=>
{
  this.setState({ 
      name: 'Vikash',
      color: 'Wheatish',
      height:'5.6',
      Hobbies:'Making food'})
}
  render() {
    return (
      <div>
        <Details 
        name={this.state.name}
        color={this.state.color}
        height={this.state.height}
        hobbies={this.state.Hobbies}
        click={()=>this.nameChange()}
        changeMani={()=> this.showManishadetails()}
        changePallu={()=> this.showPallavidetails()}
        changeVikash={() => this.showVikash()}
        />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
