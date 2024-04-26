
import React from "react";
import { InfiniteMovingCards } from "./ui/aceTestim";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "I had a wonderful experience staying here. The room was clean, comfortable, and had all the necessary amenities. Will definitely stay here again!",
      name: "Dron Kashyap",
    },
    {
      quote:
        "Great place to stay! The property is well-maintained and the owner is very friendly and helpful. Highly recommended!",
      name: "Ravishek Singh",
    },
    {
      quote: "Excellent service and facilities. The staff is very cooperative and the location is convenient. I would definitely recommend this property to anyone looking for a PG.",
      name: "Dheerendra Chaudhary",
    },
    {
      quote:
        "I had a great time staying at this PG. The rooms are spacious and well-furnished. The atmosphere is peaceful and perfect for studying. Would recommend!",
      name: "Nitin Chahar",

    },
    {
      quote:
        "Fantastic PG! The owner is very responsive and always available to help. The facilities are top-notch and the rent is reasonable. I am very satisfied with my stay here.",
      name: "Devansh Dubey",
 
    },
  ];

  return (
    <div  className=" rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
