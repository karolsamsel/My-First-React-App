export function Header() {
  return (
    <div className="header-container">
      <div className="header-container__image">
        <img src="/my_photo.png" alt="My Picture" id="my-photo" />
      </div>
      <div className="header-container__content">
        <h1>Yo, I'm Karol</h1>
        <p>
          I'm a web-developer who builds modern,
          <br /> real-world and advanced websites for you or your company.
        </p>
        <a href="mailto:karol.samsel.dev@gmail.com">
          <button className="btn btn--accent">
            <i class="fa-solid fa-phone"></i>
            Contact Me
          </button>
        </a>
      </div>
      <div className="header-container__white"></div>
    </div>
  );
}
