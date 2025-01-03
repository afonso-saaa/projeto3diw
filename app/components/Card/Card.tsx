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
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white transition-transform transform hover:scale-105">
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
        layout="responsive"
        priority
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>

        <p className="text-sm text-gray-500 mt-2">
          <span className="font-medium">Categoria:</span> {category}
        </p>

        <p className="text-sm text-yellow-500 mt-2">
          <span className="font-medium">Avaliação:</span> {rating} ⭐ ({ratingCount} avaliações)
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            R$ {price.toFixed(2)}
          </span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
