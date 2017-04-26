import React from "react";
import Reviews from "./Reviews";
import Stars from "./Stars";

function ProductDetail(props) {
  const {name,description,rating,imgUrl,reviews} = props.product;

  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img style={{width: "320px",height: "150px"}} src={imgUrl} alt="" />
        <div className="caption">
          <h4><a href="#">{name}</a>
          </h4>
          <p>{description}
          </p>
        </div>
        <div className="ratings">
          <p className="pull-right"><Reviews reviews={reviews} /></p>
          <p>
            <Stars starRating={rating} />
          </p>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
