import Link from "next/link";
import Header from "../components/header";
import ProductList from '../components/productList'

import Meta from '../components/meta'

import requestService from '../services/index.js'

export default class extends React.Component {
  static async getInitialProps() {
    let { data: products } = await requestService({ path: 'products' })

    return { products }
  }

  render() {
    const { products } = this.props

    return (
      <div>
          <Meta />
          <Header />
          <main>
              <div className="products__container">
                  <ProductList products={ products }/>
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
