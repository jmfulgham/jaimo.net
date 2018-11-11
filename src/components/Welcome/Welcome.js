import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
require("typeface-vidaloka");
require("typeface-quicksand");

const styles = {
  fontFamily: "Vidaloka",
  margin: "150px",
  marginBottom: "20px"
};

class Welcome extends Component {
  render() {
    return (
      <div>
        <Typography
          variant="display4"
          color="primary"
          style={styles}
          align="center"
        >
          JAI MONE'T
        </Typography>

        <Typography
          variant="body"
          color="secondary"
          align="center"
          style={{ fontSize: "50px", fontFamily: "Quicksand" }}
        >

          Software Engineer and Mobile App Developer
        </Typography>
      </div>
    );
  }
}

export default Welcome;
