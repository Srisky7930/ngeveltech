import {Component} from 'react'

import Header from '../Header'

import Products from '../Products'

import './index.css'

class Home extends Component {
  state = {
    items: [],
  }

  componentDidMount() {
    this.getProductsData()
  }

  getProductsData = async () => {
    const apiUrl = 'https://apis.ccbp.in/products'
    const jwtToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const fetchedData = data.products.map(each => ({
      id: each.id,
      brandName: each.brand,
      imageUrl: each.image_url,
      price: each.price,
      rating: each.rating,
      titleName: each.title,
    }))
    this.setState({
      items: fetchedData,
    })
  }

  render() {
    const {items} = this.state

    return (
      <div className="bg-container">
        <Header />
        <div className="product-container">
          <h1 className="product-heading"> Products </h1>
          <ul className="products-items">
            {items.map(each => (
              <Products key={each.id} productsDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
