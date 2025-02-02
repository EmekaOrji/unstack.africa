import React from "react"

import shodipoayomide from "../../assets/img/speakers/shodipoayomide.PNG"
import kofo from "../../assets/img/speakers/kofo.jpeg"
import ademola from "../../assets/img/speakers/ademola.jpeg"
import michael from "../../assets/img/speakers/michael.jpeg"
// import princess from "../../assets/img/unstack-img/princess.jpeg"
import kingdom from "../../assets/img/speakers/kingdom.png"

import olumide from "../../assets/img/unstack-img/Olumide.JPG"
import amaka from "../../assets/img/unstack-img/chiamaka.jpg"
import ayomide from "../../assets/img/unstack-img/ayomide.jpg"

const teamMembers = [
  {
    name: "Shodipo Ayomide",
    bio: "Founder, unStack Africa & Dev. Relations Manager at Stack Overflow ",
    imageURL: shodipoayomide,
    links: {
      github: "https://github.com/developerayo",
      twitter: "https://twitter.com/developerayo",
      linkedin: "https://linkedin.com/in/shodipo-ayomide",
    },
  },
  {
    name: "Adora Nwodo",
    bio: "Co-Founder at unStack, Software Engineer, Microsoft",
    imageURL:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1573460393072/-F1dY-wHG.jpeg?auto=compress",
    links: {
      github: "https://github.com/AdoraNwodo",
      twitter: "https://twitter.com/AdoraNwodo",
      linkedin: "https://ng.linkedin.com/in/adoranwodo",
    },
  },
  {
    name: "Kingdom Orjiewuru ",
    bio: "Co-Founder at unStack & Senior Software Engineer, Lounge HQ ",
    imageURL: kingdom,
    links: {
      github: "https://github.com/kingisaac95",
      twitter: "https://twitter.com/kingisaac95?lang=en",
      linkedin: "https://ng.linkedin.com/in/kingdomorjiewuru",
    },
  },
  // {
  //   name: "Emmanuel Odianosen",
  //   bio: "Co-Founder & Blockchain Software Engineer ",
  //   imageURL:
  //     "https://media-exp1.licdn.com/dms/image/C4D03AQHdeW4urJG-oA/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=tndVQnfaNQhNXHUgSAYKRgdiS-oUuT69Ifp89F0NG7I",
  //   links: {
  //     github: "https://github.com/emmaodia",
  //     twitter: "https://twitter.com/iam_odiaa",
  //     linkedin: "https://ng.linkedin.com/in/emmaodia",
  //   },
  // },
  {
    name: "Marvin Ogah",
    bio: "Co-Founder & lead Designer ",
    imageURL:
      "https://miro.medium.com/fit/c/210/210/2*FjRi6nGxz5ILWZ4_R2wobQ.jpeg",
    links: {
      github: "https://dribbble.com/dudesoamazing",
      twitter: "https://twitter.com/marvinographer",
      linkedin: "https://ng.linkedin.com/in/marvinogah",
    },
  },
  {
    name: "Kofo Okeshola",
    bio: "Lead Go Organizer, Systems Engineer, Brankas",
    imageURL: kofo,
    links: {
      github: "https://github.com/kofoworola",
      twitter: "https://twitter.com/yoruba_dev?lang=en",
      linkedin: "https://ng.linkedin.com/in/kofo-okesola-ab3774128",
    },
  },
  // {
  //   name: "Princess Oluebube",
  //   bio: "Co-Lead React Organizer & Software Engineer, Powertofly",
  //   imageURL: princess,
  //   links: {
  //     github: "https://github.com/Princesso",
  //     twitter: "https://twitter.com/PrincesOluebube",
  //     linkedin: "https://ng.linkedin.com/in/egbunaoluebubeprincess",
  //   },
  // },
  {
    name: "Ademola Adebuyi",
    bio: "Co-Lead React Organizer & Senior Software Engineer, Paystack ",
    imageURL: ademola,
    links: {
      github: "https://github.com/ooade",
      twitter: "https://twitter.com/_ooade",
      linkedin: "https://ng.linkedin.com/in/ooade",
    },
  },
  {
    name: "Chiamaka Okenwa",
    bio:
      "Community Manager & Software Developer, 3Line Card Management Limited ",
    imageURL: amaka,
    links: {
      github: "https://github.com/#",
      twitter: "https://twitter.com/amakachii_",
      linkedin: "https://ng.linkedin.com/in/chiamakaokenwa",
    },
  },
  {
    name: "Shodipo Michael",
    bio: "Co-Lead Design & Product Designer",
    imageURL: michael,
    links: {
      github: "https://dribbble.com/designspree",
      twitter: "https://twitter.com/design_spree",
      linkedin: "https://ng.linkedin.com/in/michael-shodipo",
    },
  },
  {
    name: "Olumide Okedusi",
    bio: "Community Manager & Software Engineer, Sidmach",
    imageURL: olumide,
    links: {
      github: "https://github.com/lumie31",
      twitter: "https://twitter.com/lumie31",
      linkedin: "https://ng.linkedin.com/in/olumideokedusi",
    },
  },
  {
    name: "Ayomide Oso",
    bio: "Community Manager & Front-end Developer, ELTA Solutions ",
    imageURL: ayomide,
    links: {
      github: "https://github.com/#",
      twitter: "https://twitter.com/susanspecs",
      linkedin: "https://ng.linkedin.com/in/ayomide-oso-385a29167",
    },
  },
]

const Team = () => {
  return (
    <section id="team" className="speakers pt-60 brd-bottom">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mb-50 text-center">
            <h1 className="title">Meet The Team</h1>
          </div>
        </div>
      </div>
      <div className="block-content flex flex-wrap--wrap">
        {teamMembers.map(({ name, imageURL, bio, links }) => {
          return (
            <div className="col-sm-3 pd-0" key={name}>
              <div className="block-speaker">
                <div className="block-img overlay soft">
                  <div className="background-img">
                    <img loading="lazy" src={imageURL} alt="" />
                  </div>
                  <div className="block-info-2 dark-outline">
                    <p>
                      <strong>{name}</strong>
                      <span>{bio}</span>
                    </p>
                    <ul className="block-social">
                      {Object.keys(links).map((linkKey) => {
                        const link = links[linkKey]

                        return (
                          <li key={linkKey}>
                            <a
                              href={link}
                              target="_blank"
                              aria-label={linkKey}
                              rel="noopener noreferrer"
                            >
                              <i className={`fa fa-${linkKey}`}></i>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Team
