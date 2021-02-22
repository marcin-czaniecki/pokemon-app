import { IToggle } from "interfaces/interfaces";

export const getSourceImgPokemonFromId = (url: string | undefined) => {
  const idPokemon = url ? url.match(/\d+/g) : "";
  let urlImg = "";
  if (idPokemon) {
    urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon[1]}.png`;
  }
  return urlImg;
};

export const iconHandler = ({
  active,
  activeIcon,
  deactivateIcon,
  close
}: IToggle) => (active ? activeIcon : deactivateIcon);
