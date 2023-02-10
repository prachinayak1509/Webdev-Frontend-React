import React, { Component } from "react";
import {Button, Modal, ModalBody, ModalHeader, Label, Row, Col} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


class CommentForm extends Component{
    constructor(props){
        super(props);

        this.state={
            isCommentFormModelOpen : false
        };
    }


render(){
    return(
<React.Fragment>
    <Button>
        <span className="fa fa-comments fa-lg"></span> Submit Comment
    </Button>

    <Modal>
        <ModalHeader>Submit Comment</ModalHeader>
        <ModalBody>
            <LocalForm>
                <Row className="form-group">
                    <Label htmlFor="rating" md={12}>
Rating
                    </Label>
                    <Col md={12}>
                    <Control.select
                      model=".rating"
                      name="rating"
                      id="rating"
                      className="form-control"
        
                />
                <option>
                    Please Select
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                    <Errors
                    
                    
                    />
                    </Col>

                </Row>


                <Row className="form-control">
                    <Label htmlFor="author" md={12}>Your Name</Label>
                    <Col md={12}>
                        <Control.text
                        model=".author"
                        name="author"
                        id="author"
                        placeholder="First Name"
                        className="form-control"
                        />
                    </Col>
                </Row>

                <Row className="form-control">
                    <Label htmlFor="comment" md={12}>Comment</Label>
                    <Col md={12}>
                        <Control.textarea 
                        model=".comment"
                        id="comment"
                        name="comment"
                        className="form-control"
                        rows="6"
                        />

                    </Col>
                </Row>
                <Row className="form-control">
                    <Col>
                    <Button type="submit" color="primary">Submit
                    </Button>
                    </Col>
                </Row>
            </LocalForm>
        </ModalBody>
    </Modal>
</React.Fragment>
    );
    } 
}

export default CommentForm;