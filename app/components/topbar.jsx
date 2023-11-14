const React = require("react");
//const ReactDOM = require("react-dom/client");
//import {Link} from "react-router-dom";


class TopBar extends React.Component {
    render(){
        return(
        <div class="topbar">
            <h1 class="logo">RentHome</h1>
            <div class="topbar">
                <p class="button">Отзывы</p>
                {/* <Link to="/reviews">Отзывы</Link>  */}
                <p class="button">Квартиры</p>
                <p class="button">Бронирование</p>
                <p class="button">Услуги</p>
                <p class="button">Контакты</p>
                <p class="button">FAQ</p>
                <p class="button">О нас</p>
            </div>                
        </div>
        )
    }
}

module.exports = TopBar;
