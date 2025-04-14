import { Component } from "react";
import photo from "./assets/photo.png";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="h-screen flex items-center bg-[#001427]">
          <img
            src={photo}
            className="max-h-[700px] relative mx-auto rounded-lg overflow-hidden"
            alt=""
          />
          <section className="bg-[#12304f] text-[#001427] p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-[#4D6CFA]">Im Vincent!</h1>
            <p className="mt-4 text-lg text-[#f6f7f8]">
              Im a technical thinker who likes a challange and wants to
              strenghten his weakpoints.
            </p>
            <p className="mt-2 text-lg text-[#f6f7f8]">
              Im very curius about learning new things and viewing problems
              through other peoples eyes. I view dyslexia as a tool more than a
              problem because of the unique perspectives I have on certain
              topics. The best way to gain experience is by trying and i will
              try as many times as needed to succeed.
            </p>
          </section>
        </div>
      </>
    );
  }
}
