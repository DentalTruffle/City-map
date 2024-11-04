
import { Carousel } from "@material-tailwind/react";
 
export default function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      <img
        src="/images/img1.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/images/img2.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/images/img3.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
       <img
        src="/images/img4.jpg"
        alt="image 4"
        className="h-full w-full object-cover"
      />
       <img
        src="/images/img5.jpg"
        alt="image 5"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
