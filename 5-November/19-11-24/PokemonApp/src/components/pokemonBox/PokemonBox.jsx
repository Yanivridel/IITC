import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";

// Import CSS
import styles from "./PokemonBox.module.css";

const PokemonBox = ({ clickedPokemon }) => {
  return (
    <div className={styles.PokemonBox}>
      <div
        className={`${styles.header} ${
          styles[clickedPokemon.types[0].type.name]
        }`}
      >
        <h1 className={styles.title1}>
          {String(clickedPokemon.name).toUpperCase()}
        </h1>
        <h1 className={styles.pokemonOrder}>#{clickedPokemon.order}</h1>
        <img
          src={clickedPokemon.sprites.other.dream_world.front_default}
          alt={`${clickedPokemon.name} sprite`}
          className={styles.img}
        />
      </div>
      <div className="boxDetails">details {clickedPokemon.order}</div>
    </div>
  );
};

export default PokemonBox;
