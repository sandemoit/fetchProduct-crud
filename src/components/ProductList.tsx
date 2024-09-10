import React from 'react';
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Button,
  Card,
  CardContent
} from 'semantic-ui-react'

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stok: number;
}

interface ProductListProps {
  products: Product[];
  onUpdate: (id: number, product: Partial<Product>) => void;
  onDelete: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onUpdate, onDelete }) => {
  return (
    <Table celled>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>No</TableHeaderCell>
          <TableHeaderCell>Name Product</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Stok</TableHeaderCell>
          <TableHeaderCell>Price</TableHeaderCell>
          <TableHeaderCell>Action</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.length > 0 ? (
          products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{products.indexOf(product) + 1}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.stok}</TableCell>
              <TableCell>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}</TableCell>
              <TableCell>
                <Button type='button' primary onClick={() => onUpdate(product.id, product)}>Edit</Button>
                <Button type='button' secondary onClick={() => onDelete(product.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} textAlign='center'>Tidak ada data</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ProductList;
