import { Link } from "react-router";
import openhiring from "./assets/openhiring.png";

function Portfolio() {
  return (
    <>
      <div className="bg-[#001427]">
        <h2 className="font-bold flex justify-center text-8xl p-5  text-[#f6f7f8]">
          Mijn Portfolio
        </h2>

        <section className="h-screen justify-evenly flex items-center p-5 pt-0 pb-20 ">
          {/* cocktail app */}
          <div className="font-mono max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 justify-around">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={
                  "https://demitris.com/cdn/shop/articles/image1_eb503a8a-f1e9-4bb0-ac55-fd0942ae5c95.png?v=1648496730"
                }
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#f6f7f8]">
                  Cocktail App
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-[#f6f7f8]">
                I had to make a fullstack application where I used react &
                tailwind for the front-end. And expressjs & mongoDB for the
                back-end. So i made an app where you could manage cocktails with
                a CRUD.
              </p>
              <div className="mt-10">
                <p className="mb-5 font-normal text-gray-700 dark:text-[#f6f7f8]">
                  <Link
                    className={
                      "bg-blue-500 hover:bg-blue-700 text-[#f6f7f8] font-bold py-2 px-4 rounded"
                    }
                    to={"https://github.com/VincentBenders/react-cocktails"}
                  >
                    Github repo front-end
                  </Link>
                </p>
                <p className=" font-normal text-gray-700 dark:text-[#f6f7f8]">
                  <Link
                    className={
                      "bg-blue-500 hover:bg-blue-700 text-[#f6f7f8] font-bold py-2 px-4 rounded"
                    }
                    to={"https://github.com/VincentBenders/restful-cocktail"}
                  >
                    Github repo back-end
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* laravel app */}
          <div className="font-mono max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 justify-around">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={
                  "https://upload.wikimedia.org/wikipedia/en/a/a9/Magic_The_Gathering_Commander_2015_logo.jpg"
                }
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#f6f7f8]">
                  MTG built your own commander
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-[#f6f7f8]">
                A fun laravel app for magic the gathering players to make their
                own commander. Its made with laravel and sqlite.
              </p>
              <div className="mt-10">
                <p className="mb-5 font-normal text-gray-700 dark:text-[#f6f7f8]">
                  <Link
                    className={
                      "bg-blue-500 hover:bg-blue-700 text-[#f6f7f8] font-bold py-2 px-4 rounded"
                    }
                    to={"https://github.com/VincentBenders/prg5"}
                  >
                    Github repo
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* TLE1 */}
          <div className="font-mono max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 justify-around">
            <a href="#">
              <img className="rounded-t-lg" src={openhiring} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#f6f7f8]">
                  Open Hiring
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-[#f6f7f8]">
                Its a group project made with laravel for people to apply for
                jobs anonymously. we were a team of 5 students
              </p>
              <div className="mt-10">
                <p className=" font-normal text-gray-700 dark:text-[#f6f7f8]">
                  <Link
                    className={
                      "bg-blue-500 hover:bg-blue-700 text-[#f6f7f8] font-bold py-2 px-4 rounded"
                    }
                    to={"https://github.com/SEVerhaak/TEAM-9-TLE1/tree/develop"}
                  >
                    Github repo
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* programmeren 7 */}
          <div className="font-mono max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 justify-around">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={
                  "https://www.rotterdamcentrum.nl/media/_1600x900_crop_center-center_90_none_ns/1967760/Citymap-afbeelding-Rotterdam.jpg?v=1714484019"
                }
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#f6f7f8]">
                  Hotspots
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-[#f6f7f8]">
                This is a react native app thats still under development. Its a
                project for school to make a app for showing cool hangout spots
                in Rotterdam.
              </p>
              <div className="mt-10">
                <p className="mb-5 font-normal text-gray-700 dark:text-[#f6f7f8]">
                  <Link
                    className={
                      "bg-blue-500 hover:bg-blue-700 text-[#f6f7f8] font-bold py-2 px-4 rounded"
                    }
                    to={"https://github.com/VincentBenders/hotspots"}
                  >
                    Github repo
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Portfolio;
