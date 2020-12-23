import React, { Component,useEffect, useState,useMemo } from "react";
import { Button, Label,Row,Col } from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
//import {useDropzone} from 'react-dropzone';
const required = (val) => val && val.length;
function Uni(props) {
  if (props.uniqueId.uniqueId) {
    return <div>{props.uniqueId.uniqueId}</div>;
  } else {
    return <div>Failed</div>;
  }
}

// const baseStyle = {
//   flex: 1,
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: '20px',
//   borderWidth: 2,
//   borderRadius: 2,
//   borderColor: '#eeeeee',
//   borderStyle: 'dashed',
//   backgroundColor: '#fafafa',
//   color: '#bdbdbd',
//   outline: 'none',
//   transition: 'border .24s ease-in-out'
// };

// const activeStyle = {
//   borderColor: '#2196f3'
// };

// const acceptStyle = {
//   borderColor: '#00e676'
// };

// const rejectStyle = {
//   borderColor: '#ff1744'
// };
// const thumbsContainer = {
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   marginTop: 16
// };

// const thumb = {
//   display: 'inline-flex',
//   borderRadius: 2,
//   border: '1px solid #eaeaea',
//   marginBottom: 8,
//   marginRight: 8,
//   width: 100,
//   height: 100,
//   padding: 4,
//   boxSizing: 'border-box'
// };

// const thumbInner = {
//   display: 'flex',
//   minWidth: 0,
//   overflow: 'hidden'
// };

// const img = {
//   display: 'block',
//   width: 'auto',
//   height: '100%'
// };


// function Previews(props) {
//   const [files, setFiles] = useState([]);
//   const {getRootProps, getInputProps, isDragActive,
//     isDragAccept,
//     isDragReject} = useDropzone({
//     accept: 'image/*',
//     onDrop: acceptedFiles => {
//       setFiles(acceptedFiles.map(file => Object.assign(file, {
//         preview: URL.createObjectURL(file)
//       })));
//     }
//   });
  
//   const thumbs = files.map(file => (
//     <div style={thumb} key={file.name}>
//       <div style={thumbInner}>
//         <img
//           src={file.preview}
//           style={img}
//         />
//       </div>
//     </div>
//   ));

//   useEffect(() => () => {
//     // Make sure to revoke the data uris to avoid memory leaks
//     files.forEach(file => URL.revokeObjectURL(file.preview));
//   }, [files]);

//   const style = useMemo(() => ({
//     ...baseStyle,
//     ...(isDragActive ? activeStyle : {}),
//     ...(isDragAccept ? acceptStyle : {}),
//     ...(isDragReject ? rejectStyle : {})
//   }), [
//     isDragActive,
//     isDragReject,
//     isDragAccept
//   ]);

//   return (
//     <section className="container">
//       <div {...getRootProps({className: 'dropzone'})}>
//         <input {...getInputProps({style})} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//       <aside style={thumbsContainer}>
//         {thumbs}
//       </aside>
//     </section>
//   );
// }



class PetProfile extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeForImage = this.handleChangeForImage.bind(this);
  }
  handleSubmit(values) {
    const localImageUrl =  window.URL.createObjectURL(values.profileImage[0]);
  this.props.addUserInfo(this.props.uniqueId.uniqueId,localImageUrl,values)
  console.log(values.profileImage[0])
  console.log(values)
 
  this.props.resetProfileForm();
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleChangeForImage(event) {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        profileImage: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }


 

  render() {

   
    return (
      <React.Fragment>
        <div  className="row">
          <h3 className="col-2">
          Your Unique Pet Id:
          </h3>
          <h3 className="col">
           <Uni uniqueId={this.props.uniqueId} />
          </h3>
        </div>

         <Form
              model="profileForm"
              onSubmit={(values) => this.handleSubmit(values)}
            >
               <Row className="form-group">
                <Label htmlFor="profileImage" md={2}>
                  Profile Image
                </Label>
                <Col md={10}>
                  <Control.file
                    model=".profileImage"
                    id="profileImage"
                    name="profileImage"
                    placeholder="Profile Image"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".profileImage"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstName"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstName"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>

               <Row className="form-group">
                <Label htmlFor="LastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastName"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastName"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>

               <Row className="form-group">
                <Label htmlFor="animalType" md={2}>
                  Animal Type
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".animalType"
                    id="animalType"
                    name="animalType"
                    placeholder="Animal Type"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".animalType"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>

                <Row className="form-group">
                <Label htmlFor="breed" md={2}>
                  Breed
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".breed"
                    id="breed"
                    name="breed"
                    placeholder="Breed"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".breed"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>

               <Row className="form-group">
                <Label htmlFor="mainColor" md={2}>
                  Main Color
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".mainColor"
                    id="mainColor"
                    name="mainColor"
                    placeholder="Main Color"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".mainColor"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>

               <Row className="form-group">
                <Label htmlFor="secondaryColor" md={2}>
                  Secondary Color
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".secondaryColor"
                    id="secondaryColor"
                    name="secondaryColor"
                    placeholder="Secondary Color"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".secondaryColor"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>

               <Row className="form-group">
                <Label htmlFor="ownerFirstName" md={2}>
                  Owner First Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".ownerFirstName"
                    id="ownerFirstName"
                    name="ownerFirstName"
                    placeholder="Owner First Name"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".ownerFirstName"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>

               <Row className="form-group">
                <Label htmlFor="ownerLastName" md={2}>
                  Owner Last Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".ownerLastName"
                    id="ownerLastName"
                    name="ownerLastName"
                    placeholder="Owner Last Name"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".ownerLastName"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>
  
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" value="submit" color="primary">
                    Save
                  </Button>
                </Col>
              </Row>
            </Form>

      </React.Fragment>
    );
  }
}

export default PetProfile;
