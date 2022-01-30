import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./singleProduct.css";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const SigleProduct = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState({});
  const [expanded, setExpanded] = useState(false);
  const [isStyled, setIsStyled] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleStyle = () => {
    setIsStyled(!isStyled);
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const request = await fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => json);
      console.log(request);
      setProducts(request);
      setLoading(false);
    }
    fetchData();
  }, [id]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="single__card">
          <Card sx={{ maxWidth: 345 }} className="singleCard">
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#fff" }} aria-label="recipe">
                  <img src={products.image} alt={products.category} />
                </Avatar>
              }
              title={products.category}
              subheader={`Product # ${id}`}
            />
            <CardMedia
              component="img"
              height="194"
              image={products.image}
              alt={products.category}
              onClick={(e) => navigate(`/product/${id}`)}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {products.title}
              </Typography>
            </CardContent>
            <Rating
              name="read-only"
              value={4.5}
              readOnly
              precision={0.5}
              style={{ paddingLeft: "12px" }}
            />
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() => {
                  handleStyle();
                }}
              >
                <FavoriteIcon style={{ color: isStyled ? "red" : "#ddd" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>

              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>{products.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      )}
    </Fragment>
  );
};

export default SigleProduct;
