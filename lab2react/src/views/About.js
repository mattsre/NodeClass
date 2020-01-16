import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const AboutView = props => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle className="text-danger">BYND Stonks</CardTitle>
              <CardSubtitle className="text-muted">
                Credit: Lee Warner
              </CardSubtitle>
            </CardBody>
            <img width="100%" src="/BYNDStonks.png" alt="BYND Stonks" />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          Phasellus aliquam sem dolor, nec aliquet ex molestie in. Cras sapien
          lorem, commodo nec bibendum et, facilisis feugiat odio. Curabitur ut
          maximus mauris. Integer nunc nunc, accumsan vel consequat cursus,
          placerat accumsan sapien. Cras dictum feugiat turpis eu mattis.
          Maecenas euismod interdum odio, vel ornare turpis efficitur vel. Nunc
          et ligula vel leo elementum mattis sed sit amet purus. Proin mauris
          dui, tempor non hendrerit id, efficitur quis purus. Fusce tempor risus
          purus, at convallis dui porttitor at. Nunc non leo ligula. Mauris ac
          mi diam. Sed ac sem pellentesque, dictum ex et, scelerisque ipsum. Sed
          in dui vestibulum, ultrices nulla sit amet, faucibus massa. Praesent a
          justo sapien. Sed id lobortis justo.
        </Col>
        <Col>
          Quisque dictum tortor in diam mollis rutrum vitae quis nulla. Mauris
          ac sapien massa. Suspendisse pellentesque magna quis venenatis
          volutpat. Nullam et felis sed magna mollis semper et sit amet lacus.
          Nullam vel semper ante. Nunc ligula tellus, gravida in ipsum a,
          suscipit pretium purus. Curabitur at felis venenatis, pretium ipsum
          eu, semper ex. Integer et ultricies ipsum, sed placerat ipsum. Donec
          in accumsan dui. Vestibulum viverra ante vel ipsum commodo varius.
          Nulla mauris orci, mollis sit amet auctor in, suscipit quis erat.
          Proin ac viverra orci, at venenatis ante. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Curabitur pharetra iaculis arcu nec
          bibendum. Nam sagittis nisi at metus dignissim, id consequat orci
          lacinia.
        </Col>
      </Row>
    </Container>
  );
};

export default AboutView;
