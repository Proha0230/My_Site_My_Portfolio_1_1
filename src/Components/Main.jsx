import {MySitesCardList} from './MySitesCardList';
import {useState} from 'react'

function Main (props) {

    const [mySites, setMySites] = useState ([
        {id:1,
         name: "React Films",
         img: "https://i.ibb.co/d5mqTYt/React-Films.jpg",
         description: "Мой первый сайт написанный на React - 'React Films'. Для его работы используется 'OMDb API' т.к. база фильмов на Английском языке - в поиске нужно вводить фильмы на Английском языке. Примеры: Matrix, Avengers, Iron Man и т.д. ",
         ghlink: "https://github.com/Proha0230/Project-React-Films-GH-Pages",
         link: "https://proha0230.github.io/Project-React-Films-GH-Pages/"
        },
        {id:2,
        name: "React Shop Fortnite",
        img: "https://i.ibb.co/fGq7qS6/React-Shop-Fortnite.jpg",
        description: "Мой второй сайт написанный на React - 'React Shop Fortnite'. Для его работы используется 'Fortnite API' здесь база товаров на Русском языке. Товары можно добавить в корзину, изменять их кол-во, а так же вовсе удалить из корзины.",
        ghlink: "https://github.com/Proha0230/Project-React-Shop-Fortnite-GH-Pages",
        link: "https://proha0230.github.io/Project-React-Shop-Fortnite-GH-Pages/"
        },
        {id:3,
        name: "ЙОГА-ТУРЫ В ИНДИЮ",
        img: "https://i.ibb.co/1T1DyVV/Site-Yoga-JS.jpg",
        description: "Мой первый полноценный сайт написанный на HTML/CSS и JavaScript. В нем есть: 'Табы', Слайдер, Таймер, Калькулятор расчета стоймости путевки, Модальное окно в которое можно ввести свой номер и он отправится на сервер PHP и т.п.",
        ghlink: "https://github.com/Proha0230/Site-yoga-Final-Webpack-GH-Pages",
        link: "https://proha0230.github.io/Site-yoga-Final-Webpack-GH-Pages/"
        },
        {id:4,
            name: "Расчет дневного бюджета",
            img: "https://i.ibb.co/n1PsNxN/image.jpg",
            description: "Мое первое приложение 'Расчет дневного бюджета' написанное на HTML/CSS и JavaScript. В нем вы можете нажав кнопку 'Начать Расчет' ввести дату - которая покажется в полях ниже, ввести свою ЗП и заполнив все поля - получить рассчет дневного бюджета.",
            ghlink: "https://github.com/Proha0230/Site-Pac4et-Bydgeta-JS-HTML-CSS-GH-Pages",
            link: "https://proha0230.github.io/Site-Pac4et-Bydgeta-JS-HTML-CSS-GH-Pages/"
        },
        {id:5,
            name: "React SPA Food",
            img: "https://i.ibb.co/mzsT0f4/React-SPA-FOOD.jpg",
            description: "Мой первый проект SPA (Single Page Aplication) на React. Это проект с рецептами блюд. База API-TheMealDB на Англ.яз. В проекте используется Роутинг. Есть переход с категорий блюд к самим блюдам из выбранной категории, а так же к самому выбранному рецепту блюда. Поиск работает по категориям блюд.",
            ghlink: "https://github.com/Proha0230/React_SPA_Food_Final_GH_Pages",
            link: "https://proha0230.github.io/React_SPA_Food_Final_GH_Pages/"
        }
        
    ]);

    const addSites = (mySite) => {
        setMySites ([mySite, ...mySites])
    }

    return (
        <main className="container">
    <MySitesCardList mySites={mySites} addSites={addSites}/>    
    </main>   
)
}

export {Main};