import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h1 className="footer-logo">Better</h1>
          <p className="footer-description">
            Better Mortgage Corporation is a direct lender dedicated to providing a fast, transparent digital mortgage experience backed by superior customer support.
          </p>
        </div>

        <div className="footer-column">
          <h2 className="footer-heading">Contact Us</h2>
          <ul className="footer-list">
            <li>Schedule a conversation</li>
            <li>hello@better.com</li>
            <li>415-523-8837</li>
            <li>FAQ</li>
            <li>Resources</li>
          </ul>
        </div>

        <div className="footer-column">
          <h2 className="footer-heading">Legal</h2>
          <ul className="footer-list">
            <li>NMLS Consumer Access</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Disclosures & Licensing</li>
            <li>Affiliated Business</li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>
          © 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; Better Connect, LLC dba Better Attorney Match provides real estate attorney connection services; and Better Inspect, LLC provides home inspection services. All rights reserved.
        </p>
        <p>
          Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access
        </p>
      </div>
    </footer>
  );
}

export default Footer;