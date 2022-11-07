import NavBar from "../components/NavigationBar/NavigationBar";
import Footer from "../components/Footer/Footer";

function About() {
  return (
    <div>
      <NavBar />
      <main>
        <article>
          <h1 id="about-me">
            <a href="#about-me">About Me</a>
            <div className="heading"></div>
          </h1>
          <p>
            Hi, there I’m Waishnav Deore. I love building and creating things
            which are useful to other humans. I’ve been programming since 2020.
            I’m good with the front-end part of web development.
            <br />I was born and raised in India, I love to analyze and
            understand business as well.
          </p>
          <p>
            In short, I’m interested in learning things about making
            Product/Service. So my interest revolves around following topics.
            <br /> <span className="tag">Product Design</span>,{" "}
            <span className="tag">Product Management</span>,
            <span className="tag">Programming</span> etc
          </p>
          <h1 id="about-this-website">
            <a href="#about-this-website">About this website</a>
            <div className="heading"></div>
          </h1>
          <p>
            This is my personal website to share my creations/projects and blogs
            around anything that I come across over a time. The idea behind is
            that I want to document my thoughts and ideas. And share it with the
            proper audience.
          </p>
          <h1 id="things-i-do">
            <a href="#things-i-do">Things I do</a>
            <div className="heading"></div>
          </h1>
          <p>
            I’m a college student who likes to code and explore new things.
            Doing my UG from IIITDMJ. Also, I’m pretty good at the UI-UX part of
            product design. I use Figma to do so
          </p>
          <p>
            I write posts about different topics which I've learned or learning,
            though I can’t say that I write them regularly. Hope you find a
            thing or two that’s useful from them!
          </p>
          <h1 id="contact-me">
            <a href="#contact-me">Contact me</a>
            <div className="heading"></div>
          </h1>
          <p>
            If you want to reach me then feel free to hit me up on{" "}
            <span>
              <a href="https://twitter.com/waishnav_deore">Twitter</a>
            </span>{" "}
            or{" "}
            <span>
              <a href="https://discord.com/users/814462428997484574">
                Discord Waishnav#3471
              </a>
            </span>
            . You can also{" "}
            <span>
              <a href="mailto:waishnavdeore@gmail.com">email me</a>
            </span>{" "}
            if you prefer that. <br />
            Well, I guess that’s about it. Thanks for visiting my website and I
            hope you found something useful here. Have a good day! ツ
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default About;
