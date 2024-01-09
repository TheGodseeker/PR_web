const React = require("react")

// import Quote from "./quote.jsx"
import Contact from "./contact.jsx"

class Contacts extends React.Component {
    render(){
        return(
            <div class="main">
                <div class="contacts-page">
                    <h1>КАК С НАМИ СВЯЗАТЬСЯ?</h1>
                    <div class="contacts">
                        <div class="contacts-block">
                            <Contact img="img/testPhone.png" txt="8800353535"/>
                            <Contact img="img/testTG.png" txt="8800353535"/>
                            <Contact img="img/testEmail.png" txt="yf@sh.st"/>
                        </div>
                        <img class="contacts-map" src="img/testMap.png"/>  
                    </div>

                </div>           
            </div>
        )
    }
}

export default Contacts