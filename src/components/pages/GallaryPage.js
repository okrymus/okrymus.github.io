import React from "react";
import ImageGallery from "react-image-gallery";

// import { Card, Image } from "semantic-ui-react";

const files = [
  "DSC_2805.jpg",
  "DSC_2808.jpg",
  "DSC_2815.jpg",
  "DSC_2821.jpg",
  "DSC_2822.jpg",
  "DSC_2827.jpg",
  "DSC_2914.jpg",
  "DSC_3067.jpg",
  "DSC_3071.jpg",
  "DSC_3090.jpg",
  "DSC_3098.jpg",
  "DSC_3101.jpg",
  "DSC_3256.jpg",
  "DSC_3330.jpg",
  "DSC_3413.jpg",
  "DSC_3430.jpg",
  "DSC_3440.jpg",
  "DSC_3451.jpg",
  "DSC_3487.jpg",
  "DSC_3781.jpg",
  "DSC_3800.jpg",
  "DSC_3804.jpg",
  "DSC_3885.jpg",
  "DSC_3904.jpg",
  "DSC_3928.jpg",
  "DSC_3952.jpg",
  "DSC_3957.jpg",
  "DSC_4009.jpg",
  "IMG_0655(1).jpg",
  "IMG_0687(1).jpg",
  "IMG_4089.jpg",
  "IMG_4108.jpg",
  "IMG_4346.jpg",
  "IMG_4399.jpg",
  "IMG_4427.jpg",
  "IMG_4431.jpg",
  "IMG_4473.jpg",
  "IMG_4819.jpg",
  "IMG_5507.jpg",
  "IMG_5655.jpg",
  "IMG_5663.jpg",
  "IMG_5677.jpg",
  "IMG_5691.jpg",
  "IMG_5811.jpg",
  "IMG_6353.jpg",
  "IMG_6373.jpg",
  "IMG_6374.jpg",
  "IMG_6375.jpg",
  "IMG_6384.jpg",
  "IMG_6393.jpg",
  "IMG_6411.jpg",
  "IMG_6440 - 2.jpg",
  "IMG_6440.jpg",
  "IMG_6451.jpg",
  "IMG_6557.jpg",
  "IMG_6621.jpg",
  "IMG_6655.jpg",
  "IMG_7047.jpg",
  "IMG_7065.jpg",
  "IMG_7067.jpg",
  "IMG_7077.jpg"
];

function importAll(r) {
  const images = [];
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../img/gallary", false, /\.(png|jpe?g|svg)$/)
);

// const CardExampleColored = () => (
//   //   <div>
//   //     {files.map(file => (
//   //       <Image src={images[file]} />
//   //     ))}
//   //   </div>
//   <Card.Group itemsPerRow={4}>
//     {files.map(file => (
//       <Card color="red" image={images[file]} />
//     ))}

//     {/* <Card color="orange" image={src} />
//     <Card color="yellow" image={src} />
//     <Card color="olive" image={src} />
//     <Card color="green" image={src} />
//     <Card color="teal" image={src} />
//     <Card color="blue" image={src} />
//     <Card color="violet" image={src} />
//     <Card color="purple" image={src} />
//     <Card color="pink" image={src} />
//     <Card color="brown" image={src} /> */}
//     {/* <Card color="grey" image={src} /> */}
//   </Card.Group>
// );
// //   images.map(image => <Image src={images["DSC_2808.jpg"]} />);
// //   <Card.Group itemsPerRow={4}>
// //     <Card color="red" image={images["DSC_2808.jpg"]} />
// //     <Card color="orange" image={src} />
// //     <Card color="yellow" image={src} />
// //     <Card color="olive" image={src} />
// //     <Card color="green" image={src} />
// //     <Card color="teal" image={src} />
// //     <Card color="blue" image={src} />
// //     <Card color="violet" image={src} />
// //     <Card color="purple" image={src} />
// //     <Card color="pink" image={src} />
// //     <Card color="brown" image={src} />
// //     <Card color="grey" image={src} />
// //   </Card.Group>

// export default CardExampleColored;

// export default class MyComponent extends React.Component {
//   render() {
//     const images = [
//       {
//         original: require("../img/gallary/DSC_2805.jpg"),
//         thumbnail: "http://lorempixel.com/250/150/nature/1/"
//       },
//       {
//         original: "http://lorempixel.com/1000/600/nature/2/",
//         thumbnail: "http://lorempixel.com/250/150/nature/2/"
//       },
//       {
//         original: "http://lorempixel.com/1000/600/nature/3/",
//         thumbnail: "http://lorempixel.com/250/150/nature/3/"
//       }
//     ];

//     return <ImageGallery items={images} />;
//   }
// }

// const images2 = [
//   {
//     original: images["DSC_2805.jpg"],
//     thumbnail: images["DSC_2805.jpg"]
//   },
//   {
//     original: "http://lorempixel.com/1000/600/nature/2/",
//     thumbnail: "http://lorempixel.com/250/150/nature/2/"
//   },
//   {
//     original: "http://lorempixel.com/1000/600/nature/3/",
//     thumbnail: "http://lorempixel.com/250/150/nature/3/"
//   }
// ];

function importAll2() {
  const dd = [];
  files.map((item, index) => {
    dd[index] = {
      original: images[item],
      thumbnail: images[item]
    };
  });
  return dd;
}

const itemsl = importAll2();

const GallaryPage = () => <ImageGallery items={itemsl} />;

export default GallaryPage;
