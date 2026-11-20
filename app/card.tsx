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
        
        <div className="flex items-center p-4 justify-center bg-slate-700 rounded-xl font-sans">
            
            {card.image_uris?.normal && (
                <img src={card.image_uris.normal} alt={card.name} className="max-w-64 w-auto object-cover rounded-xl" />
            )}
            <div className="flex flex-col justify-between p-4 text-white">
                <div>name: {card.name}</div>
                <div>mana cost: {card.mana_cost}</div>
                <div>price: {card.prices.usd}</div>
                <div>effect: {card.oracle_text}</div>
            </div>
        </div>
    )
}