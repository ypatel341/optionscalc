import React, {Component} from 'react';
import CallChain from './CallPutSection/CallChain/CallChain'
import PutChain from './CallPutSection/PutChain/PutChain'

class OptionChain extends Component {
  render(){
    return(
      <div>
        <CallChain />
        Options Chain
        <PutChain />
      </div>
    )
  }
}
export default OptionChain;
