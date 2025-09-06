const Reasons = () => {
  const reasons = [
    {
      id: 1,
      title: "Enjoy on your TV",
      description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
    },
    {
      id: 2,
      title: "Download your shows to watch offline",
      description: "Save your favorites easily and always have something to watch."
    },
    {
      id: 3,
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
    },
    {
      id: 4,
      title: "Create profiles for kids",
      description: "Send kids on adventures with their favorite characters in a space made just for them."
    },
    {
      id: 5,
      title: "Cancel anytime",
      description: "No commitments. Cancel your subscription anytime."
    },
    {
      id: 6,
      title: "4K Ultra HD",
      description: "Enjoy your favorite content in stunning 4K Ultra HD quality."
    }
  ];

  return (
    <div className="reasons-section">
      <h2 className="section-title">More reasons to join</h2>
      <div className="reasons-grid">
        {reasons.map(reason => (
          <div key={reason.id} className="reason-card">
            <div className="reason-icon">+</div>
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-description">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reasons;