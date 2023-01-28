import react from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Render } from "react-dom";

function RenderDish(dish) {
  if (dish != null) {
    const comments = dish.comments.map((comment) => {
      return (
        <div className="col-12 col-md-5 m-1">
          {" "}
          <div key={comment.id} className="col-12 col-md-5 m-1">
            <h4>{comment.comment}</h4>
            <p>
              -- {comment.author},
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          </div>
        </div>
      );
    });

    return (
      <div>
        {" "}
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        <div>
          <h2>Comments</h2>
          <div className="row">{comments}</div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>

          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">{RenderDish(props.dish)}
      {RenderDish(props.comment)}
      </div>
    </div>
  );
}


export default DishDetail;
