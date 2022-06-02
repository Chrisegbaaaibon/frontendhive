import Carousel from "react-material-ui-carousel";

export default function Testimonial(props: {
  comment: {
    name: string;
    comment: string;
    img: string;
  }[];
}) {
  return (
    <Carousel>
      {props.comment.map((item, i) => (
        <Item key={i} comment={item} />
      ))}
    </Carousel>
  );
}

function Item(props: {

    comment: {
        name: string;
        comment: string;
        img: string;
    }

}) {

    const { name, img, comment } = props.comment;
  return (
    // <Paper>
      <div className="py-3">
        <div className="">
          <div className="grid place-items-center">
            <img src={img} className="rounded-2xl w-[13%] object-cover"/>
          </div>
          <div className="mt-5 mb-3">
            {name}
          </div>
        </div>
        <div className="text-lg mx-12">
          {comment}
        </div>
      </div>
    // </Paper>
  );
}
