import {Component} from 'react'

import Header from '../Header'

import './index.css'

class ProductsDetails extends Component {
  state = {
    itemDetails: {},
  }

  componentDidMount() {
    this.getProductsItemDetails()
  }

  getFormattedData = data => ({
    availability: data.availability,
    brand: data.brand,
    description: data.description,
    id: data.id,
    imageUrl: data.image_url,
    price: data.price,
    rating: data.rating,
    title: data.title,
    totalReviews: data.total_reviews,
  })

  getProductsItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU'
    const apiUrl = `https://apis.ccbp.in/products/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const fetchedData = this.getFormattedData(data)

    this.setState({
      itemDetails: fetchedData,
    })
  }

  addItem = () => {
    alert('Order Confirmed')
  }

  render() {
    const {itemDetails} = this.state
    const {
      title,
      totalReviews,
      availability,
      imageUrl,
      brand,
      rating,
      description,
      price,
    } = itemDetails

    return (
      <div className="item-details-container">
        <Header />
        <div className="details-container">
          <div className="card-1">
            <h1 className="title"> {title} </h1>
            <img src={imageUrl} alt={title} className="details-image" />
          </div>
          <div className="card-2">
            <p className="description"> {description} </p>
            <p className="brand">By {brand} Brand </p>
            <div className="availability-card">
              <p className="availability">Available: {availability} </p>
            </div>
            <p className="price"> Rs {price}/- </p>
            <p className="reviews"> {totalReviews} TotalReviews </p>
            <p className="rating"> {rating} Ratings.. </p>
            <div>
              <button
                type="button"
                onClick={this.addItem}
                className="buy-button"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductsDetails
