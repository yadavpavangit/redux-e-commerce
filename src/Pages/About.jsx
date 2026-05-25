// About.jsx

import React from "react";
import { FaLeaf, FaAward, FaPencilRuler } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const values = [
  {
    icon: <FaLeaf />,
    title: "Sustainability",
    desc: "We use responsibly sourced materials to ensure our furniture supports a greener planet.",
  },
  {
    icon: <FaAward />,
    title: "Quality",
    desc: "Every piece undergoes rigorous testing to guarantee durability and comfort.",
  },
  {
    icon: <FaPencilRuler />,
    title: "Design",
    desc: "Our designs blend modern aesthetics with functional elegance for every home.",
  },
];

const team = [
  {
    name: "Anna Smith",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
  },
  {
    name: "Michael Brown",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Head",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
  },
  {
    name: "David Lee",
    role: "Operations Lead",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
  },
];

function About() {
  const navigate = useNavigate();
  return (
    <section className="bg-white">
      <button
        onClick={() => navigate("/")}
        className="mb-8 text-blue-600 hover:underline flex items-center gap-2"
      >
        ← Back to home
      </button>
      {/* HERO */}
      <div className="section-container text-center">
        <h1 className="section-title">About Our Store</h1>

        <p className="section-desc max-w-2xl mx-auto">
          Discover the story behind Furnish — where design meets comfort. We
          craft modern furniture that elevates your home experience.
        </p>
      </div>

      {/* MISSION */}
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <img
              src="./images/about-img.jpg"
              alt="about"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="sub-title">Our Mission</h2>

            <p className="content-text">
              At Furnish, our mission is to bring timeless style and comfort to
              every home. We combine craftsmanship, innovation, and
              sustainability to create furniture that lasts for generations.
            </p>

            <p className="content-text mt-5">
              From sourcing eco-friendly materials to perfecting every curve and
              detail, we are dedicated to creating pieces that bring harmony and
              functionality to your living space.
            </p>
          </div>
        </div>
      </div>

      {/* VALUES */}
      <div className="bg-neutral-100 py-20">
        <div className="section-container">
          <h2 className="section-title mb-14 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((item, index) => (
              <div key={index} className="card-style text-center">
                <div className="mx-auto mb-5 text-3xl text-neutral-800">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-neutral-900">
                  {item.title}
                </h3>

                <p className="content-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TEAM */}
      <div className="section-container">
        <h2 className="section-title mb-14 text-center">Meet Our Team</h2>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto mb-5 h-32 w-32 rounded-full object-cover"
              />

              <h3 className="text-xl font-semibold text-neutral-900">
                {member.name}
              </h3>

              <p className="mt-1 text-sm text-neutral-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
