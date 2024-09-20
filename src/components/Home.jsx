import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
          Warung Nedha
        </h1>
        <p className=" text-backgroundColor">
        Nedha adalah warung makanan tradisional yang menghadirkan cita rasa autentik dari berbagai daerah di Indonesia. 
        Dengan bahan-bahan segar dan berkualitas, Nedha menyajikan hidangan lezat yang menggugah selera, mulai dari nasi kuning, rendang, 
        hingga aneka lauk tradisional yang kaya rempah.
        </p>
        <div className=" lg:pl-44">
          <Button title="Temui koki kami" />
        </div>
      </div>
    </div>
  );
};

export default Home;
