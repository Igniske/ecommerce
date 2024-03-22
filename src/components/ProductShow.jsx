import ProductFilter from "./ProductFilter";
import ProductDisplay from "./ProductDisplay";
import './ProductShow.css'

const ProductShow = () =>{

    return(
        <div className="flex-row">
            <div className="product-filter">
                <ProductFilter/>
            </div>
            <div className="product-display">
                <ProductDisplay/>
            </div>
        </div>
    )
}

export default ProductShow;