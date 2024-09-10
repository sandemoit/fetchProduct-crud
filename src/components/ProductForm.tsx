import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormField, Button, Form, Card, TextArea, CardContent } from 'semantic-ui-react'

interface ProductFormProps {
  onSubmit: (product: { name: string; description: string; price: number }) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: 0,
      stok: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      price: Yup.number().required('Required'),
      stok: Yup.number().required('Required'),
    }),
    onSubmit: (values) => {
      onSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <Card className='product-form'>
      <CardContent>

        <Form onSubmit={formik.handleSubmit}>
          <FormField>
            <label>Product Name</label>
            <input type='text' id='name' {...formik.getFieldProps('name')} placeholder='Input Product Name' />
            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
          </FormField>
          <FormField>
            <label>Product Description</label>
            <TextArea id='description' {...formik.getFieldProps('description')} placeholder='Input Product Description' />
            {formik.touched.description && formik.errors.description ? <div>{formik.errors.description}</div> : null}
          </FormField>
          <FormField>
            <label>Product Price</label>
            <input type='number' id='price' {...formik.getFieldProps('price')} placeholder='Input Product Price' />
            {formik.touched.price && formik.errors.price ? <div>{formik.errors.price}</div> : null}
          </FormField>
          <FormField>
            <label>Product Stok</label>
            <input type='number' id='stok' {...formik.getFieldProps('stok')} placeholder='Input Product stok' />
            {formik.touched.stok && formik.errors.stok ? <div>{formik.errors.stok}</div> : null}
          </FormField>
          <Button type="submit">Submit</Button>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ProductForm;
