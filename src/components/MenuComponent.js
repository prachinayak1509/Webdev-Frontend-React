import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);

    
    console.log("menu component contructor is invoked");
  }

  componentDidMount() {
    console.log("menu component componentDidMount is invoked");
  }
  

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />

            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    console.log("menu component render is invoked");

    return (
      <div class="container">
        <div className="row">{menu}</div>
        
      </div>
    );
  }
}

export default Menu;
