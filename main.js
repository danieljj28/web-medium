const sectionContainer = document.querySelector(".section__container");
const asideMain = document.querySelector(".aside__main");
const main = document.querySelector(".main");

/*El array con cada objeto card. */
const cardsArticle = [{
    img: "iconoNetflix.png",
    author: "Chet Haase",
    tittle: "So Long, and thanks for All the Bytes",
    fecha: "Feb17,2024 - 6 min read"
},
{
    img: "iconoNetflix.png",
    author: "Alex Suzuki",
    tittle: "I'm an old Fart and AI Makes Me Sad",
    fecha: "Feb16,2024 - 4 min read"
},
{
    img: "iconoNetflix.png",
    author: "Kevin Chisholm in Flutter",
    tittle: "What's new in Flutter 3.19",
    fecha: "Feb15,2024 - 11 min read"
},
{
    img: "iconoNetflix.png",
    author: "Netflix Technology Blog in Netflix TechBlog",
    tittle: "Introducing Safe Test: A Novel Approach to Front End Testing",
    fecha: "Feb13,2024 - 7 min read"
},
{
    img: "iconoNetflix.png",
    author: "Radmila M.in Towards Data Sciencie",
    tittle: "Creating a Better Dashboard-Myth or Reality?",
    fecha: "Feb17,2024 - 9 min read"
},
{
    img: "iconoNetflix.png",
    author: "Admiral Cloudberg",
    tittle: "The Fall of the Viscount: The crash of Capital Airlines flight 20",
    fecha: "Feb17,2024 - 30 min read"
},
];

/*El array con cada string del main__aside */
const asideData = ["Programming", "Data Science", "Technology", "Self Improvement", "Writing", "Relationships", "Machine Learning", "Producticity", "Politics"]

const cardsMain = [{
    icon : "iconoNetflix.png",
    tittle : "Riikka Livanainen",
    p1 : "The secret life of people with high self-conrol (it's easier than you think)",
    p2 : "Research suggest that people with high self-control are good at avoiding templation- ...",
    date : "Jan 9, 2024",
    timeRead : "8 min read",
    category : "Self Control"
},
{
    icon : "iconoNetflix.png",
    tittle : "Riikka Livanainen",
    p1 : "The secret life of people with high self-conrol (it's easier than you think)",
    p2 : "Research suggest that people with high self-control are good at avoiding templation- ...",
    date : "Jan 9, 2024",
    timeRead : "8 min read",
    category : "Self Control"
},
{
    icon : "iconoNetflix.png",
    tittle : "Riikka Livanainen",
    p1 : "The secret life of people with high self-conrol (it's easier than you think)",
    p2 : "Research suggest that people with high self-control are good at avoiding templation- ...",
    date : "Jan 9, 2024",
    timeRead : "8 min read",
    category : "Self Control"
},
{
    icon : "iconoNetflix.png",
    tittle : "Riikka Livanainen",
    p1 : "The secret life of people with high self-conrol (it's easier than you think)",
    p2 : "Research suggest that people with high self-control are good at avoiding templation- ...",
    date : "Jan 9, 2024",
    timeRead : "8 min read",
    category : "Self Control"
},
{
    icon : "iconoNetflix.png",
    tittle : "Riikka Livanainen",
    p1 : "The secret life of people with high self-conrol (it's easier than you think)",
    p2 : "Research suggest that people with high self-control are good at avoiding templation- ...",
    date : "Jan 9, 2024",
    timeRead : "8 min read",
    category : "Self Control"
},
{
    icon : "iconoNetflix.png",
    tittle : "Riikka Livanainen",
    p1 : "The secret life of people with high self-conrol (it's easier than you think)",
    p2 : "Research suggest that people with high self-control are good at avoiding templation- ...",
    date : "Jan 9, 2024",
    timeRead : "8 min read",
    category : "Self Control"
},
{
    icon : "iconoNetflix.png",
    tittle : "Riikka Livanainen",
    p1 : "The secret life of people with high self-conrol (it's easier than you think)",
    p2 : "Research suggest that people with high self-control are good at avoiding templation- ...",
    date : "Jan 9, 2024",
    timeRead : "8 min read",
    category : "Self Control"
}];
/*Funcion que añade cada section al article__contiainer */
const appendCard = () => {
    let htmlCode = "";
    let i = 1;
    for (const cardInformation of cardsArticle) {
        htmlCode += `<section class="article__card">
    <header class="article__card-header">
        <div class = "card__img-container">
        </div>
        <p class = "card-header__paragraph">
            ${cardInformation.author}
        </p>
    </header>
    <main class="article__card-main">
        ${cardInformation.tittle}  
    </main>
    <aside class="article__card-aside">
        <h1> 0${i}</h1>
    </aside>
    <footer class="article__card-footer">
        <p>${cardInformation.fecha}</p>
    </footer>
    </section>`
    i++;
    }

    sectionContainer.innerHTML += htmlCode;
}

const appendAsideData = () =>{
    let htmlCode = "";
    for (const data of asideData) {
        htmlCode += `<div class="aside__main-ancor"><a href="">${data}</a></div>`;
    }
    asideMain.innerHTML += htmlCode;
}
const appendMain = () =>{
    let htmlCode = "";
    for(const dataCard of cardsMain){
        htmlCode += `<article class="main__card">
        <header class="main__card-header">
            <div class="main__card-header__container-img">
            </div>
            <p class="main__card-header__paragraph">${dataCard.tittle}</p>
        </header>
        <main class="main__card-main">
            <p class="main__card-main__p1">${dataCard.p1}</p>
            <p class="main__card-main__p2">${dataCard.p2}</p>
        </main>
        <footer class="main__card-footer">
            <p>${dataCard.date}</p>
            <p>- ${dataCard.timeRead}  -</p>
            <p>${dataCard.category}</p>
            <p><i class="fa-regular fa-bookmark"></i></p>
        </footer>
        <aside class="main__card-aside">
            <img src="https://miro.medium.com/v2/resize:fill:400:268/1*H3DBMcaJgdDk4D16lggx5g.jpeg">
        </aside>
    </article>`
    }
    main.innerHTML += htmlCode;
}


appendCard();
appendAsideData();
appendMain();