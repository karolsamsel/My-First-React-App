import { ReactSVG } from "react-svg";

export function Skills() {
  return (
    <section id="skills-section">
      <h2>Why work with me?</h2>
      <ul className="skills-list">
        <li>
          <label>
            Clean, Modern Code <i class="fa-solid fa-circle-check"></i>
          </label>
          <span>
            I write websites that aren’t just pretty-they’re fast, responsive,
            and clean under the hood.
          </span>
        </li>
        <li>
          <label>
            Mobile-First Approach <i class="fa-solid fa-tablet"></i>
          </label>
          <span>
            Your site will look amazing on phones, tablets, laptops—everything.
            Always optimized.
          </span>
        </li>
        <li>
          <label>
            Creative + Technical <i class="fa-solid fa-code-branch"></i>
          </label>
          <span>
            I don’t just code—I help bring ideas to life with both design sense
            and dev skills.
          </span>
        </li>
        <li>
          <label>
            Reliable Communication <i class="fa-solid fa-handshake"></i>
          </label>
          <span>
            I’m young but serious about work. You’ll always know where your
            project stands.
          </span>
        </li>
        <li>
          <label>
            Always Learning <i class="fa-solid fa-book"></i>
          </label>
          <span>Constantly leveling up to offer the latest and greatest.</span>
        </li>
      </ul>
    </section>
  );
}
