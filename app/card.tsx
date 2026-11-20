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

interface CardProps {
    card: ScryfallCard;
}

export default function Card({card}: CardProps) {
    return(
        
        <div>
            <div>name: {card.name}</div>
            <div>mana cost: {card.mana_cost}</div>
            <div>price: {card.prices.usd}</div>
            <div>effect: {card.oracle_text}</div>
            {card.image_uris?.normal && (
                <img src={card.image_uris.normal} alt={card.name} />
            )}
        </div>
    )
}