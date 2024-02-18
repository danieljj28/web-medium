const sectionContainer = document.querySelector(".section__container");

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


/*Funcion que añade cada section al article__contiainer */
const appendCard = () => {
    let htmlCode = "";
    let i = 1;
    for (const cardInformation of cardsArticle) {
        htmlCode += `<section class="article__card">
    <header class="article__card-header">
        <div class = "card__img-container" style="background-image: url(${cardInformation.img}); background-size: contain; background-repeat: no-repeat;">
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
        ${cardInformation.fecha}
    </footer>
    </section>`
    i++;
    }

    sectionContainer.innerHTML += htmlCode;
}

appendCard();

