import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./CSS/AboutUs.css";

export default function AboutScreen() {
  return (
    <>
      <Card
        className="bg-white text-dark"
        style={{
          position: "relative",
          width: "90%",
          height: "40%",
          margin: "0 auto",
          border: "none",
        }}
      >
        <Card.Img
          className="pageBanner"
          src="./images/aboutUs.jpg"
          alt="Card image"
        />
        <Card.Title className="pageTitle">About Us</Card.Title>
      </Card>

      <div className="review" style={{ margin: "20px auto", width: "70%" }}>
        <p className="aboutPara">
          {" "}
          HungryHub is an exceptional casual dining restaurant that caters to
          the discerning taste buds of its guests. It boasts of a cozy and
          inviting atmosphere, furnished with comfortable seating arrangements,
          and a decor that radiates warmth and elegance. Upon entering the
          restaurant, one is greeted by the aroma of fresh, flavorful dishes
          that whet the appetite and signal a culinary experience par
          excellence.
        </p>
        <p className="aboutPara">
          {" "}
          The menu at HungryHub is an eclectic blend of classic and
          contemporary cuisine, curated by a team of expert chefs who take pride
          in using only the freshest, high-quality ingredients. The restaurant
          offers a wide range of dishes, from sumptuous soups, vibrant salads,
          and delectable appetizers to savory entrees and mouth-watering
          desserts. The dishes are cooked to perfection and served with finesse,
          ensuring that every bite is a delightful explosion of flavors.
        </p>
        <p className="aboutPara">
          {" "}
          The beverage menu at HungryHub is equally impressive, featuring a
          carefully curated selection of beer, wine, and cocktails that are
          perfectly paired with the food. The restaurant's friendly and
          attentive staff is always on hand to assist with recommendations and
          ensure that every guest's dining experience is one to remember.
        </p>
        <p className="aboutPara">
          {" "}
          Whether you're looking for a quick lunch or a leisurely dinner, HungryHub is the ultimate destination for a memorable and satisfying meal.
        </p>
        <br></br>
      </div>

      <div
        className="team"
        style={{ margin: "20px auto", width: "80%", alignContent: "center" }}
      >
        <p className="teamHeading"> Team </p>

 <CardGroup style={{margin:"20px 30px" }}>
  
  
  <Card>
  <Card.Img variant="top" className= "teamImg" src="./images/ankit.jpeg"  />
    <Card.Body className='teamBody'>
    <Card.Title className='teamName'>Ankit Lall</Card.Title>
    </Card.Body>
  </Card>
  <Card>
  <Card.Img variant="top" className= "teamImg" src="./images/shivani.jpg"   />
    <Card.Body className='teamBody'>
    <Card.Title className='teamName'> Shivani Datar</Card.Title>
    </Card.Body>
  </Card>
  <Card>
            <Card.Img
              variant="top"
              className="teamImg"
              src="./images/ashi.jpg"
            />
            <Card.Body className="teamBody">
              <Card.Title className="teamName">Ashi Tyagi</Card.Title>
            </Card.Body>
          </Card>
  <Card>
  <Card.Img variant="top" className= "teamImg" src="./images/Esha.jpg"   />
    <Card.Body className='teamBody'>
    <Card.Title className='teamName'  >Esha Patel</Card.Title>
    </Card.Body>
  </Card>
</CardGroup>

 </div>

   </>
  )
}
