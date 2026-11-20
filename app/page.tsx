import Image from "next/image";
import Card from "./card";

interface ScryfallCard {
  id: string;
  name: string;
  mana_cost: string;
  cmc: number;
  type_line: string;
  oracle_text: string;
  colors: string[];
  set_name: string;
  rarity: string;
  prices: {
    usd: string | null;
    usd_foil: string | null;
  };
  image_uris?: {
    normal: string;
  };
}

async function getCard(name: string): Promise<ScryfallCard> {
  const url = new URL("https://api.scryfall.com/cards/named");
  url.searchParams.set("exact", name);

  const response = await fetch(url, {
    headers: {
      "Accept": "application/json",
      "User-Agent": "MyMTGApp/1.0",
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.details ?? "Failed to fetch card");
  }

  return response.json() as Promise<ScryfallCard>;
}

const card = await getCard("scute swarm");

console.log(card.name);
console.log(card.mana_cost);

console.log(card.prices.usd);


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Card card={card}/>
      </main>
    </div>
  );
}
