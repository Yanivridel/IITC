import axios from "axios";
import { useEffect, useState } from "react";
import CSSstyle from "./Pokedex.module.css";

// Import from MUI
import { Box, Modal } from "@mui/material";

//Import Components
import PokemonCard from "../pokemonCard/PokemonCard.jsx";
import PokemonBox from "../pokemonBox/PokemonBox.jsx";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState({});
  const [open, setOpen] = useState(false);

  // Import data from API
  const fetchData = async () => {
    try {
      const {
        data: { results },
      } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=500&offset=0"
      );
      setPokemons(results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggle = (e) => {
    setOpen((open) => !open);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "85vw",
    height: "60vh",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    padding: "0px",
  };

  return (
    <div className={CSSstyle.pokemonListDiv}>
      {pokemons.map((pokemon) => (
        <div onClick={toggle} key={pokemon.name}>
          <PokemonCard
            name={pokemon.name}
            url={pokemon.url}
            setClickedPokemon={setClickedPokemon}
          />
        </div>
      ))}
      <Modal
        open={open}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PokemonBox clickedPokemon={clickedPokemon} />
        </Box>
      </Modal>
    </div>
  );
};

export default Pokedex;
