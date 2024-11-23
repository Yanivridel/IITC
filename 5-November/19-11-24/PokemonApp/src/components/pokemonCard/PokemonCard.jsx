import axios from "axios";
import { useEffect, useState } from "react";

// Import CSS
import styles from "./PokemonCard.module.css";

const Pokemon = ({ name, url, setClickedPokemon }) => {
  const [pokemon, setPokemon] = useState(null);
  const [src, setSrc] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setPokemon(data);
      setSrc(data.sprites.other.dream_world.front_default); // Set default image after fetch
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updatePokeName = () => {
    setClickedPokemon(pokemon);
  };

  // Ensure data is available before rendering
  if (!pokemon) return null;

  const defaultSrc = pokemon.sprites.other.dream_world.front_default;
  const hoverSrc = pokemon.sprites.other.showdown.front_default;

  return (
    <div
      className={`${styles.card} ${styles[pokemon.types[0].type.name]}`}
      onClick={updatePokeName}
      onMouseEnter={() => setSrc(hoverSrc)} // Set hover image
      onMouseLeave={() => setSrc(defaultSrc)} // Revert to default image
    >
      <h1 className={styles.title1}>{String(name).toUpperCase()}</h1>
      <div className={styles.cardBody}>
        <div className={styles.abilities}>
          <ul className={styles.ul}>
            {pokemon.abilities.map((ability) => (
              <li key={ability.ability.name} className={styles.li}>
                {ability.ability.name}
              </li>
            ))}
          </ul>
          <h1 className={styles.pokemonOrder}>#{pokemon.order}</h1>
        </div>
        <img src={src} alt={`${name} sprite`} className={styles.img} />
      </div>
    </div>
  );
};

export default Pokemon;
