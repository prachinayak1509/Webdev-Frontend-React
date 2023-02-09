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
                    <Label>

                    </Label>
                    <Col>
                    <Control.select

                    />
                    <Errors
                    
                    
                    />
                    </Col>

                </Row>
            </LocalForm>
        </ModalBody>
    </Modal>
</React.Fragment>
    );

}

export default CommentForm;