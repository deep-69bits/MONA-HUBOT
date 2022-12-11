import stylee from "~/styles/style.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "~/styles/Mona-Sans.woff2"

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
    font: `${space}px`

  };
  return (
    <div>
      <div className="p1">
        <p id="up">TWO VARIABLE, OPEN SOURCE FONTS from GITHUB</p>
        <div className="textup">
          <span class="Mona">MONA</span>
          <span className="d-block position-relative z-2 lh-condensed-ultra text-extrabold">
            <span className="and">&amp;</span>
          </span>
          <span className="hubot">HUBOT</span>
          <span class="sans">SANS</span>
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
            <p>
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
      <div className="p3">
        <p>Use them Flex’em Fork them Use them Flex’em Fork them Use t</p>
        <span id="shipit" style={styleObj}>
          {" "}
          Ship it{" "}
        </span>
        <input type="range" min="100" max="1000" onChange={rangeslide} />
        <input type="range" min="0" max="10" onChange={rangeslide2} />
        <p>Use them Flex’em Fork them Use them Flex’em Fork them Use t</p>
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
