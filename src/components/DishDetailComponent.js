import react, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { render } from "react-dom";
class DishDetail extends Component {
  constructor(props) {
    super(props);
  }
  renderDish(dish) {
    if (dish != null) {
      const comments = this.props.dish.comments.map((comment) => {
        return (
          
            <div key={comment.id} className="col-12 col-md-5 m-1">
              <h3>{comment.comment}</h3>
              <p>
                -- {comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
              </p>
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
            <h1>Comments</h1>
            <div className="row">{comments}</div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderDish(this.props.dish)}</div>
      </div>
    );
  }
}

export default DishDetail;
