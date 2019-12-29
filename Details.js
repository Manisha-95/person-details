import React , { Component } from 'react';
import './DetailsStyle.module.css'

class Details extends Component {
  render()
  {
    return(
<div>
<p className='det' onClick={this.props.click}>
<b>Name:</b> {this.props.name}
<br/><br/>
<b>Color:</b> {this.props.color}
<br/><br/>
<b>Height:</b> {this.props.height}
<br/><br/>
<b>Hobbies:</b> {this.props.hobbies}
 <h6>[click it for full name]</h6></p>
<button onClick={this.props.changeMani}>View Manisha Details above</button>
<br />
<br/>
 <button onClick={this.props.changePallu}>View Pallavi Details above</button><br/><br/>
 <button onClick={this.props.changeVikash}>View Vikash Details above</button>
        
</div>

    )
  }

}

export default Details;
