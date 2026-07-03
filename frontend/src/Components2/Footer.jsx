const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["FAQ", "Investor Relations", "Privacy", "Speed Test"]
    },
    {
      title: "Help",
      links: ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"]
    },
    {
      title: "Account",
      links: ["Ways to Watch", "Corporate Information", "Only on Netflix"]
    },
    {
      title: "Media",
      links: ["Media Center", "Terms of Use", "Contact Us"]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-grid">
        {footerLinks.map((section, index) => (
          <div key={index} className="footer-section">
            <h3>{section.title}</h3>
            <ul className="footer-links">
              {section.links.map((link, idx) => (
                <li key={idx}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <select className="language-selector">
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
          <p>Netflix India</p>
        </div>
        <div className="footer-bottom-right">
          <span className="footer-brand">𝐍</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;