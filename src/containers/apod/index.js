import React, { Fragment } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { connect } from "react-redux";
import { Actions } from "redux/modules/nasa/apod";
import { nasaAPODAPI } from "api/api";

import {
  Box,
  Typography,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  TextField,
  CircularProgress,
} from "@material-ui/core";

class APOD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    this.getData = this.getData.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  async getData(date) {
    try {
      const response = await nasaAPODAPI(date);
      const dataSource = { dataSource: response.data };
      await this.props.dispatch(Actions.display(dataSource));
    } catch (err) {
      console.log("Error in APOD request");
      console.log(err);
    }
  }

  async handleDateChange(e) {
    let target = new Date(e.target.value);
    let today = new Date(moment().format('YYYY-MM-DD'));
    if (target > today) {
      window.alert("Please choose a date before today");
      return;
    }
    await this.getData(e.target.value);
    await this.setState({ isLoading: false })
  }

  async componentDidMount() {
    await this.getData(moment().format("YYYY-MM-DD"));
    await this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;
    const { dataSource } = this.props;
    return (
      <Box display="flex" flexDirection="column" alignItems="center" pt={2} pb={1}>
        <Box display="flex" alignItems="center" justify="stretch" mt={1} mb={2}>
          <Avatar src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" />
          <Typography
            variant="h6"
            style={{ marginRight: "2rem", marginLeft: "2rem" }}
          >
            NASA Astronomy Picture of the Day
          </Typography>
          <TextField
            id="date"
            label="Pick a date"
            type="date"
            defaultValue={moment()}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleDateChange}
          />
        </Box>
        <Typography variant="h3">{dataSource.title}</Typography>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <img
            src={dataSource.url}
            style={{ width: "auto", height: "800px", margin: "2rem" }}
          ></img>
        )}
      </Box>
    );
  }
}

// APOD.propTypes = {
// };

function mapStateToProp(state) {
  return {
    dataSource: state.apod.dataSource,
  };
}
export default connect(mapStateToProp)(APOD);
