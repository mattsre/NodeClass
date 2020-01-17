import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Collapse,
  Card,
  CardBody,
  CardText
} from "reactstrap";

const FormView = props => {
  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [comment, updateComment] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Form>
      <FormGroup>
        <Label for="nameField">Name</Label>
        <Input
          type="text"
          name="nameField"
          id="nameField"
          placeholder="John Doe"
          value={name}
          onChange={e => updateName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="emailField">Email</Label>
        <Input
          type="email"
          name="emailField"
          id="emailField"
          placeholder="johndoe@gmail.com"
          value={email}
          onChange={e => updateEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="comments">Comments</Label>
        <Input
          type="textarea"
          name="comments"
          id="comments"
          value={comment}
          onChange={e => updateComment(e.target.value)}
        />
      </FormGroup>
      <Button onClick={e => setIsOpen(true)}>Submit</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <CardText>
              <b>Name:</b> {name}
            </CardText>
            <CardText>
              <b>Email:</b> {email}
            </CardText>
            <CardText>
              <b>Comment:</b> {comment}
            </CardText>
          </CardBody>
        </Card>
      </Collapse>
    </Form>
  );
};

export default FormView;
