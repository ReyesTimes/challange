export default class extends React.Component {
    render() {
        const { products } = this.props

        console.log(products)
        return (
            <ul className="products container">
                {
                    products.map((product) => (
                    <li className="product" key={product._id}>
                        <div className="product__img">
                            <img src={product.img.url} />
                        </div>
                        <div>
                            <h3 className="product__title">
                                {product.name}
                            </h3>
                            <div className="product__cost">
                                {product.cost} <span className="product__cost--small">PTS</span>
                            </div>
                        </div>
                    </li>
                )) }
                
                <style jsx>{`
                    .products {
                        display: flex;
                        flex-wrap: wrap;
                    }

                    .product {
                        background-color: white;
                        border: 1px solid #e6e2e2;
                        padding: 1rem;
                        margin-right: 3%;
                        margin-bottom: 3%;
                        box-shadow: 2px 2px 5px -1px rgba(179,48,0, 0.45);
                        width: 30%;
                    }

                    .product__img img{
                        width: 100%;
                    }

                    .product__title {
                        margin-bottom: 1rem;
                    }

                    .product__cost {
                        font-weight: bold;
                        font-size: 1.45rem;
                        color: #FF4400;
                        display: flex;
                        align-items: center;
                    }
                    
                    .product__cost--small {
                        font-size: .75rem;
                        margin-left: .25rem;
                    }
                `}</style>
            </ul>
        )
    }
}