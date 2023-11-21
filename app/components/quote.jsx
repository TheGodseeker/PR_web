const React = require("react");

class Quote extends React.Component {
    render(){
        switch(this.props.pos){
            case "right":
                return(
                    <div class="quote">
                          <div>
                            <p>{this.props.txt}</p>
                            <p>{this.props.name}</p>
                          </div>
                          <img src={this.props.img} class="q_img_right"/> 
                    </div>
                    )
            case "left":
                return(
                    <div class="quote">
                          <img src={this.props.img} class="q_img_left"/>
                          <div>
                            <p>{this.props.txt}</p>
                            <p>{this.props.name}</p>
                          </div>
                    </div>
                    )
            case "up":
                return(
                    <div class="quote_mb">
                          <img src={this.props.img}/>
                            <p>{this.props.txt}</p>
                            <p>{this.props.name}</p>
                    </div>
                )
        }
    }

}

Quote.defaultProps= {name: "", txt: "test", img: "img/testPerson.png", pos: "right"}
module.exports = Quote;