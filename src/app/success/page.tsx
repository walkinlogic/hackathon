"use client";

// import axios from "axios";
import React, { useState } from "react";

const Success = () => {
  return (
    <main className="">
      <div className="mx-auto mt-20 mb-10 max-w-6xl relative overflow-x-hidden w-full">
        <div className="container container-fluid">
          <div className="row mt-20 mb-10 d-flex justify-content-center">
            <div className="col-10 col-lg-5 ">
              <h1 className="mb-4">Success</h1>
              <p className="text-gray-950 h-fit max-w-sm">
                Thank you for your order from Khaadi. Once your package ships we will send an email with a link to track your order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Success;
