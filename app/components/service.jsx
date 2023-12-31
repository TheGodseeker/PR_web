const React = require("react")

class Service extends React.Component {
    render(){
        return(
            <div class="service-block">
                <img src="../../img/aprt1.jpg"/>
                <div class="service-desc">
                    <h3>Мы предлагаем уникальную возможность проживать с любимыми питомцами в комфортных квартирах. Сотрудничая только с владельцами, разделяющими понимание важности проживания с животными, мы гарантируем безопасность и приятное пребывание как вам, так и вашим питомцам. Дополнительные услуги по уходу за животными доступны для максимального комфорта и заботы о вашем питомце. Выберите наш сервис, чтобы путешествовать со своими питомцами и наслаждаться проживанием вместе с ними.</h3>
                    <p>ВЫБРАТЬ КВАРТИРУ</p>
                </div>
                
            </div>
        )
    }
}

module.exports = Service;