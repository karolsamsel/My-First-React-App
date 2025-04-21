export function Pricing() {
  return (
    <section id="cards-section">
      <h2>What I Create</h2>
      <div className="card-container">
        <div className="card card--primary">
          <label className="card__title">Static Websites</label>
          <p className="card__use-case">
            Perfect for portfolios, landing pages, resumes, and business
            websites that don’t need user logins or databases.
          </p>
          <ul className="card__list">
            <li>
              <i class="fa-solid fa-check-circle"></i>Responsive Design
            </li>
            <li>
              <i class="fa-solid fa-check-circle"></i>Fast Performance
            </li>
            <li>
              <i class="fa-solid fa-check-circle"></i>SEO-Friendly
            </li>
            <li>
              <i class="fa-solid fa-check-circle"></i>Built with HTML/CSS/REACT
            </li>
          </ul>
        </div>
        <div className="card card--accent">
          <label className="card__title">Websites with Backend</label>
          <p className="card__use-case">
            Perfect for user dashboards, admin panels, forms that save data,
            blogs with CMS, and small business websites needing client
            interaction.
          </p>
          <ul className="card__list">
            <li>
              <i class="fa-solid fa-check-circle"></i>User Login / Auth
            </li>
            <li>
              <i class="fa-solid fa-check-circle"></i>Admin Panel
            </li>
            <li>
              <i class="fa-solid fa-check-circle"></i>Contact Forms
            </li>
            <li>
              <i class="fa-solid fa-check-circle"></i>Built with Backend
              Framework
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
