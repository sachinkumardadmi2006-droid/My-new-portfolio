import "./certificates.css";

const Certificates = () => {
  const certificates = [
    {
      title: "React Developer Certification",
      issuer: "Coursera",
      date: "2024",
      link: "#",
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "2024",
      link: "#",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      link: "#",
    },
  ];

  return (
    <section id="certificates">
      <h2>Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <div className="cert-icon">🏆</div>
            <h3>{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-date">{cert.date}</p>
            <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;