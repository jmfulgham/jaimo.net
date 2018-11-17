import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
require("typeface-vidaloka");
require("typeface-quicksand");

const styles = {
  fontFamily: "Vidaloka",
  marginTop: '20%'
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
          variant="body2"
          color="secondary"
          align="center"
          style={{ fontSize: "40px", fontFamily: "Quicksand" }}
        >

          Software Engineer and Mobile App Developer
        </Typography>
      </div>
    );
  }
}

export default Welcome;
