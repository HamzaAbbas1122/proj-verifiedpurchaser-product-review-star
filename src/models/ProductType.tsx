// src/models/ProductType.tsx

import { Product } from './Product';
import { ProductType } from './ProductType';

export interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: Product[];
  product: Product;
}

export const ProductTypeModel = {
  name: 'ProductType',
  columns: [
    { name: 'id', type: 'string', primary: true },
    { name: 'name', type: 'string', notNull: true },
    { name: 'description', type: 'string', notNull: true },
    { name: 'price', type: 'number', notNull: true },
    { name: 'rating', type: 'number', notNull: true },
    { name: 'reviews', type: 'array', notNull: true, references: 'Product', foreignKey: 'id' },
    { name: 'product', type: 'Product', notNull: true, references: 'Product', foreignKey: 'id' },
  ],
  relations: {
    product: {
      type: 'Product',
      foreignKey: 'id',
      onDelete: 'CASCADE',
    },
  },
};

export const ProductTypeService = {
  async create(data: ProductTypeCreateDTO): Promise<ProductType> {
    const productType = new ProductType();
    productType.name = data.name;
    productType.description = data.description;
    productType.price = data.price;
    productType.rating = data.rating;

    const product = await Product.findOne({ where: { id: data.productId } });
    productType.product = product;

    const productTypeId = await ProductType.create({ ...productType });

    const productReviews = await ProductType.find({ where: { id: productTypeId } });

    productType.reviews = productReviews;

    return productType;
  },
};

export const ProductTypeRepository = {
  async findAll(): Promise<ProductType[]> {
    const productTypes = await ProductType.find();
    return productTypes;
  },

  async findById(id: string): Promise<ProductType | undefined> {
    const productType = await ProductType.findOne({ where: { id: id } });
    return productType;
  },

  async create(data: ProductTypeCreateDTO): Promise<ProductType> {
    const productType = new ProductType();
    productType.name = data.name;
    productType.description = data.description;
    productType.price = data.price;
    productType.rating = data.rating;

    const productTypeId = await ProductType.create({ ...productType });

    const productReviews = await ProductType.find({ where: { id: productTypeId } });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">ProductType</h1>
    </div>
  );

};
};

export default ProductType;

