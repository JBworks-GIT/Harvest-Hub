import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import Navbar from "./navbar"
import Footer from "./footer";
import shoptop from "../assets/slider1.jpg";
import shoptop2 from "../assets/slider2.jpg";
import shoptop3 from "../assets/slider3.jpg";
import shoptop5 from "../assets/slider4.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import fruit from "../assets/fruit.jpg";
import vege from "../assets/vege.jpg";
import grains from "../assets/wheat.jpg";
import dairy from "../assets/dairy.jpg";
import paneer from "../assets/paneer.jpg";
import honey from "../assets/honey.jpg";
import kiwi from "../assets/kiwi.jpg";
import strawberry from "../assets/strawberry.jpg";
import "../stylesheet/Shop.css";
import dis1 from "../assets/dis1.jpg";
import dis2 from "../assets/dis2.jpg";
import dis3 from "../assets/dis3.jpg";
import dis4 from "../assets/dis4.jpg";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SimpleImageSlider from "react-simple-image-slider";

const categories = [
  {
    id: 1,
    name: "Berries",
    imageUrl: fruit,
  },
  {
    id: 2,
    name: "Vegetables",
    imageUrl: vege,
  },
  {
    id: 3,
    name: "Grains",
    imageUrl: grains,
  },
  {
    id: 4,
    name: "Dairy",
    imageUrl: dairy,
  },
];

function Shop() {
  const [marginLeft, setMarginLeft] = useState(0);

  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { url: shoptop },
    { url: shoptop2 },
    { url: shoptop3 },
    { url: shoptop5 },
  ];

  const trendImages = [
    { image: paneer, title: "Paneer" },
    { image: honey, title: "Honey" },
    { image: kiwi, title: "kiwi" },
    { image: strawberry, title: "Strawberry" },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % trendImages.length);
  };

  return (
    <>
      <Navbar/>
      <div className="shop-container">
        <h1
          style={{
            position: "absolute",
            background: "rgba(0,0,0,0.1)",
            color: "white",
            fontSize: "3rem",
            zIndex: 5,
            top: 200,
            left: 410,
            textAlign: "center",
          }}
        >
          20% OFF for new users !!
        </h1>
        <div>
          <SimpleImageSlider
            width={1250}
            height={390}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
          />
        </div>

        <div style={{ padding: "20px", width: "98" }}>
          <h2 style={{ textAlign: "center" }}>Shop By Category</h2>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {/* Map through categories and render cards */}
            {categories.map((category) => (
              <Card key={category.id} sx={{ width: 270, marginBottom: 3 }}>
                {" "}
                {/* Pass category ID as a parameter */}
                {console.log(category.id)}
                <CardMedia
                  component="img"
                  sx={{ height: 200 }}
                  boxshadow="rgba(0,0,0,0.5)"
                  image={category.imageUrl}
                  alt={category.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {category.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </div>

        <Box
          className="trending-slider-container"
          sx={{
            width: 1250,
            marginTop: 5,
            boxShadow: 8,
            marginLeft: "auto",
            marginBottom: 3,
            marginRight: "auto",
            display: "flex",
            overflowX: "hidden",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Shop By Trending</h2>
          <IconButton
            className={"trending-slider-btn trending-slider-btn-left"}
            sx={{
              backgroundColor: "black",
              color: "white",
              left: "-700px",
              top: "200px",
            }}
            onClick={handlePrevSlide}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>

          <div className="trending-slider-container">
            {trendImages
              .slice(currentSlide, currentSlide + 5)
              .map((trend, index) => (
                <Card
                  key={index}
                  className="animate_from_bottom"
                  sx={{
                    width: 270,
                    marginTop: 3,
                    marginLeft: 3,
                    marginBottom: 3,
                    boxShadow: 5,
                  }}
                >
                  <CardActionArea component={Link} to="/subcategory">
                    <CardMedia
                      component="img"
                      sx={{ height: 200 }}
                      image={trend.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {trend.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
          </div>

          <IconButton
            className={"trending-slider-btn trending-slider-btn-right"}
            sx={{
              backgroundColor: "black",
              color: "white",
              right: "-710px",
              top: "-150px",
            }}
            onClick={handleNextSlide}
            disabled={marginLeft >= trendImages.length - 5}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>

        <Box
          className="discount-container"
          sx={{
            width: 1250,
            marginTop: 5,
            boxShadow: 8,
            marginLeft: "auto",
            marginBottom: 3,
            marginRight: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Products Available On Bulk</h2>
          <div className="card-container">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Card
                className="animate_from_bottom"
                sx={{
                  width: 270,
                  marginTop: 3,
                  marginLeft: 3,
                  marginBottom: 3,
                  boxShadow: 5,
                }}
              >
                <CardActionArea component={Link} to="/subcategory">
                  <CardMedia
                    component="img"
                    sx={{ height: 200 }}
                    image={dis1}
                    alt="potato"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Pototo
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card
                className="animate_from_bottom"
                sx={{
                  width: 270,
                  marginTop: 3,
                  marginLeft: 3,
                  marginBottom: 3,
                  boxShadow: 5,
                }}
              >
                <CardActionArea component={Link} to="/subcategory">
                  <CardMedia
                    component="img"
                    sx={{ height: 200 }}
                    image={dis2}
                    alt="Tomato"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Tomato
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card
                className="animate_from_bottom"
                sx={{
                  width: 270,
                  marginTop: 3,
                  marginLeft: 3,
                  marginBottom: 3,
                  boxShadow: 5,
                }}
              >
                <CardActionArea component={Link} to="/subcategory">
                  <CardMedia
                    component="img"
                    sx={{ height: 200 }}
                    image={dis3}
                    alt="cucumber"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Cucumber
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card
                className="animate_from_bottom"
                sx={{
                  width: 270,
                  marginTop: 3,
                  marginLeft: 3,
                  marginRight: 3,
                  marginBottom: 3,
                  boxShadow: 5,
                }}
              >
                <CardActionArea component={Link} to="/subcategory">
                  <CardMedia
                    component="img"
                    sx={{ height: 200 }}
                    image={dis4}
                    alt="pomegranate"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Pomegranate
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
        </Box>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
