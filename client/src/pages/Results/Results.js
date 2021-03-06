import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";
import {Grid} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import "./cardStyle.css";


class Results extends Component {
  state = {
    skills: []
  };

  componentDidMount() {
    this.loadResults();
  }

  componentDidUpdate() {
    this.loadResults();
  }

  loadResults = () => {
    API.getUserSkill(this.props.match.params.skill)
    .then(res => this.setState({ skills: res.data }))
    .catch(err => console.log(err));
  };

    render() {
      return (
        <div>
        <Grid>
          <Row>
              {this.state.skills.length ? (
                <div>
                {this.state.skills.map(result => (
                  <Col xs={6} md={4} lg={3}>

                  <Card
                    key={result._id}
                    firstName={result.firstName}
                    lastName={result.lastName}
                    photo={result.photo}
                    city={result.city}
                    state={result.state}
                    skills={result.skills} 
                    aboutMe={result.aboutMe}
                    cost={result.cost}
                    email={result.email}
                  /></Col>
                ))}
                </div>
            ) : (
              <h3>No mentors for that skill yet!</h3>
            )}           
          </Row>
        </Grid>
        </div>
    );
  }
}
          

export default Results;