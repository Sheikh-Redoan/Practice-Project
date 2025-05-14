import React from "react";
import Container from "../Container/Container";

const testimonials = [
  {
    quote:
      "Softvence Agency and their team were so professional. From the first discussion all the way through to the end they were exceptional. Their communication and patience are first class and this was so important to me whilst building a website. The quality of their work is superb! They have the skills to be able to do pretty much anything you ask of them and so this makes this very valuable. I will be using them for all future websites and any other website design and development help. Thanks team Softvence :)",
    name: "Steve Zee. ",
    role: "Founder at iMU & RegS Company",
    avatar: "/src/assets/images/testimonials/steve_zee.png",
  },
  {
    quote:
      "Softvence Agency was amazing to work with. They went above and beyond with our project. They delivered the Webflow site just as our wireframe showed and he was able to work out any bugs or fixes we requested in the span of 3-4 weeks without hesitation. That tells you they actually care about customer satisfaction instead of just doing the bare minimum. I appreciate all your hard work on this, team Softvence! 5 out of 5 stars! I highly recommend Softvence Agency for any website design and development projects!",
    name: "colin hartlieb.",
    role: "Founder at colinwolfpack",
    avatar: "/src/assets/images/testimonials/colin_hartlieb.jpg",
  },
  
];

const TestimonialSection = () => {
  return (
    <section className="bg-[#18191B] text-white py-20 relative overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          {/* Badge */}
          <span className="inline-block border-[1px] border-[rgba(255, 255, 255, .3)] text-[#ccc] rounded-full px-5 py-1 text-sm uppercase tracking-widest mb-2">
            Testimonials
          </span>

          {/* Heading */}
          <h2 className="md:text-[60px] text-[40px] font-semibold mb-12 leading-10 md:leading-15">
            We value each and every client’s feedback which helps us to improve.
          </h2>

          {/* Quotation icon */}
          <div className="mb-6 w-[40px] h-[40px] mx-auto ">
            <img
              src="/src/assets/icons/shape_icon.png"
              alt="Image Not Found"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Quote */}
          <p className="md:text-[30px] text-[20px] text--[#ccc] leading-8 md:leading-12 mb-8">
            {testimonials[0].quote}
          </p>

          {/* Author */}
          <div className="mb-16">
            <h4 className="font-bold text-[20px] text-white">
              {testimonials[0].name}
            </h4>
            <p className="text-sm text-[#ccc]">{testimonials[0].role}</p>
          </div>

          {/* horizontal line with a downward V notch */}
          <div className="relative h-[1px] bg-gray-700 w-full">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#181818] rotate-45 border-l border-b border-gray-700 z-10" />
          </div>

          {/* Avatar Navigation */}
          <div className="flex justify-center gap-6 mt-10">
            <img
              src="/src/assets/images/testimonials/testimonial_1.jpg"
              className="w-[78px] h-[78px] rounded-full border-4 border-transparent transition"
              alt="User 1"
            />
            <img
              src="/src/assets/images/testimonials/testimonial_2.jpg"
              className="w-[98px] h-[98px] rounded-full border-4"
              alt="User 2"
            />
            <img
              src="/src/assets/images/testimonials/testimonial_3.jpg"
              className="w-[78px] h-[78px] rounded-full border-4 border-transparent transition"
              alt="User 3"
            />
          </div>
        </div>

        {/* Background curved lines */}
      <div className="absolute w-[700px] h-[700px] border border-gray-800 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />F
      </Container>
    </section>
  );
};

export default TestimonialSection;
