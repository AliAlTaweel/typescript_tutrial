import { Product } from "../types/app"

type ProductsProps = {
    arrProducts: Product[]
}

const Products = (props: ProductsProps) => {

  

  return (
    <div>
        {props.arrProducts.map((product) => (
            <div key={ product.id}>
                <h2>{product.name}</h2>
                <p>{product.desc}</p>
                <strong>{product.price}</strong>
            </div>
        ))}
    </div>
  )
}
export default Products