const ReactDOM = require("react-dom/client");
const React = require("react");

const TopBar = require("./components/topbar.jsx");
const Quote = require("./components/quote.jsx")
  
ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <div>
            <TopBar />
            <div class="main"> {/*Какого хрена стили не рспростроняются на вложенные элементы */}
                <div class="us_short">
                    <div class="us_img">
                        <img src="img/aprt1.jpg" height="50%" width="50%" class="top_img"/>
                        <img src="img/aprt2.jpg" height="30%" width="30%" class="bot_img"/>                        
                    </div>
                    <div class="us_txt">
                        <h1>RENTHOME</h1>
                        <h2>Наш сервис аренды квартир посуточно предоставляет удобную и доступную возможность арендовать квартиру на короткий срок. Мы предлагаем широкий выбор жилья в разных районах, обеспечиваем высокий стандарт качества и полное оборудование для комфортного проживания. У нас простой и безопасный онлайн процесс бронирования, поддержка клиентов в течение всего пребывания и гарантия конфиденциальности данных. Это идеальное решение для тех, кто ищет удобное и экономичное временное жилье.</h2>    
                        <p>Снять квартиру</p>
                    </div>
                </div>
                {/* <Quote /> */}
            </div>  
    </div>
);