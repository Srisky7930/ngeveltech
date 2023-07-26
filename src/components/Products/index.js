import {Link} from 'react-router-dom'

import './index.css'

const Products = props => {
  const {productsDetails} = props
  const {id, titleName, brandName, imageUrl, rating} = productsDetails

  return (
    <li>
      <Link to={`/products/${id}`} className="link">
        <div className="card">
          <div>
            <img src={imageUrl} className="image-url" alt="img" />
          </div>
          <div className="details-card">
            <h1 className="title-name"> {titleName} </h1>
            <p className="rating">Ratings {rating} </p>
            <p className="brand-name"> Brand - {brandName} </p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Products
