import Image from 'next/image';

interface CardProps {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  rating: number;
  ratingCount: number;
}

const Card: React.FC<CardProps> = ({
  title,
  price,
  description,
  category,
  imageUrl,
  rating,
  ratingCount,
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white transition-transform transform hover:scale-105 relative">
      {/* Imagem */}
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
        layout="responsive"
        priority
      />

      {/* Conteúdo */}
      <div className="p-4 pb-16">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>

        <p className="text-sm text-gray-500 mt-2">
          <span className="font-medium">Categoria:</span> {category}
        </p>

        <p className="text-sm text-yellow-500 mt-2">
          <span className="font-medium">Avaliação:</span> {rating} ⭐ ({ratingCount} avaliações)
        </p>

        <span className="text-lg font-bold text-gray-900 block mt-4">
          {price.toFixed(2)}€
        </span>
      </div>

      {/* Botão no fundo */}
      <div className="absolute bottom-0 left-0 w-full p-4">
        <button className="w-full max-w-[80%] px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Card;

