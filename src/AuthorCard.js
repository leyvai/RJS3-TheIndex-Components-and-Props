import React from "react";

function AurthorCard(props) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={props.authors[0].imageUrl}
            alt={props.authors[0].first_name + " " + props.authors[0].last_name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>
              {props.authors[0].first_name + " " + props.authors[0].last_name}
            </span>
          </h5>
          <small className="card-text">
            {props.authors[0].books.length} books
          </small>
        </div>
      </div>
    </div>
  );
}

export default AurthorCard;
