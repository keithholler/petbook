import React, { Component } from "react";
import { Control, Form, Errors } from "react-redux-form";
import { Button, Label,Row,Col, Modal,
  ModalHeader,
  ModalBody, } from "reactstrap";
import * as emailjs from 'emailjs-com'

class Lostpet extends Component {
  constructor(props) {
    super(props);
    this.state={
      isEmailSentModalOpen:false
    }
    this.toggleModalEmailSent = this.toggleModalEmailSent.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  handleSubmit(values) {
    this.toggleModalEmailSent ()

    if(this.props.userInfo.userInfo.userId === values.petId){

      let templateParams = {
        from_name: "PetProfile",
        to_name: 'keithandkaylee@gmail.com',
        subject: "PetFound",
        message_html: "Your Pet Was Found",
       }
       emailjs.send(
        'service_6u1iluk',
        'template_h94ookz',
         templateParams,
        'user_HqDyxgYEp2AfHpa0ga1B3'
       )
    }
    this.toggleModalEmailSent ()
 
  this.props.resetLostPetForm();
  }

  toggleModalEmailSent () {
    this.setState(
      {
        isEmailSentModalOpen: true,
      },
      () => {
        setTimeout(this.handleClose, 3000);
      }
    );
  }

  handleClose = () => {
    this.setState({
      isEmailSentModalOpen: false,
    });
  };
  render() {
    return <React.Fragment>LostPets

<Form
              model="lostPetForm"
              onSubmit={(values) => this.handleSubmit(values)}
            >
               <Row className="form-group">
                <Label htmlFor="petId" md={2}>
                  Enter Lost Pet ID
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".petId"
                    id="petId"
                    name="petId"
                    placeholder="Enter Lost Pet ID"
                    className="form-control"
                    validators={{

                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".petId"
                    show="touched"
                    component="div"
                    messages={{
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" value="submit" color="primary">
                    Sumbit Lost Pet
                  </Button>
                </Col>
              </Row>
            </Form>


            <Modal
          isOpen={this.state.isEmailSentModalOpen}
          toggle={this.toggleModalEmailSent}
        >
          <ModalHeader toggle={this.toggleModalEmailSent}>
            Notification
          </ModalHeader>
          <ModalBody>Email was sent to the owner.</ModalBody>
        </Modal>
    </React.Fragment>;
  }
}

export default Lostpet;
