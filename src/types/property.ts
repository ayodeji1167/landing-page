import { StaticImageData } from 'next/image';

export interface IProperty {
  name: string;
  description: string;
  images: { mainImage: StaticImageData; otherImages: Array<StaticImageData> };
  location: string;
  bed?: number;
  bath?: number;
  squareFeet?: number;
  pricePerSquareFeet: number;
  price: number;
  id: string;
  purpose?: 'sell' | 'rent' | 'lease';
}
