import styled, { css } from "styled-components";
import { ElementType, elementTypes } from "../../../../services/types";
import { ElementImage } from "../PokemonType/PokemonType";
import { useCaughtPokemon } from "../../../../services/queries/useFavoritePokemon";

export type FilterType = ElementType | "caught";
type FiltersProps = {
  onSelectFilter: (filter?: FilterType) => void;
  filter?: FilterType;
};

export const Filters = (props: FiltersProps) => {
  const { onSelectFilter, filter } = props;
  const cautchQuery = useCaughtPokemon();
  const handleSelectedFilter = (newFilter?: FilterType) => {
    if (newFilter === filter) {
      onSelectFilter();
      return;
    }
    onSelectFilter(newFilter);
  };
  const filterOptions = elementTypes.map((type) => (
    <StyledFilterOption
      key={`filter-${type}`}
      onClick={() => handleSelectedFilter(type)}
      $active={type === filter}
    >
      <ElementImage name={type} key={type} />
    </StyledFilterOption>
  ));
  return (
    <StyledFilters>
      {filterOptions}
      <StyledFilterOption
        onClick={() => handleSelectedFilter("caught")}
        $active={"caught" === filter}
      >
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          alt="favorite pokemon"
          height={24}
        />
      </StyledFilterOption>
      <StyledFilterOption>{cautchQuery.data?.length || 0}</StyledFilterOption>
    </StyledFilters>
  );
};

const StyledFilters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledFilterOption = styled.button<{ $active?: boolean }>`
  padding: 0.25rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  box-shadow: 0 1px 0.25rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  transition: all 0.3s ease;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${(props) =>
    props.$active &&
    css`
      box-shadow: 0 0 2px 1px #666 inset;
    `}

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    z-index: 1;
  }
`;
