function chamaArte(){
    var artista1 = {
        texto01: {
            img: "https://i.postimg.cc/LXSQHsq4/criola-img1.jpg",
            sum:"Tainá Lima, mais conhecida como Criola pela sua assinatura nos grafites, é uma artista visual",
            text: "natural de Belo Horizonte, MG, formada em Design de Moda pela UFMG e desde 2012 sai pelas ruas de BH espalhando a sua arte e conquistando o seu espaço dentro do grafite nacional. Mulher e negra, ela aborda temas contemporâneos a partir de texturas e padronagens e tem como base as subjetividades da mulher preta e os grafismos de matrizes afro-brasileiras.",
        },
        texto02:{
            img: "https://i.postimg.cc/9MB8zjTd/criola-img2.jpg",
            sum:"Na sua prática artística, Criola busca representar personagens com geometrias sagradas ",
            text: "em cores vibrantes que traduzem suas vivências enquanto artista afrodiaspórica, refletindo a tríade: ancestralidade, espiritualidade e natureza.  “Não existe futuro para quem não sabe de onde veio”, afirma a artista.  “Na minha arte, a todo momento busco resgatar esse passado para, a partir daí, imaginar e criar uma nova realidade na cidade, na minha vida e no coletivo”, emenda.",
        },
        texto03:{
            img: "https://i.postimg.cc/bvkFcnwF/criola-img3.jpg",
            sum:"Uma das suas obras mais famosas é a Híbrida Astral Guardiã Brasileira,",
            text:" que tem 1.365 metros — a altura de um prédio de 14 andares. A pintura foi criada na fachada do edifício Chiquito Lopes, no Cura, em Belo Horizonte, a partir de uma pesquisa feita por ela sobre “um novo mundo possível”. “Híbrida acessa esse lugar e fala sobre honrarmos nossa ancestralidade para que possamos plasmar uma nova realidade na matéria onde não nos coloquemos mais como superiores diante dos outros animais e plantas”, diz.",
        },
    }

    var content = document.getElementById("grafite")

    for (var texto in artista1) {
        content.innerHTML +=
        '<div class="card"> <img src="' + artista1[texto].img + '" width="150"> <details> <summary>' + artista1[texto].sum + '</summary> <p>' + artista1[texto].text + '</p> </details> </div>'
    }
    // fim da primeira section //

    var artista2 = {
        texto01: {
            img: "https://i.postimg.cc/5yJfRT86/karen-img1.jpg",
            sum:"Nascida e criada em Bauru, morando a mais de 10 anos na capital paulista,",
            text: "Karen Bazzeo Dolorez espalha sua arte pelas ruas, árvores, muros e casas da capital paulista, usando o crochê como forma de expressão artística  e de protesto contra a opressão e a violência sofridas pelas mulheres, fazendo uma mediação entre texto e têxtil com palavras cheias de significados, traz questionamentos em um diálogo com o público.",
        },
        texto02: {
            img: "https://i.postimg.cc/ydcVnsgM/karen-img2.jpg",
            sum:"Mostrando uma faceta diferente de como essa técnica manual era vista antigamente,",
            text: "Dolorez cria uma relação interna onde o papel da mulher na arte contemporânea dialoga com a mulher da história, ambas utilizando o ato de tecer como forma de expressão e militância.",
        },
        texto03: {
            img: "https://i.postimg.cc/vm18gWQH/karen-img3.jpg",
            sum:"“O feminino e o feminismo sempre fizeram parte de mim",
            text: "e é muito importante poder colocar eles pra fora. Gosto de poder expressar minhas angústias com esses temas e de alguma maneira perceber que o trabalho toca outras pessoas também e até conscientiza.” diz a tecelã.",
        },

    }

    var content = document.getElementById("croche")

    for (var texto in artista2) {
        content.innerHTML +=
        '<div class="card"> <img src="' + artista2[texto].img + '" width="150"> <details> <summary>' + artista2[texto].sum + '</summary> <p>' + artista2[texto].text + '</p> </details> </div>'
    }

    // fim da segunda section //

    var artista3 = {
        texto01: {
            img: "https://i.postimg.cc/4ywb7C5c/silv-img1.jpg",
            sum:"A artista urbana porto-alegrense começou a desenvolver suas habilidades desde pequena,",
            text: "na escolinha de artes que existia nos fundos do Theatro São Pedro. Se formou em Publicidade, foi administradora e professora de escola de inglês, e fez cinco anos do curso de Arquitetura na Universidade Federal do RS, o que a aproximou do urbanismo. Especializou-se em mosaico em Milão e em Verona, na Itália, e passou a se dedicar exclusivamente à arte. ",
        },
        texto02: {
            img: "https://i.postimg.cc/tCCz0TqN/sil-img2.jpg",
            sum:"A ideia das Mona Lisas veio quando foi convidada a ministrar uma oficina de mosaico urbano.",
            text: "Viu nas releituras do quadro mais famoso de Leonardo da Vinci uma oportunidade para demonstrar a sua técnica. “— Vimos que se podia trabalhar com a diversidade, ter essa proposta de que todo mundo é igual, mas cada uma pode ser do seu jeito.” recorda Silvia.",
        },
        texto03: {
            img: "https://i.postimg.cc/tCSN9j7Q/silv-img3.jpg",
            sum:"Surgiram daí Monas brancas, negras, verdes, azuis, loiras, morenas, ruivas,",
            text: "gatas, diabas e que abordam de religião à música. Uma Mona Lisa trans de quatro metros por três (as originais têm 40x30cm) foi encaminhada ao Museu de Arte Contemporânea do RS (MACRS). E as obras não ficaram restritas a Porto Alegre. Também foram para Curitiba, Pelotas, Rio de Janeiro, São Paulo e até Paris e Buenos Aires. ",
        },

    }

    var content = document.getElementById("mosaico")

    for (var texto in artista3) {
        content.innerHTML +=
        '<div class="card"> <img src="' + artista3[texto].img + '" width="150"> <details> <summary>' + artista3[texto].sum + '</summary> <p>' + artista3[texto].text + '</p> </details> </div>'
    }
}

chamaArte();