import React, { useState } from "react";
import dataList from "./data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Search = () => {
  const [filter, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  const dataSearch = dataList.cardData.filter((item) => {
    return Object.keys(item).some(
      (key) =>
        item[key] &&
        item[key].toString().toLowerCase().includes(filter.toLowerCase()),
    );
  });

  return (
    <div style={{ backgroundColor: "grey" }}>
      <Navbar className="bg-body-tertiary justify-content-center  ">
        <Form inline className="searchbar">
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                id="searching"
                placeholder="Search"
                className="mr-sm-2 "
                value={filter}
                onChange={searchText}
              />
            </Col>
          </Row>
        </Form>
      </Navbar>

      <section style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {dataSearch.map((item, index) => (
          <Card
            key={index}
            style={{
              width: "18rem",
              backgroundColor: "black",
              color: "white",
              boreder: "solid",
            }}
          >
            <Card.Img
              variant="top"
              src={item.img}
              style={{ height: "12rem", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.Text}</Card.Text>
              <Button variant="primary">More...</Button>
            </Card.Body>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Search;
