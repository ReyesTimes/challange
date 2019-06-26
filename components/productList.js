import reqService from '../services/index'
import { connect } from 'react-redux'
import { subtractMyPoints } from '../store.js'

class ProductList extends React.Component {
    constructor(props) {
        super(props)

        let { products } = props
        
        this.products = products
    }

    redeemCode(productId, points) {
        this.changeProductLoader(productId, true)

        reqService({ path: 'redeem', method: 'POST', data: { productId } })
        .then(() => {
            this.changeProductLoader(productId, false)
            this.props.subtractMyPoints({ points })
        })
        .catch((error) => {
            let { status: statusCode } = error.response
            
            if (statusCode === 400) {
                this.changeProductLoader(productId, false)
            }
        })
    }

    changeProductLoader(productId, loaderValue) {
        let products = this.products.map((product) => {
            if (product._id === productId) {
                product.loader = loaderValue
            }

            return product
        })

        this.setState({ products });
    }

    render() {
        let { user } = this.props

        return (
            <ul className="products container">
                {
                    this.products.map((product, index) => (
                    <li className="product" key={product._id}>
                        <div className="product__img">
                            <img src={product.img.url} />
                        </div>
                        <div>
                            <h3 className="product__title">
                                {product.name}
                            </h3>
                            <div className="product__footer">
                                <div className={(product.cost <= user.points) ? 'product__cost orange' : 'product__cost grey'}>
                                    {product.cost} <span className="product__cost--small">PTS</span>
                                </div>
                                { user.points >= product.cost &&
                                    <button type="button" onClick={this.redeemCode.bind(this, product._id, product.cost)}>
                                        { product.loader ? <div>Cargando</div>: 'Redeem now' }
                                    </button>
                                }
                                {
                                    user.points < product.cost &&
                                    <div className="redeem-remaining">{ product.cost - user.points } <span className="small">PTS</span> + <br/> <span className="text">& REDEEM!</span></div>
                                }
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
                        min-height: 288px;
                        width: 30%;
                        box-shadow: 2px 2px 4px -1px rgba(179,48,0, 0.45);
                        transition: all ease-out 250ms;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        overflow: hidden;
                    }
                    
                    .product:hover {
                        box-shadow: 4.5px 4.5px 5.5px 0px rgba(179,48,0, 0.5);
                    }

                    .product__img img{
                        width: 100%;
                    }

                    .product__footer {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .product button {
                        background: #FF4400;
                        transform: translateY(170%);
                        cursor: pointer;
                        box-shadow: 2px 2px 3px 0px rgba(179,48,0, 0.7);
                        text-transform: uppercase;
                        border: none;
                        font-size: 0.7rem;
                        opacity: .4;
                        transition: all cubic-bezier(0.18, 0.89, 0.32, 1.28) 350ms;
                        padding: 0.4rem;
                        color: white;
                    }
                    
                    .product:hover button {
                        opacity: 1;
                        transform: translateY(0%);
                    }

                    .product__title {
                        margin-bottom: 1rem;
                    }

                    .product__cost {
                        font-weight: bold;
                        font-size: 1.5rem;
                        display: flex;
                        align-items: center;
                    }
                    
                    .product__cost.orange {
                        color: #FF4400;
                    }

                    .product__cost.grey {
                        color: #8a8a8a;
                    }
                    
                    .product__cost--small {
                        font-size: .75rem;
                        margin-left: .25rem;
                    }

                    .redeem-remaining {
                        color: #FF4400;
                        font-weight: bold;
                        font-size: 1.125rem;
                        line-height: 16px;
                    }
                    
                    .redeem-remaining .small {
                        font-size: .75rem;
                        margin-left: .125rem;
                        margin-right: .125rem;
                        verticle-align: middle;
                    }

                    .redeem-remaining .text {
                        font-size: 0.82rem;
                        font-style: italic;
                    }
                `}</style>
            </ul>
        )
    }
}

const mapDispatchToProps = { subtractMyPoints }

function mapStateToProps (state) {
    const { user } = state
    return { user }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList)