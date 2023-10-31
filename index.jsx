//import TopBar from "./topbar"
//const TopBar = require("src/topbar.jsx")

const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент

class TopBar extends React.Component {
    render(){
        return(
        <div class="topbar">
            <h1 class="logo">RentHome</h1>
            <div class="topbar">
                <p class="button">Отзывы</p>
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

root.render(
    <div>
        <div class="topbar">
            <h1 class="logo">RentHome</h1>
            <div class="topbar">
                <p class="button">Отзывы</p>
                <p class="button">Квартиры</p>
                <p class="button">Бронирование</p>
                <p class="button">Услуги</p>
                <p class="button">Контакты</p>
                <p class="button">FAQ</p>
                <p class="button">О нас</p>
            </div>                
        </div>
            {/* <TopBar /> */}
            <div class="main">
                <div class="us_short">
                    <h1>RENTHOME</h1>
                    <h2>Наш сервис аренды квартир посуточно предоставляет удобную и доступную возможность арендовать квартиру на короткий срок. Мы предлагаем широкий выбор жилья в разных районах, обеспечиваем высокий стандарт качества и полное оборудование для комфортного проживания. У нас простой и безопасный онлайн процесс бронирования, поддержка клиентов в течение всего пребывания и гарантия конфиденциальности данных. Это идеальное решение для тех, кто ищет удобное и экономичное временное жилье.</h2>    
                    <p>Снять квартиру</p>
                </div>
            </div>            
    </div>
);