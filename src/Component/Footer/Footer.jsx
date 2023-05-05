import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-16 py-20 px-10 bg-black text-white">
        <div className="grid md:grid-cols-5 md:text-left   text-white gap-8 text-center leading-8">
          <div>
            <h1 className="text-2xl font-bold ">Good Food</h1>
            <p className="leading-none my-4">
              Food are so much important as a human life it's save our life and
              increase our growth
            </p>
          </div>

          <div>
            <h3 className="font-bold">Company</h3>
            <p>About us</p>
            <p>Work</p>
            <p>Latest Food</p>
            <p>Career</p>
          </div>

          <div>
            <h3 className="font-bold">Good List</h3>
            <p>Burger</p>
            <p>Senguich</p>
            <p>Biriyani</p>
            <p>Milk Shake</p>
          </div>

          <div>
            <h3 className="font-bold">Support</h3>
            <p>Help desk</p>
            <p>Sales</p>
            <p>Become Partner</p>
            <p>Order Policy</p>
          </div>

          <div>
            <h3 className="font-bold">Contact</h3>
            <p>Road:10 America</p>
            <p>+1248776522</p>
          </div>
        </div>
        <div className="mt-8">
          <hr />
        </div>
        <div className="md:flex items-center justify-between mt-16 text-slate-400 text-xs md:text-left  text-center ">
          <div>
            <span>@blueKey.All right reserved</span>
          </div>

          <div>
            <span>Powerd by BlueKey</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
