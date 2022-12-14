import stylee from "~/styles/style.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "~/styles/Mona-Sans.woff2";

export default function Index() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const A = ["T", "w", "o", " ", "f", "i", "l", "e", "s"];
  const B = [
    "T",
    "h",
    "o",
    "u",
    "s",
    "a",
    "n",
    "d",
    "s",
    " ",
    "o",
    "f",
    " ",
    "v",
    "a",
    "r",
    "i",
    "a",
    "t",
    "i",
    "o",
    "n",
    "s",
    ".",
  ];
  const C = [
    "I",
    "n",
    "f",
    "i",
    "n",
    "i",
    "t",
    "e",
    " ",
    "p",
    "o",
    "s",
    "s",
    "i",
    "b",
    "i",
    "l",
    "i",
    "t",
    "i",
    "e",
    "s",
    ".",
  ];
  const D = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "!",
    "?",
    "#",
    "%",
    "&",
    "~",
    "(",
    ")",
    "[",
    "]",
    "/",
    "=",
    "_",
    "{",
    "}",
    "'",
    "@",
    "-",
    ">",
    "<",
    ".",
    ";"
  ];
  const [bold, setBold] = useState(100);
  const [space, setSpace] = useState(0);
  const rangeslide = (e) => {
    console.log(e.target.value);
    setBold(e.target.value);
  };
  const rangeslide2 = (e) => {
    console.log(e.target.value);
    setSpace(e.target.value);
  };
  const styleObj = {
    fontWeight: bold,
    font: `${space}px`,
  };
  return (
    <div className="project">
      <div className="p1">
        <p id="up">TWO VARIABLE, OPEN SOURCE FONTS from GITHUB</p>
        <div className="textup">
          <span class="Mona">MONA</span>
          <span className="d-block position-relative z-2 lh-condensed-ultra text-extrabold">
            <span className="and">&amp;</span>
          </span>
          <span className="hubot">HUBOT</span>
          <span className="sans">SANS</span>
        </div>
        <div class="p1img">
          <img
            className="img1"
            src="https://github.githubassets.com/images/modules/site/mona-sans/mona-hubot.webp"
            alt="Hubot and Mona, holding a font file"
          />
          <img
            className="img2"
            src="https://github.githubassets.com/images/modules/site/mona-sans/mona-sans-icon.png"
            alt=""
          />
          <div class="position-absolute mx-auto bottom-n3 left-0 right-0 z-3"></div>
          <div class="position-absolute mx-auto top-n12 left-0 right-0 z-2"></div>
        </div>
      </div>
      <div className="p2">
        <div className="onhoverbold">
          {A.map((item) => {
            return <span>{item}</span>;
          })}
          <br />
          {B.map((item) => {
            return <span>{item}</span>;
          })}
          <br />
          {C.map((item) => {
            return <span>{item}</span>;
          })}
        </div>
        <div className="p2t">
          <hr />
          <div className="p2h">
            <span>MONA SANS</span>
            <img
              src="https://github.githubassets.com/images/modules/site/mona-sans/octoface.svg"
              alt="Mona icon"
              loading="lazy"
              decoding="async"
              className="mlogo"
              width="40"
              height="40"
            ></img>
          </div>
          <hr />
          <div className="p2m">
            <p id="para">
              A strong and versatile typeface, designed with Degarism and
              inspired by industrial-era grotesques. Mona Sans works well across
              product, web, and print.
            </p>
            <div className="imgdiv">
              <video
                loop="loop"
                muted="muted"
                height="100%"
                width="70% "
                autoPlay
                className="cutevideo"
                src="https://github.githubassets.com/images/modules/site/discussions/animations/hearts.webm"
              ></video>
            </div>
          </div>
          <div className="btns">
            <button>Download font</button>
            <button>View on Github</button>
          </div>
          <div className="alpha">
            {D.map((item) => {
              return <span>{item}</span>;
            })}
          </div>

          <img
            src="https://github.githubassets.com/images/modules/site/mona-sans/mona-sketches.webp"
            className="sketch1"
            alt="A series of sketches of Mona from different angles"
            loading="lazy"
            decoding="async"
          ></img>

          <hr />
          <div className="hubotsans">
            <video
              className="video2"
              loop
              autoPlay
              src="https://github.githubassets.com/images/modules/site/mona-sans/hubot.webm"
            ></video>
            <div className="hstop">
              <div>
                <span>HUBOT SANS</span>
                <img
                  src="https://github.githubassets.com/images/modules/site/mona-sans/octoface.svg"
                  alt="Mona icon"
                  loading="lazy"
                  decoding="async"
                  class="mlogo2"
                  width="40"
                  height="40"
                ></img>
              </div>
              <hr />
              <p>
                Mona’s robotic sidekick. More geometric accents lend a technical
                and idiosyncratic feel—perfect for headers and pull‑quotes.
              </p>
              <div className="btns">
                <button className="btn1">Download font</button>
                <button>View on Github</button>
              </div>
            </div>
          </div>
          <div className="alpha">
            {D.map((item) => {
              return <span>{item}</span>;
            })}
          </div>
          <img
            src="https://github.githubassets.com/images/modules/site/mona-sans/hubot-sketches.webp"
            className="sketch1"
            alt="A series of sketches of Mona from different angles"
            loading="lazy"
            decoding="async"
          ></img>
        </div>
      </div>
      <div className="p4">
        <div className="p4top">
          <div className="p4top1">
            Find the right width, weight, & slant that fits you.
          </div>

          <div className="p4top2">
            <video
              width="360"
              height="360"
              loop
              autoPlay
              src="https://github.githubassets.com/images/modules/site/discussions/animations/mind-blown.webm"
            ></video>
            <p>
              Variable fonts give you granular control of how fonts are
              displayed by packaging a set of variable axes into one single font
              file. <br /> <br /> Mona Sans and Hubot Sans come with three
              variable axes each: weight (ultra thin to extra heavy), width
              (condensed to expanded), and slant (regular to italics). By
              combining these axes freely, you have access to thousands of
              different looks, and endless of possibilities.
            </p>
          </div>
        </div>

        <div className="p4imges">
          <img
            class="poster1"
            src="https://github.githubassets.com/images/modules/site/mona-sans/poster-1.jpg"
            alt="Poster 1"
            loading="lazy"
            width="100%"
            height="100%"
          />
          <img
            class="poster2"
            src="https://github.githubassets.com/images/modules/site/mona-sans/poster-2.jpg"
            alt="Poster 2"
            loading="lazy"
            width="100%"
            height="100%"
          />
          <img
            class="poster3"
            src="https://github.githubassets.com/images/modules/site/mona-sans/poster-3.jpg"
            alt="Poster 3"
            loading="lazy"
            width="100%"
            height="100%"
          />
          <img
            class="poster4"
            src="https://github.githubassets.com/images/modules/site/mona-sans/poster-4.jpg"
            alt="Poster 4"
            loading="lazy"
            width="100%"
            height="100%"
          />
          <img
            class="poster5"
            src="https://github.githubassets.com/images/modules/site/mona-sans/poster-5.jpg"
            alt="Poster 5"
            loading="lazy"
            width="100%"
            height="100%"
          />
          <img
            class="poster6"
            src="https://github.githubassets.com/images/modules/site/mona-sans/poster-6.webp"
            alt="Poster 6"
            loading="lazy"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="p5">
        <div className="animatebox">
          <br />3 Variables
        </div>

        <div className="animatebox" data-aos="zoom-in">
          granular control
        </div>
        <div className="animatebox" data-aos="zoom-in">
          unlimited freedom
        </div>
        <div className="animatebox" data-aos="zoom-in">
          Fast{" "}
        </div>
        <div className="animatebox" data-aos="zoom-in">
          expressive
        </div>
        <div className="animatebox" data-aos="zoom-in">
          and flexible
        </div>
        <div className="p5last">
          Learn about how to use variable fonts effectively
        </div>
        <img
          src="https://github.githubassets.com/images/modules/site/mona-sans/mona-ears.png"
          class="p5img"
          alt="Mona ears"
          loading="lazy"
          decoding="async"
          width="696"
          height="211"
        />
      </div>
      <div className="p6">
        <div className="p6top">
          <div>
            <img
              src="https://github.githubassets.com/images/modules/site/mona-sans/file.png"
              alt=""
              height="228"
              width="191"
            />
          </div>

          <div>
            <p className="open">Open-source</p>
            <p className="free">and free to use</p>
            <p className="license">
              Licensed under OFL (basically, you can use it on your sites and in{" "}
              <br /> your projects—read the full license){" "}
            </p>
          </div>
          <div className="svgdiv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="svg"
              height="800"
              viewBox="0 0 2340 900"
              width="100%"
              class="position-absolute mona-contribution-graph events-none z-2"
            >
              <g fill="#2da44e">
                <path d="m1190 304h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path d="m1190 244h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path
                  d="m1190 364h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path d="m1250 364h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path
                  d="m1130 304h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".7"
                ></path>
                <path d="m1310 304h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path d="m1310 244h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path
                  d="m1070 364h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".3"
                ></path>
                <path
                  d="m1370 364h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".3"
                ></path>
                <path
                  d="m1010 244h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".4"
                ></path>
                <path
                  d="m950 244h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".3"
                ></path>
                <path
                  d="m1430 244h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".3"
                ></path>
                <path
                  d="m1490 244h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".6"
                ></path>
                <path
                  d="m830 364h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m830 304h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".3"
                ></path>
                <path d="m830 244h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path d="m1550 244h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path
                  d="m1550 364h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".3"
                ></path>
                <path d="m770 364h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path d="m1610 184h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path d="m1610 244h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path d="m1610 304h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path d="m1610 364h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path d="m1670 64h-40c-3.31 0-6 2.6863-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.3137-2.69-6-6-6z"></path>
                <path
                  d="m1670 244h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".3"
                ></path>
                <path d="m1670 304h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path d="m1670 364h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path
                  d="m1670 124h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".3"
                ></path>
                <path d="m710 604h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path d="m710 364h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path
                  d="m710 124h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".2"
                ></path>
                <path
                  d="m710 244h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path d="m710 304h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path d="m710 184h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path d="m650 604h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path d="m650 424h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path
                  d="m650 484h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path d="m650 244h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path d="m650 184h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path d="m650 304h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path d="m1730 484h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path d="m1730 604h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path d="m1730 424h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path d="m1730 244h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path
                  d="m1730 124h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".8"
                ></path>
                <path d="m1730 184h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path
                  d="m590 124h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".6"
                ></path>
                <path
                  d="m590 424h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m590 544h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".7"
                ></path>
                <path
                  d="m590 364h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path d="m590 484h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path d="m590 244h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path d="m1790 724h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path
                  d="m1790 784h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".3"
                ></path>
                <path d="m1790 664h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path d="m1790 364h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path d="m1790 424h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path
                  d="m1790 484h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m1790 64h-40c-3.31 0-6 2.6863-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.3137-2.69-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m1790 124h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".4"
                ></path>
                <path d="m1790 184h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path
                  d="m1850 424h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".3"
                ></path>
                <path
                  d="m1850 724h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m1850 664h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path d="m1850 784h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path
                  d="m1850 604h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".7"
                ></path>
                <path
                  d="m1850 544h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".2"
                ></path>
                <path d="m1850 124h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path d="m1850 4h-40c-3.31 0-6 2.68629-6 6v40c0 3.3137 2.69 6 6 6h40c3.31 0 6-2.6863 6-6v-40c0-3.31371-2.69-6-6-6z"></path>
                <path
                  d="m1850 64h-40c-3.31 0-6 2.6863-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.3137-2.69-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path d="m1850 304h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path
                  d="m530 484h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m530 724h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".3"
                ></path>
                <path d="m530 784h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path
                  d="m530 604h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path d="m530 664h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path
                  d="m530 244h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m530 304h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path d="m530 184h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path
                  d="m530 124h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".2"
                ></path>
                <path d="m530 64h-40c-3.314 0-6 2.6863-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.3137-2.686-6-6-6z"></path>
                <path
                  d="m530 4h-40c-3.314 0-6 2.68629-6 6v40c0 3.3137 2.686 6 6 6h40c3.314 0 6-2.6863 6-6v-40c0-3.31371-2.686-6-6-6z"
                  fill-opacity=".3"
                ></path>
                <path
                  d="m1910 844h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path d="m1910 244h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path d="m1910 124h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path
                  d="m1910 64h-40c-3.31 0-6 2.6863-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.3137-2.69-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m1910 184h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path d="m1910 304h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path d="m1910 484h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path d="m1910 544h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path
                  d="m1910 604h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path d="m1910 664h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path
                  d="m1910 724h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".3"
                ></path>
                <path
                  d="m470 304h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m470 424h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m470 364h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".8"
                ></path>
                <path d="m470 724h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path
                  d="m470 784h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".3"
                ></path>
                <path d="m470 844h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path
                  d="m470 604h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path d="m470 664h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path d="m470 184h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"></path>
                <path
                  d="m470 124h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".2"
                ></path>
                <path d="m470 64h-40c-3.314 0-6 2.6863-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.3137-2.686-6-6-6z"></path>
                <path
                  d="m1970 4h-40c-3.31 0-6 2.68629-6 6v40c0 3.3137 2.69 6 6 6h40c3.31 0 6-2.6863 6-6v-40c0-3.31371-2.69-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path d="m1930 656h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path d="m1930 776h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path
                  d="m1930 836h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m1930 716h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"
                  fill-opacity=".5"
                ></path>
                <path d="m1930 596h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path d="m1930 416h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path d="m1930 356h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path
                  d="m1930 296h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"
                  fill-opacity=".5"
                ></path>
                <path d="m1930 236h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path
                  d="m1970 124h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".3"
                ></path>
                <path
                  d="m370 356h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m370 116h40c3.314 0 6-2.686 6-6v-40c0-3.3137-2.686-6-6-6h-40c-3.314 0-6 2.6863-6 6v40c0 3.314 2.686 6 6 6z"
                  fill-opacity=".3"
                ></path>
                <path d="m370 56h40c3.314 0 6-2.6863 6-6v-40c0-3.31371-2.686-6-6-6h-40c-3.314 0-6 2.6863-6 6v40c0 3.3137 2.686 6 6 6z"></path>
                <path
                  d="m370 236h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"
                  fill-opacity=".5"
                ></path>
                <path d="m370 176h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"></path>
                <path
                  d="m370 536h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m370 476h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m370 656h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"
                  fill-opacity=".2"
                ></path>
                <path d="m370 596h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"></path>
                <path d="m370 716h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"></path>
                <path
                  d="m370 776h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"
                  fill-opacity=".3"
                ></path>
                <path
                  d="m1990 536h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"
                  fill-opacity=".3"
                ></path>
                <path
                  d="m2030 124h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m1990 236h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"
                  fill-opacity=".5"
                ></path>
                <path d="m2030 64h-40c-3.31 0-6 2.6863-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.3137-2.69-6-6-6z"></path>
                <path
                  d="m1990 296h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"
                  fill-opacity=".7"
                ></path>
                <path
                  d="m1990 356h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"
                  fill-opacity=".2"
                ></path>
                <path d="m1990 776h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path d="m1990 896h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path
                  d="m1990 836h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"
                  fill-opacity=".5"
                ></path>
                <path d="m1990 656h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path
                  d="m310 716h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"
                  fill-opacity=".6"
                ></path>
                <path d="m310 596h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"></path>
                <path
                  d="m310 416h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m310 356h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"
                  fill-opacity=".5"
                ></path>
                <path d="m310 296h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"></path>
                <path
                  d="m350 184h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6z"
                  fill-opacity=".7"
                ></path>
                <path d="m2050 236h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path
                  d="m2090 124h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"
                  fill-opacity=".3"
                ></path>
                <path d="m2050 296h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path d="m2050 536h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path d="m2050 476h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path
                  d="m2050 416h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m2050 836h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"
                  fill-opacity=".5"
                ></path>
                <path
                  d="m2050 776h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"
                  fill-opacity=".4"
                ></path>
                <path d="m2050 716h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path d="m250 176h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"></path>
                <path d="m250 356h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"></path>
                <path
                  d="m250 296h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"
                  fill-opacity=".5"
                ></path>
                <path d="m250 596h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"></path>
                <path d="m250 656h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"></path>
                <path d="m250 536h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"></path>
                <path d="m2110 296h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path
                  d="m2110 236h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"
                  fill-opacity=".5"
                ></path>
                <path d="m2150 124h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6z"></path>
                <path d="m2110 356h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path d="m2110 476h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path
                  d="m2110 596h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"
                  fill-opacity=".8"
                ></path>
                <path d="m2110 536h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path d="m190 236h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"></path>
                <path
                  d="m190 356h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"
                  fill-opacity=".3"
                ></path>
                <path d="m190 416h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"></path>
                <path
                  d="m190 536h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"
                  fill-opacity=".5"
                ></path>
                <path d="m190 476h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"></path>
                <path
                  d="m190 656h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"
                  fill-opacity=".2"
                ></path>
                <path d="m190 596h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"></path>
                <path d="m2170 236h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path d="m2170 536h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path d="m2170 476h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path
                  d="m2170 296h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"
                  fill-opacity=".7"
                ></path>
                <path d="m2170 416h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path
                  d="m2170 356h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"
                  fill-opacity=".3"
                ></path>
                <path d="m130 416h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.314 0-6 2.686-6 6v40c0 3.314 2.686 6 6 6z"></path>
                <path d="m2230 415h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path
                  d="m2230 296h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"
                  fill-opacity=".5"
                ></path>
                <path d="m70 416h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.3137 0-6 2.686-6 6v40c0 3.314 2.6863 6 6 6z"></path>
                <path d="m70 476h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.3137 0-6 2.686-6 6v40c0 3.314 2.6863 6 6 6z"></path>
                <path d="m70 536h40c3.314 0 6-2.686 6-6v-40c0-3.314-2.686-6-6-6h-40c-3.3137 0-6 2.686-6 6v40c0 3.314 2.6863 6 6 6z"></path>
                <path
                  d="m2290 355h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"
                  fill-opacity=".2"
                ></path>
                <path d="m2290 415h40c3.31 0 6-2.686 6-6v-40c0-3.314-2.69-6-6-6h-40c-3.31 0-6 2.686-6 6v40c0 3.314 2.69 6 6 6z"></path>
                <path
                  d="m10 476h40c3.3137 0 6-2.686 6-6v-40c0-3.314-2.6863-6-6-6h-40c-3.31371 0-6 2.686-6 6v40c0 3.314 2.68629 6 6 6z"
                  fill-opacity=".3"
                ></path>
              </g>
            </svg>
          </div>
          <div className="last">
          Every contribution counts. Help us make Mona Sans and Hubot Sans better by creating a pull request on GitHub.
          </div>
          <div className="navfoot">

          </div>
        </div>
      </div>
      <footer className="foot">
        <div class="color-bg-subtle">
          <div class="ft">
            <ul class="lastbox">
              <li class="mr-3">© 2022 GitHub, Inc.</li>

              <li class="mr-3">
                <a
                  href="https://docs.github.com/en/github/site-policy/github-terms-of-service"
                  data-analytics-event='{"category":"Footer","action":"go to terms","label":"text:terms"}'
                  class="Link--secondary"
                >
                  Terms
                </a>
              </li>

              <li class="mr-3">
                <a
                  href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
                  data-analytics-event='{"category":"Footer","action":"go to privacy","label":"text:privacy"}'
                  class="Link--secondary"
                >
                  Privacy
                </a>
                (
                <a
                  href="https://github.com/github/site-policy/pull/582"
                  class="Link--secondary"
                >
                  Updated 08/2022
                </a>
                )
              </li>

              <li class="mr-3">
                <a
                  class="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to site map","label":"text:site map"}'
                  href="/site-map"
                >
                  Site Map
                </a>
              </li>

              <li>
                <a
                  class="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to Git Guides","label":"text:What is Git?"}'
                  href="/git-guides"
                >
                  What is Git?
                </a>
              </li>
            </ul>
            <ul class="icons">
              <li class="mr-3">
                <a
                  href="https://twitter.com/github"
                  data-analytics-event='{"category":"Footer","action":"go to Twitter","label":"text:twitter"}'
                  class="color-fg-subtle"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/twitter.svg"
                    class="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="Twitter icon"
                    width="22"
                    height="18"
                  />
                  <span class="sr-only">GitHub on Twitter</span>
                </a>
              </li>
              <li class="mr-3">
                <a
                  href="https://www.facebook.com/GitHub"
                  data-analytics-event='{"category":"Footer","action":"go to Facebook","label":"text:facebook"}'
                  class="color-fg-subtle"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg"
                    class="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="Facebook icon"
                    width="18"
                    height="18"
                  />
                  <span class="sr-only">GitHub on Facebook</span>
                </a>
              </li>
              <li class="mr-3 flex-self-start">
                <a
                  href="https://www.linkedin.com/company/github"
                  data-analytics-event='{"category":"Footer","action":"go to Linkedin","label":"text:linkedin"}'
                  class="color-fg-subtle"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg"
                    class="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="Linkedin icon"
                    width="19"
                    height="18"
                  />
                  <span class="sr-only">GitHub on LinkedIn</span>
                </a>
              </li>
              <li class="mr-3">
                <a
                  href="https://www.youtube.com/github"
                  data-analytics-event='{"category":"Footer","action":"go to YouTube","label":"text:youtube"}'
                  class="color-fg-subtle"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/youtube.svg"
                    class="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="YouTube icon"
                    width="23"
                    height="16"
                  />
                  <span class="sr-only">GitHub on YouTube</span>
                </a>
              </li>
              <li class="mr-3">
                <a
                  href="https://www.twitch.tv/github"
                  data-analytics-event='{"category":"Footer","action":"go to Twitch","label":"text:twitch"}'
                  class="color-fg-subtle"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/twitch.svg"
                    class="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="Twitch icon"
                    width="18"
                    height="18"
                  />
                  <span class="sr-only">GitHub on Twitch</span>
                </a>
              </li>
              <li class="mr-3">
                <a
                  href="https://www.tiktok.com/@github"
                  data-analytics-event='{"category":"Footer","action":"go to tiktok","label":"text:tiktok"}'
                  class="color-fg-subtle"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/tiktok.svg"
                    class="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="TikTok icon"
                    width="18"
                    height="18"
                  />
                  <span class="sr-only">GitHub on TikTok</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/github"
                  data-analytics-event='{"category":"Footer","action":"go to github&apos;s org","label":"text:github"}'
                  class="color-fg-subtle"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
                    class="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="GitHub mark"
                    width="20"
                    height="20"
                  />
                  <span class="sr-only">GitHub’s organization on GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylee,
    },
  ];
}
