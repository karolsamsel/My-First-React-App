import { useState } from "react";
import { Rnd } from "react-rnd";

export function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleList() {
    setIsVisible(!isVisible);
  }

  return (
    <nav className="nav-bar">
      <img
        className={`${isVisible ? "arrow-rotated" : ""}`}
        src="\expand-arrow.svg"
        id="expand-arrow"
        onClick={() => toggleList()}
      />
      <ul className={`nav-bar__list ${isVisible ? "visible" : "hidden"}`}>
        <li onClick={() => setIsOpen(!isOpen)}>About Me</li>
        <li>Projects</li>
      </ul>
      {isOpen && (
        <Rnd
          default={{ x: 20, y: 150, width: 0, height: 0 }}
          className="rnd-window"
        >
          <div className="about-me-window">
            <div className="about-me-window__title-bar">
              <span>About me</span>
              <button
                onClick={() => setIsOpen(false)}
                className="about-me-window__close-btn"
              >
                ✖
              </button>
            </div>
            <div className="about-me-window__content">
              <p>
                Hey! I'm Karol a highschool student with passion for coding and
                self-improvement.
                <br />
                Currently diving into the world of react and building cools
                things as i learn. <br />
                My mission? To level up fast, become a pro developer, and maybe
                hit that millionaire goal before most people finish college :D{" "}
                <br />
                <br />
                This is my first React project — it's not perfect, (its more
                like spagetti) but it's mine. Every click, bug, and line of code
                is part of the grind. Let's gooo!
              </p>
            </div>
          </div>
        </Rnd>
      )}
    </nav>
  );
}
