import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import cx from 'classnames';
import styles from './Post.module.css';
import { Loading } from '../Loading';

class NewsCard01 extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        news: []
      }
    }
    componentDidMount() {
      fetch('https://cryptic-ravine-96718.herokuapp.com/')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState({
        news: myJson.news
      })
    });
    }
  render(){
    if (this.state.news.length===0) {
      return <Loading/>
    }
    else
    return(
    <Card className={"MuiNewsCard--01"}>
      {this.state.news.map((item, index) => {
      /*  */
        return (
            <div className="container">
              <CardMedia
                className={"MuiCardMedia-root"}
                image={
                  item.img
                }
              >
                <Typography className={"MuiTypography--category"}>ACTUALITES</Typography>
              </CardMedia>
              <CardContent className={"MuiCardContent-root"}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  {item.title}
                </Typography>
                <Typography
                className={"MuiTypography--overline"}
                gutterBottom>
                  <a href={item.link} target="_blank">Lire la suite</a>
                  
                </Typography>
              </CardContent>
            </div>
          )
        })
      }
  </Card>
  );}
}

NewsCard01.getTheme = muiBaseTheme => ({
  MuiCard: {
    root: {
      "&.MuiNewsCard--01": {
        maxWidth: 400,
        marginBottom: "20px",
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
        boxShadow: "none",
        // border:"1px solid rgba(204, 203, 203, 0.986)",
        borderRadius: "15px",
        "& button": {
          marginLeft: 0
        },
        "& .MuiCardMedia-root": {
          paddingTop: "65%",
          position: "relative",
          "& .MuiTypography--category": {
            color: "rgba(255, 255, 255, 0.87)",
            position: "absolute",
            top: muiBaseTheme.spacing.unit * 2.5,
            left: muiBaseTheme.spacing.unit * 2.5,
            letterSpacing: 0.5,
            fontWeight: 900
          }
        },
        "& .MuiCardContent-root": {
          textAlign: "left",
          padding: muiBaseTheme.spacing.unit * 3,
          "& .MuiTypography--overline": {
            color: muiBaseTheme.palette.grey[500],
            fontWeight: "bold"
          },
          "& .MuiTypography--heading": {
            fontWeight: 900,
            lineHeight: 1.3
          },
          "& .MuiTypography--subheading": {
            lineHeight: 1.8,
            color: muiBaseTheme.palette.text.primary,
            fontWeight: "bold"
          }
        },
        "& .MuiCardActions-root": {
          padding: `0 ${muiBaseTheme.spacing.unit * 3}px ${muiBaseTheme.spacing
            .unit * 3}px`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }
      }
    }
  },
  MuiButton: {
    root: {
      "& svg, .material-icons": {
        marginLeft: muiBaseTheme.spacing.unit
      }
    },
    label: {
      textTransform: "initial"
    }
  }
});
NewsCard01.metadata = {
  name: "News Card",
  description: "Best for Blog"
};

export default NewsCard01;
