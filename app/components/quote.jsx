const React = require("react");

class Quote extends React.Component {
    render(){
        return(
        <div class="">
              <img src={this.props.img}/>
              <p>{this.props.txt}</p>
              <p>{this.props.name}</p> 
        </div>
        )
    }
}

Quote.defaultProps= {name: "", txt: "test", img: "img/testPerson.jpg", pos: "right"}
module.exports = Quote;