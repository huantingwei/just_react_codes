import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";

import axios from "axios";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      quoteList: [],
      currPage: Math.floor(Math.random() * 26 + 1),
      listOpen: false,
    };
    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.getQuoteList = this.getQuoteList.bind(this);
    this.handleListOpen = this.handleListOpen.bind(this);
  }

  async getRandomQuote() {
    const response = await axios.get(
      "https://programming-quotes-api.herokuapp.com/quotes/random"
    );
    this.setState({
      quote: response.data,
    });
  }

  async getQuoteList() {
    const response = await axios.get(
      "https://programming-quotes-api.herokuapp.com/quotes/page/" +
        this.state.currPage
    );
    this.setState({
      quoteList: response.data,
    });
  }

  handleListOpen() {
    this.setState((prevState) => ({
      listOpen: !prevState.listOpen,
    }));
  }

  componentDidMount() {
    this.getRandomQuote();
    this.getQuoteList();
  }
  render() {
    return (
      <Fragment>
        <Box pt={20} pb={15} px={10}>
          <Typography variant="h2">{this.state.quote.en}</Typography>
          <Divider style={{ marginTop: "1rem", marginBottom: "1.5rem" }} />
          <Typography variant="h3">{this.state.quote.author}</Typography>
        </Box>
        <Box pb={10} display="flex" justifyContent="center">
          <Button onClick={this.getRandomQuote} size="large" variant="outlined" style={{marginRight: "2rem"}}>
            Surprise me
          </Button>
          <Button onClick={this.handleListOpen} size="large" variant="outlined" style={{marginLeft: "2rem"}}>
            {this.state.listOpen ? "Close" : "See more quotes"}
          </Button>
        </Box>
        {this.state.listOpen ? (
          <Box pb={10} px={10}>
            <List>
              {this.state.quoteList.map((quote) => {
                return (
                  <Fragment key={quote.id}>
                    <ListItem
                      alignItems="flex-start"
                      style={{ marginTop: "0.3rem", marginBottom: "0.3rem" }}
                    >
                      <ListItemAvatar>
                        <Avatar>{quote.author.substr(0, 1)}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={'"' + quote.en + '"'}
                        secondary={
                          <Fragment>
                            <Typography
                              component="span"
                              variant="subtitle2"
                              color="textPrimary"
                            >
                              {quote.author}
                            </Typography>
                            {/* <Typography variant="body2" component="span" style={{marginLeft: "1rem"}}>rating: {quote.rating}</Typography> */}
                            <Rating
                              name="quote-rating"
                              value={quote.rating}
                              readOnly
                              size="small"
                              style={{ paddingTop: "1rem", marginLeft: "1rem" }}
                            />
                          </Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </Fragment>
                );
              })}
            </List>
          </Box>
        ) : null}
      </Fragment>
    );
  }
}

export default Quote;
