const filmes90 = [
    {
        id: 1,
        nome: "10 coisas que eu odeio em você",
        genero: "clássico do meu coração",
        capa: "https://thumbs.gfycat.com/OnlyAstonishingHogget.webp"
    },
    {
        id: 2,
        nome: "One Fine Day",
        genero: "aquele romancinho",
        capa: "https://64.media.tumblr.com/6b31326e329fafdaacb60d2f66fe326a/tumblr_mwfz14PKB31stjmfuo6_250.gif"
    },
    {
        id: 3,
        nome: "Titanic",
        genero: "poxa clássico, né mô",
        capa: "https://media0.giphy.com/media/XOY5y7YXjTD7q/giphy.gif?cid=ecf05e47329qqusepsu37ejezoy4x3l3idavf124hc663pjg&rid=giphy.gif&ct=g"
    },
    {
        id: 4,
        nome: "Velocidade Máxima",
        genero: "Sandrinha e Keanu as their finest",
        capa: "https://gifman.net/wp-content/uploads/2019/07/keanu-reeves-velocidade-maxima-02.gif"
    },
    {
        id: 5,
        nome: "A Princesinha",
        genero: "aquela cena do banquete sempre me pega",
        capa: "https://emlugarnenhumdotcom.files.wordpress.com/2015/10/aprincesinha.gif"
    },
    {
        id: 6,
        nome: "Lado a Lado",
        genero: "crying rivers every single time",
        capa: "https://laamoraa.files.wordpress.com/2016/01/tumblr_m917wwtd9a1r6y67yo1_500.gif?w=700"
    },
    {
        id: 7,
        nome: "As Patricinhas de Beverly Hills",
        genero: "minha sessão da tarde está vivíssima",
        capa: "https://capricho.abril.com.br/wp-content/uploads/2019/03/cher-e-dione-patricinhas-de-beverly-hills.gif"
    },

]

//selecting items
const img = document.getElementById("imagemzita")
const nome = document.getElementById("nome")
const genero = document.getElementById("genero")

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

//setting starting item
let currentItem = 0;

//loading initial item
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem)
})

//show person based on item

function showPerson(vinagre){
    const item = filmes90[vinagre];
    img.src = item.capa;
    nome.textContent = item.nome;
    genero.textContent = item.genero
}

// show next person

nextBtn.addEventListener('click', () => {
    currentItem++
    if(currentItem > filmes90.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show prev person

prevBtn.addEventListener('click', () => {
    currentItem--
    if(currentItem < 0){
        currentItem = filmes90.length;
    }
    showPerson(currentItem);
});

//show random person

randomBtn.addEventListener('click', () => {
    getRandomMovie = () => {
        return Math.floor(Math.random() * filmes90.length)
    }

    for (let i = 0; i < filmes90.length; i++){
        currentItem = getRandomMovie()
        showPerson(currentItem);
    }
})