import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "@mui/material/Rating";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AttachFileIcon from "@mui/icons-material/AttachFile";

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

const Category = ({ product }) => {
  const [open, setOpen] = useState(false);
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const [expanded, setExpanded] = useState(false);
  const [isStyled, setIsStyled] = useState(false);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleStyle = () => {
    setIsStyled(!isStyled);
  };

  const { category, title, rating, image, id } = product;

  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#fff" }} aria-label="recipe">
            <img src={image} alt={category} />
          </Avatar>
        }
        title={category}
        subheader={`Product # ${id}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={category}
        onClick={(e) => navigate(`/product/${id}`)}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            handleStyle();
          }}
        >
          <FavoriteIcon style={{ color: isStyled ? "red" : "#777" }} />
        </IconButton>
        <IconButton aria-label="share" onClick={submitReviewToggle}>
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Rating name="read-only" value={rating["rate"]} readOnly />
        </ExpandMore>
      </CardActions>
      <Dialog
        aria-labelledby="simple-dialog-title"
        className="dialog"
        open={open}
        onClose={submitReviewToggle}
      >
        <DialogTitle>Share Product</DialogTitle>
        <DialogContent className="submitDialog">
          <FacebookIcon className="facebook" />
          <InstagramIcon className="instagram" />
          <TwitterIcon className="twitter" />
          <LinkedInIcon className="linkedin" />
          <AttachEmailIcon className="mail" />
          <AttachFileIcon className="url" />
        </DialogContent>
        <DialogActions>
          <Button onClick={submitReviewToggle} color="error">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default Category;
