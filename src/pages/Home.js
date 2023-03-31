import Carousel from "react-bootstrap/Carousel";
function Home() {
  return (
    <div>
      <h2 className="heading-secondary">Home</h2>

      <Carousel>
        <Carousel.Item>
          <img
            className="project-carousel "
            src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRmb2xpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="heading-primary">
              Hey, I'm <br></br>Shubha Agrawal
            </h1>
            <p>Front End Developer</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
