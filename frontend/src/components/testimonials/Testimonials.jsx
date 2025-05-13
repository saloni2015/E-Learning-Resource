import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Rohan Mehta",
      position: "Engineering Student",
      message:
        "The web development course really helped me understand the fundamentals. I was able to build my own project by the end of it!",
      image:
        "https://st.depositphotos.com/1011643/4430/i/950/depositphotos_44309759-stock-photo-young-indian-man-outdoors.jpg"
    },
    {
      id: 2,
      name: "Amilie ",
      position: "MBA Aspirant",
      message:
        "I found the marketing lessons very practical and up-to-date. The case studies made it easy to relate concepts to real life.",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 3,
      name: "Vikram Rao",
      position: "Data Analyst",
      message:
        "This platform gave me the confidence to switch careers. The data science module was clear, structured, and hands-on.",
      image:
        "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
      id: 4,
      name: "Priya Sharma",
      position: "UI/UX Designer",
      message:
        "As someone from a design background, I loved how intuitive the content was. It felt like a guided journey rather than a dry course.",
      image:
        "https://thumbs.dreamstime.com/b/young-indian-woman-beautiful-closeup-portrait-outdoors-39597439.jpg"
    }
  ];
  
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
