import { PureComponent } from "react";
class PurecomponentCounter extends PureComponent{
 constructor(){
    super()
        this.state={
            count: 0,
            toggel : false
        }
    
 }

 Toggelclick = ()=>{
    this.setState({...this.state, toggel: !(this.state.toggel)})
    // console.log(this.state.toggel)
 }
 Handleclick=()=>{
    if(this.state.toggel==true){
    this.setState({...this.state, count : this.state.count+1})}
}
 render(){
   console.log("This is Pure Component")
    return(
  <div>
  <h1>Pure Component</h1>
  <div>{this.state.count}</div>
  <button onClick={this.Handleclick}>Counter</button>
  <button onClick={this.Toggelclick}>setToggel</button>
  </div>
    )
 }
}
export default PurecomponentCounter