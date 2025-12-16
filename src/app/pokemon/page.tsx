

const offset = 100;
const limit = 100;

export default async function PokemonPage() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,);
  const pokemon = await response.json();
  console.log('About this PokemonPage', pokemon);
  return (
    <div>

      <div>This is Pokemon Page</div>
    </div>
  )
}