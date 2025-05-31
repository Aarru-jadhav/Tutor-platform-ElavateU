
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const people = [
  {
    id: 1,
    img: "https://fastly.picsum.photos/id/1059/101/101.jpg?hmac=To-UXm31HCMa0k2sDilKI4JQtBfmMuLshF63LshoLIY",
    name: "John Doe",
    text: "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, ",
  },
  {
    id: 2,
    img: "https://fastly.picsum.photos/id/958/102/102.jpg?hmac=g3cg8yMYjqb055zMaPg473wEgSkPaWL7KSHNwBQC1To",
    name: "Steve Smith",
    text: "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, ",
  },
  {
    id: 3,
    img: "https://fastly.picsum.photos/id/483/104/104.jpg?hmac=TuBlby9DB6CjERbaHYZ78MCvoB93lGJNFvGP1atnlA4",
    name: "Justine Bieber",
    text: "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, ",
  },
  {
    id: 4,
    img: "https://fastly.picsum.photos/id/881/103/103.jpg?hmac=k058tUSTwWqmtIh--J9G3Wyi_Gbgt3QloTw0TuqvFnQ",
    name: "Ariana Grande",
    text: "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, ",
  },
  {
    id: 5,
    img: "https://fastly.picsum.photos/id/476/101/101.jpg?hmac=tmSUwOxiYVQCONdKMGGFSvwlizQuW5K0EQ9zfssddBE",
    name: "Starboy",
    text: "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, ",
  },
];

const Review = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-white py-14 mb-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <h1 className="text-orange-600 font-bold">OUR TESTIMONIALS</h1>
          <p className="text-3xl font-bold">What Our Students Say About Us</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            {people.map((person) => (
              <div key={person.id} className="p-4">
                <div className="flex flex-col gap-4 p-6 bg-blue-50 rounded-xl shadow-lg h-full">
                  <div className="flex items-center gap-4">
                    <img src={person.img} alt={person.name} className="w-16 h-16 rounded-full" />
                    <div>
                      <p className="text-lg font-bold">{person.name}</p>
                      <p className="text-sm text-gray-500">Student</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{person.text}</p>
                  <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;

