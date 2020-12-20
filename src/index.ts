import './styles/styles.scss'; // Necessary for Webpack processing of Sass
import { POKEMONS } from './pages/home/components/poke-card/pokemons';


(function() {
  const container = document.getElementById('pokedex');

  if (!container) {
    // TODO show alert
    throw new Error('Stop meddling with the DevTools :)');
  }

  /** TODO this should go into a separate class (PokeCard) */
  const pokeCard = document.createElement('div');
  const indexNode = document.createElement('strong');
  const nameNode = document.createElement('i');

  pokeCard.classList.add('pc-card');
  indexNode.classList.add('pc-card__index');
  nameNode.classList.add('pc-card__name');

  for (const p of POKEMONS) {
    const card = pokeCard.cloneNode();

    const image = new Image();
    image.src = `https://veekun.com/dex/media/pokemon/dream-world/${p.img}.svg`;
    card.appendChild(image);

    const indexInstance = indexNode.cloneNode();
    indexInstance.textContent = `#${p.pIndex}`;
    card.appendChild(indexInstance);

    const nameInstance = nameNode.cloneNode();
    nameInstance.textContent = p.name;
    card.appendChild(nameInstance);

    container.appendChild(card);
  }
}());
