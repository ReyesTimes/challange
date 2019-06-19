import Link from "next/link";
import Header from "../components/header";
import ProductList from '../components/productList'

import requestService from '../services/index.js'

export default class extends React.Component {
  static async getInitialProps() {
    let { data: products } = await requestService({ path: 'products' })

    return { products }
  }

  render() {
    const { products } = this.props

    return (
      <main>
      <Header />
      <main>
        <ProductList products={ products }/>
      </main>
    </main>
    )
  }
}
