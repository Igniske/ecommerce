import './Product.css';
import Image from '../assets/react.svg'

const Product = () =>{

    return(
        <>
            <div className="product-box">
                <div className='eighty-percent image-box container'>
                    <img src={Image} className='product-image' />
                </div>
                <div className="product-description">
                    <p>
                        Descripcion generica de este producto
                    </p>
                </div>
                <div className="product-buttons container">
                    <div className="container">
                        <button className='quantity-button'>+</button>
                        <select className='quantity-box'>
                            <option>0</option>
                            <option>1</option>
                        </select>
                        <button className='quantity-button'>-</button>
                    </div>
                    <div className="container">
                        <button className="add-button">Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;