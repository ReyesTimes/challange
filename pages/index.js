import Header from "../components/header";
import ProductList from '../components/productList'

import Meta from '../components/meta'

import requestService from '../services/index.js'

class Index extends React.Component {
  static async getInitialProps() {
    let { data: productsList } = await requestService({ path: 'products' })
    
    let products = productsList.map((product) => {
      product.loader = false
      
      return product
    })

    return { products }
  }

  render() {
    const { products } = this.props
    
    return (
      <div>
          <Meta />
          <Header/>
          <main>
              <div className="products__container">
                  <ProductList products={ products } />
              </div>
          </main>

          <style jsx>{`
            .products__container {
              background-color: #f7f7f72e;
              padding: 2rem 0;
            }
          `}</style>
      </div>
    )
  }
}

export default Index;