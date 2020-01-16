import React from "react";
import { Jumbotron, Button } from "reactstrap";

const HomeView = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Home Page</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales
          auctor ex, non hendrerit tortor consequat sit amet. Sed dictum felis
          nibh, sollicitudin maximus purus placerat ac. Quisque lobortis pretium
          purus eu convallis. Nullam odio nibh, consequat at ligula ac,
          ullamcorper ornare nibh. Suspendisse porta pharetra massa, sed dapibus
          ligula interdum non. Mauris ac rhoncus augue. Etiam nec placerat erat.
          Nam viverra commodo metus
        </p>
        <hr className="my-2" />
        <p>Lorem Ipsum Generator Beep Boop</p>
        <p className="lead">
          <Button color="primary">More Lorem</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default HomeView;
