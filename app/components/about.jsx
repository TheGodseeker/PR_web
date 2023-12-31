const React = require("react")

import Member from "./member.jsx"

class About extends React.Component {
    render(){
        return(
            <div class="main">
                <div class="about-textblock">
                    <h1>RENTHOME</h1>
                    <p>Наш сервис аренды квартир посуточно предоставляет удобную и доступную возможность арендовать квартиру на короткий срок. Мы предлагаем широкий выбор жилья в разных районах, обеспечиваем высокий стандарт качества и полное оборудование для комфортного проживания. У нас простой и безопасный онлайн процесс бронирования, поддержка клиентов в течение всего пребывания и гарантия конфиденциальности данных. Это идеальное решение для тех, кто ищет удобное и экономичное временное жилье.</p>    
                </div>
                <div class="boss-block">
                    <img src="../img/bossTest.jpg"/>
                    <div>
                        <p>Наша компания по аренде недвижимости посуточно начала свою историю с мечты об идеальном временном доме для каждого путешественника. Мы постоянно растем, создавая сильную сеть партнеров и заботимся о полном спектре услуг - от удобного поиска и бронирования до круглосуточной поддержки. Мы стремимся сделать процесс аренды недвижимости посуточно легким и удобным для наших клиентов, независимо от того, где они находятся.</p>
                        
                        <p><b>Генеральный директор RENTHOME Васильева Анна Игоревна</b></p>
                    </div>    
                </div>
                <h1 class="mem-header">НАША КОМАНДА</h1>
                <div class="mem-table">
                        <Member/>
                        <Member/>
                        <Member/>
                        <Member/>
                        <Member/>
                        <Member/>
                        <Member/>
                        <Member/>
                        <Member/>
                </div>              
            </div>
        )
    }
}

export default About