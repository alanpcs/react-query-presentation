export interface PokemonDetails {
  abilities: Ability2[];
  base_experience: number;
  cries: Cries;
  forms: NamedUrl[];
  game_indices: Gameindex[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: Pastability[];
  species: NamedUrl;
  sprites: Sprites;
  stats: Stat[];
  types: PokemonType[];
  weight: number;
}

export const elementTypes = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
] as const;

export type ElementType = (typeof elementTypes)[number];
export const isValidElementType = (value: string): value is ElementType => {
  return elementTypes.some((type) => type === value);
};

export interface PokemonType {
  slot: number;
  type: NamedUrl<ElementType>;
}

export interface TypePokemon {
  slot: number;
  pokemon: NamedUrl;
}

export interface TypeResult {
  pokemon: TypePokemon[];
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: NamedUrl;
}

export interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other: Other;
  versions: Versions;
}

export interface Versions {
  "generation-i": Generationi;
  "generation-ii": Generationii;
  "generation-iii": Generationiii;
  "generation-iv": Generationiv;
  "generation-v": Generationv;
  "generation-vi": Generationvi;
  "generation-vii": Generationvii;
  "generation-viii": Generationviii;
}

export interface Generationviii {
  icons: Dreamworld;
}

export interface Generationvii {
  "icons": Dreamworld;
  "ultra-sun-ultra-moon": Home;
}

export interface Generationvi {
  "omegaruby-alphasapphire": Home;
  "x-y": Home;
}

export interface Generationv {
  "black-white": Blackwhite;
}

export interface Blackwhite {
  animated: Showdown;
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface Generationiv {
  "diamond-pearl": Showdown;
  "heartgold-soulsilver": Showdown;
  "platinum": Showdown;
}

export interface Generationiii {
  "emerald": Officialartwork;
  "firered-leafgreen": Fireredleafgreen;
  "ruby-sapphire": Fireredleafgreen;
}

export interface Fireredleafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Generationii {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface Generationi {
  "red-blue": Redblue;
  "yellow": Redblue;
}

export interface Redblue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface Other {
  "dream_world": Dreamworld;
  "home": Home;
  "official-artwork": Officialartwork;
  "showdown": Showdown;
}

export interface Showdown {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface Officialartwork {
  front_default: string;
  front_shiny: string;
}

export interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface Dreamworld {
  front_default: string;
  front_female: null;
}

export interface Pastability {
  abilities: Ability3[];
  generation: NamedUrl;
}

export interface Ability3 {
  ability: null;
  is_hidden: boolean;
  slot: number;
}

export interface Move {
  move: NamedUrl;
  version_group_details: Versiongroupdetail[];
}

export interface Versiongroupdetail {
  level_learned_at: number;
  move_learn_method: NamedUrl;
  order: null | null | number;
  version_group: NamedUrl;
}

export interface Gameindex {
  game_index: number;
  version: NamedUrl;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface Ability2 {
  ability: NamedUrl;
  is_hidden: boolean;
  slot: number;
}

export interface NamedUrl<NameType = string> {
  name: NameType;
  url: string;
}
