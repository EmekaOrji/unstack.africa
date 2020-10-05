import React from "react"

// import cloudinary from "../../assets/img/cloudinary_sponsor.png"
import github from "../../assets/img/github.png"
import storyblok from "../../assets/img/story.jpg"

import airmeet from "../../assets/img/airmeet.jpeg"
// import egghead from "../../assets/img/egghead.jpg"
// import andela from "../../assets/img/andela_sponsor.jpg"
// import amp from "../../assets/img/amp.png"
// import fleek from "../../assets/img/fleek.png"
// import vanhack from "../../assets/img/vanhack_sponsor.png"
// import gatsby from "../../assets/img/gatsby.png"
// import paystack from "../../assets/img/paystack_sponsor.png"
// import thinkster from "../../assets/img/thinkster_sponsor.png"
// import hashnode from "../../assets/img/hashnode_sponsor.svg"

const sponsorsList = {
  platinum: [
    // {
    //   logo: cloudinary,
    //   logoAlt: "cloudinary",
    // }
  ],
  gold: [
    {
      logo: github,
      logoAlt: "github",
    }
    // {
    //   logo: fleek,
    //   logoAlt: "fleek",
    // },
    // {
    //   logo: codesandbox,
    //   logoAlt: "codeSandBox",
    // },
    // {
    //   logo: amp,
    //   logoAlt: "AMP",
    // },
  ],
  bronze: [
    {
      logo: storyblok,
      logoAlt: "storyblog",
    },
    {
      logo: airmeet,
      logoAlt: "airmeet",
    },
  ],
}

const Sponsors = () => {
  const sponsorsKeys = Object.keys(sponsorsList)
  return (
    <section className="sponser pt-100 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mb-50 text-center ">
            <h1 className="title">Proud Sponsors</h1>
            <p className="title-lead mt-10 mb-20">
              Our event is possible from generous support from these great
              companies!
            </p>
          </div>
        </div>
        {sponsorsKeys.map((sponsorsKey) => {
          const sponsors = sponsorsList[sponsorsKey]

          return [
            <div
              className="sponsors-header"
              key={`${sponsorsKey}-header`}
              style={{ display: "flex" }}
            >
              <svg
                style={{ color: "#e49205" }}
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="grip-lines-vertical"
                className="svg-inline--fa fa-grip-lines-vertical fa-w-8"
                width="20px"
                role="img"
                viewBox="0 0 256 512"
              >
                <path
                  fill="currentColor"
                  d="M96 496V16c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v480c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16zm128 0V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v480c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16z"
                />
              </svg>
              <h2
                style={{
                  alignSelf: "center",
                  marginLeft: "10px",
                  fontSize: "2em",
                  fontFamily: "sans-serif",
                }}
              >
                {sponsorsKey}
              </h2>
            </div>,
            <div
              key={`${sponsorsKey}-body`}
              className="sponsors row mt-30 mb-30"
            >
              {sponsors.map(({ logo, logoAlt }) => {
                return (
                  <div
                    key={logoAlt}
                    className="sponsor-blk col-xs-1 col-sm-2 mt-2"
                  >
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        loading="lazy"
                        src={logo}
                        alt={logoAlt}
                        className="move-right"
                      />
                    </a>
                  </div>
                )
              })}
            </div>,
          ]
        })}
      </div>
    </section>
  )
}

export default Sponsors
