import React from "react";
import { Col, Row } from "reactstrap";

const RowBlock = itemList => {
  console.log(itemList);
  return (
    <Row>
      <Col lg={{ size: 10, offset: 1 }}>{itemList}</Col>
    </Row>
  );
};

export default RowBlock;
