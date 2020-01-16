import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const FormView = props => {
  return (
    <Form>
      <FormGroup>
        <Label for="nameField">Name</Label>
        <Input
          type="text"
          name="nameField"
          id="nameField"
          placeholder="John Doe"
        />
      </FormGroup>
      <FormGroup>
        <Label for="emailField">Email</Label>
        <Input
          type="email"
          name="emailField"
          id="emailField"
          placeholder="johndoe@gmail.com"
        />
      </FormGroup>
      <FormGroup>
        <Label for="comments">Comments</Label>
        <Input type="textarea" name="comments" id="comments" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default FormView;
