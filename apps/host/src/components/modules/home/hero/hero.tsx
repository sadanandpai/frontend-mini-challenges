import {
  coverTransparent,
  jsImg,
  reactImg,
  vueImg,
  angularImg,
} from "@fmc/assets/images";
import { HashLink } from "react-router-hash-link";
function Hero() {
  const allImg = [
    {
      title: "JS",
      imgSrc: jsImg,
    },
    {
      title: "react",
      imgSrc: reactImg,
    },
    {
      title: "vue",
      imgSrc: vueImg,
    },
    {
      title: "angular",
      imgSrc: angularImg,
    },
  ];
  return (
    <main className="flex flex-col justify-between text-center md:flex-row md:text-left">
      <div>
        <h1>
          Prepare for <span>UI coding interviews</span>
        </h1>

        <p className="mb-8 md:mb-12">
          by solving the collection of challenges from Frontend Mini Challenges
        </p>

        <h3 className="[&>a]:inline-block [&>a]:rounded-lg [&>a]:border-[3px] [&>a]:border-solid [&>a]:border-primary [&>a]:bg-white [&>a]:px-8 [&>a]:py-4 [&>a]:font-semibold [&>a]:tracking-widest [&>a]:text-black [&>a]:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.12)] [&>a]:duration-200 [&>a]:hover:shadow-[0px_0px_20px_rgba(0,0,0,0.3)]">
          <HashLink to="javascript">Get Started</HashLink>
        </h3>
        <div className="flex items-center justify-center gap-3 md:justify-start">
          {allImg.map((item) => (
            <img
              key={item.title}
              src={item.imgSrc}
              width={35}
              height={35}
              alt={`${item.title}-img`}
            />
          ))}
        </div>
      </div>

      <figure className="m-0 flex flex-col items-center justify-center text-center">
        <img
          className="aspect-[calc(1120/736)] w-[min(80vh,80vw)] md:w-[min(60vh,60vw)]"
          src={coverTransparent}
          alt="brand"
        />
        <figcaption>
          Collection of frontend challenges for learning and interviews
        </figcaption>
      </figure>
    </main>
  );
}

export default Hero;
