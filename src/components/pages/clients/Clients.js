import React from "react";
import Client from "./Slider";

export default function Clients() {
  return (
    <section
      id="clients"
      style={{
        backgroundImage: `url("images/clients.jpg")`,
      }}
    >
      <div className="text-center clients-main my-slider">
        <Client />
      </div>
    </section>
  );
}
