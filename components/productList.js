export default class extends React.Component {
    render() {
        const { products } = this.props

        return (
            <div className="products">
                {
                    products.map((product) => (
                    <div>
                        {product.name}
                    </div>
                )) }
            </div>
        )
    }
}