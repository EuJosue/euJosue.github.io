//vamos instanciar nossos elementos
const pokemonPic = document.querySelector('#pokemonPic');
const pokemonNumber = document.querySelector('#pokemonNumber');
const pokemonName = document.querySelector('#pokemonName');
const pokemonDescription = document.querySelector('#pokemonDescription');
const botoes = document.querySelectorAll('.pokeBtn');

const pokémon = { /*Descobrirá que programar é legalz*/
  bulbassauro: {
    number: 1,
    name: 'Bulbassauro',
    image: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg',
    description: `Bulbassauro ou Bulbasaur (Japonês: フシギダネ Fushigidane) é um Pokémon dos tipos Grama e Venenoso introduzido na Primeira Geração. É um dos três Pokémon iniciais da região de Kanto.`
  },
  ivyssauro: {
    number: 2,
    name: 'Ivyssauro',
    image: './Pokemons/Ivysaur.png',
    description: `Ivyssauro ou Ivysaur (Japonês: フシギソウ Fushigisō) é a evolução de Bulbassauro. O bulbo em suas costas floresce em um grande bulbo rosa.`
  },
  venussauro: {
    number: 3,
    name: 'Venussauro',
    image: './Pokemons/Venusaur.png',
    description: `Venussauro ou Venusaur (Japonês: フシギバナ Fushigibana) é a evolução de Ivyssauro. O bulbo em suas costas floresce em uma grande flor rosa com manchas brancas.`
  },
  charmander: {
    number: 4,
    name: 'Charmander',
    image: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/4.svg',
    description: `Charmander (Japonês: ヒトカゲ Hitokage) é um Pokémon do tipo Fogo introduzido na Primeira Geração. É um dos três Pokémon iniciais da região de Kanto.`
  },
  charmeleon: {
    number: 5,
    name: 'Charmeleon',
    image: './Pokemons/Charmeleon.png',
    description: `Charmeleon (Japonês: リザード Rizādo) é a evolução de Charmander. Oponentes fortes excitam este Pokémon, fazendo-o jorrar chamas branco-azuladas que incendeiam seus arredores.`
  },
  charizard: {
    number: 6,
    name: 'Charizard',
    image: './Pokemons/Charizard.png',
    description: `Charizard (Japonês: リザードン Rizādon) é a evolução de Charmeleon. Seu hálito de fogo é capaz de derreter pedregulhos, geleiras enormes e é conhecido por causar acidentalmente incêndios florestais.`
  },
  squirtle: {
    number: 7,
    name: 'Squirtle',
    image: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/7.svg',
    description: `Squirtle (Japonês: ゼニガメ Zenigame) é um Pokémon do tipo Água, categorizado como Pokémon Tartaruguinha e introduzido na Primeira Geração. É um dos três Pokémon iniciais da região de Kanto.`
  },
  wartortle: {
    number: 8,
    name: 'Wartortle',
    image: './Pokemons/Wartortle.png',
    description: `Wartortle (Japonês: カメール Kamēru) é a evolução de Squirtle. Por serem maiores que Squirtle e terem uma concha maior, Wartortle tem mais dificuldade em andar em terra e manter o equilíbrio na água.`
  },
  blastoise: {
    number: 9,
    name: 'Blastoise',
    image: './Pokemons/Blastoise.png',
    description: `Blastoise (Japonês: カメックス Kamekkusu) é a evolução de Wartortle. Os poderosos canhões nas costas deste Pokémon são capazes de produzir rajadas de água que podem perfurar aço e concreto e podem ser usadas para cargas de alta velocidade.`
  },
}

function tocar() {
  //descomente a linha abaixo para incluir a música
  musica.play();
}
tocar()
document.addEventListener("click", function () {
  tocar();
}, { once: true });

/*
digite aqui o seu código
dica: utilize os data-attributes para obter o nome do pokemon clicado
https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Howto/Use_data_attributes
Utilize as constantes definidas no início do arquivo, que são:
botoes
pokemonPic
pokemonNumber
pokemonName
pokemonDescription
*/

for (let index = 0; index < botoes.length; index += 1) {
  botoes[index].dataset.pokemon;
  botoes[index].addEventListener('click', changePokemon)
}

function changePokemon(event) {
  let pokemonChose = event.target.dataset.pokemon
  pokemonPic.src = pokémon[pokemonChose].image;
  pokemonNumber.innerHTML = pokémon[pokemonChose].number;
  pokemonName.innerHTML = pokémon[pokemonChose].name;
  pokemonDescription.innerHTML = pokémon[pokemonChose].description;
}
