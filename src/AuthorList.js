import React from "react";

function AuthorsList(props) {
  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card">
            <div className="image">
              <img
                className="card-img-top img-fluid"
                src={props.authors[0].imageUrl}
                alt={
                  props.authors[0].first_name + " " + props.authors[0].last_name
                }
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <span>
                  {props.authors[0].first_name +
                    " " +
                    props.authors[0].last_name}
                </span>
              </h5>
              <small className="card-text">
                {props.authors[0].books.length} books
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card">
            <div className="image">
              <img
                className="card-img-top img-fluid"
                src={props.authors[1].imageUrl}
                alt={
                  props.authors[1].first_name + " " + props.authors[1].last_name
                }
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <span>
                  {props.authors[1].first_name +
                    " " +
                    props.authors[1].last_name}
                </span>
              </h5>
              <small className="card-text">
                {props.authors[1].books.length} books
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card">
            <div className="image">
              <img
                className="card-img-top img-fluid"
                src={props.authors[2].imageUrl}
                alt={
                  props.authors[2].first_name + " " + props.authors[2].last_name
                }
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <span>
                  {props.authors[2].first_name +
                    " " +
                    props.authors[2].last_name}
                </span>
              </h5>
              <small className="card-text">
                {props.authors[2].books.length} books
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card">
            <div className="image">
              <img
                className="card-img-top img-fluid"
                src={props.authors[3].imageUrl}
                alt={
                  props.authors[3].first_name + " " + props.authors[3].last_name
                }
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <span>
                  {props.authors[3].first_name +
                    " " +
                    props.authors[3].last_name}
                </span>
              </h5>
              <small className="card-text">
                {props.authors[3].books.length} books
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorsList;
