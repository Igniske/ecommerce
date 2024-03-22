import './ProductFilter.css'

const ProductFilter = ()=>{

    return(
        <>
            <div className='margin-left'>
                <h2>Talles:</h2>
                <div className="flex-col margin-left checkbox-list">
                    <label>
                        <input type="checkbox"/>
                        <span>XL</span>
                    </label>
                    <label>
                        <input type="checkbox"/>
                        <span>L</span>
                    </label>
                    <label>
                        <input type="checkbox"/>
                        <span>M</span>
                    </label>
                    <label>
                        <input type="checkbox"/>
                        <span>S</span>
                    </label>
                    <label>
                        <input type="checkbox"/>
                        <span>SM</span>
                    </label>
                </div>
                <h2>Marca:</h2>
                <div className="flex-col margin-left checkbox-list">
                    <label>
                        <input type="checkbox"/>
                        <span>Adidas</span>
                    </label>
                    <label>
                        <input type="checkbox"/>
                        <span>Puma</span>
                    </label>
                    <label>
                        <input type="checkbox"/>
                        <span>Nike</span>
                    </label>
                    <label>
                        <input type="checkbox"/>
                        <span>UnderArmor</span>
                    </label>
                </div>
                <h2>Producto:</h2>
                <div className="flex-col margin-left checkbox-list">
                    <label>
                        <input type="checkbox"/>
                        <span>Remera</span>
                    </label>
                    <label>
                        <input type="checkbox"/>
                        <span>Pantalon</span>
                    </label>
                    <label>
                        <input type="checkbox"/>
                        <span>Zapatillas</span>
                    </label>
                    <label>
                        <input type="checkbox"/>
                        <span>Camperas</span>
                    </label>
                </div>
            </div>
        </>
    )
}

export default ProductFilter;