import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "300px",
  width: "100%",
  objectFit: "cover",
};

const Slider: React.FC = () => {
  return (
    <Carousel autoplay autoplaySpeed={5000} style={{marginBottom: '20px'}}>
      <div>
       <img style={contentStyle} src="/assets/photoGalleryComponent/seaView9.jpg"/>
      </div>
      <div>
      <img style={contentStyle} src="/assets/photoGalleryComponent/seaView3.jpg"/>
      </div>
      <div>
      <img style={contentStyle} src="/assets/photoGalleryComponent/seaView10.jpg"/>
      </div>
      <div>
          <img style={contentStyle} src="/assets/photoGalleryComponent/seaView13.jpg"/>
      </div>
    </Carousel>
  );
};

export default Slider;
