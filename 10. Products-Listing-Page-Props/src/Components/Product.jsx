
function Product(props) {
  return (
    <>
      <img
        src={props.thumbnail}
        className="card-img-top"
        alt="Product Thumbnail"
      ></img>
      <div className="card-body">
        <h5 className="card-title">
          Crystal chandelier maria theresa for 12 light
        </h5>
        <p className="card-text">Price: ${props.price}</p>
        <p className="card-text">Discount: {props.discountPercentage}%</p>
        <p className="card-text">Rating: {props.rating}</p>
        <p className="card-text">Stock: {props.stock}</p>
        <p className="card-text">Brand: {props.brand}</p>
        <a href="#" className="btn btn-primary">
          View Details
        </a>
      </div>
    </>
  );
}

export default Product;
