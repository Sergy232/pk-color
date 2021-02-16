import './styles/styles.scss'; // Necessary for Webpack processing of Sass
import { POKEMONS } from './pages/home/components/poke-card/pokemons';

(function() {
  const container = document.getElementById('pokedex');

  if (!container) {
    // TODO show alert
    throw new Error('Stop meddling with the DevTools :)');
  }

  /** TODO this should go into a separate class (PokeCard) */
  /** TODO this code should only run if the user is in the home page */
  const pokeCard = document.createElement('div');
  const indexNode = document.createElement('strong');
  const nameNode = document.createElement('i');

  pokeCard.classList.add('pc-card');
  indexNode.classList.add('pc-card__index');
  nameNode.classList.add('pc-card__name');

  for (const p of POKEMONS) {
    const card = pokeCard.cloneNode();

    card.appendChild(createImage(p.img));

    const indexInstance = indexNode.cloneNode();
    indexInstance.textContent = `#${p.pIndex}`;
    card.appendChild(indexInstance);

    const nameInstance = nameNode.cloneNode();
    nameInstance.textContent = p.name;
    card.appendChild(nameInstance);

    container.appendChild(card);
  }

  /** Creates an Image HTMLElement with the given file url */
  function createImage(url: string): HTMLImageElement {
    const image = new Image();

    image.classList.add('loading-gradient');
    image.onload = () => image.classList.remove('loading-gradient');
    image.src = `https://veekun.com/dex/media/pokemon/dream-world/${url}.svg`;
    /**
     * TOOD where lazy loading is not supported,
     * add Intersection Observer logic instead
     */
    image.loading = 'lazy';

    return image;
  }
}());
