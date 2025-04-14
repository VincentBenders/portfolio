import { Component } from "react";
import photo from "./assets/photo.png";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="font-mono text-[#f6f7f8] h-screen flex items-center bg-[#001427]">
          <img
            src={photo}
            className="max-h-[700px] relative mx-auto rounded-lg overflow-hidden"
            alt=""
          />
          <section className="bg-[#12304f]  p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-[#4D6CFA]">Im Vincent!</h1>
            <p className="mt-4 text-lg ">
              Im a technical thinker who likes a challange and wants to
              strenghten his weakpoints.
            </p>
            <p className="mt-2 text-lg ">
              Im very curius about learning new things and viewing problems
              through other peoples eyes. I view dyslexia as a tool more than a
              problem because of the unique perspectives I have on certain
              topics. The best way to gain experience is by trying and i will
              try as many times as needed to succeed.
            </p>
          </section>
          <section className="bg-[#12304f] w-96 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h2 className="text-3xl">Skills</h2>
            <div>
              <p>HTML</p>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500 w-[90%]"></div>
            </div>
            <div>
              <p>CSS/SASS</p>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500 w-[90%]"></div>
            </div>
            <div>
              <p>Javascript</p>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500 w-[85%]"></div>
            </div>
            <div>
              <p>React</p>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500 w-[70%]"></div>
            </div>
            <div>
              <p>PHP</p>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500 w-[80%]"></div>
            </div>
            <div>
              <p>Laravel</p>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500 w-[70%]"></div>
            </div>
            <div>
              <p>C#</p>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500 w-[40%]"></div>
            </div>
            <div>
              <p>Unity</p>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500 w-[50%]"></div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
