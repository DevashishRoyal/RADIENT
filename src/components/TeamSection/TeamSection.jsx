import "./TeamSection.css"

const TeamSection = () => {
  const teamMembers = [
    { name: "Add a little bit of body text", role: "Healing Specialist" },
    { name: "Add a little bit of body text", role: "Anxiety Counselor" },
    { name: "Add a little bit of body text", role: "Wellness Coach" },
    { name: "Add a little bit of body text", role: "Panic Recovery Expert" },
    { name: "Add a little bit of body text", role: "Mindfulness Guide" },
    { name: "Add a little bit of body text", role: "Support Coordinator" },
  ]

  return (
    <section className="team-section section">
      <div className="container">
        <div className="section-header">
          <h2>Our Healing Team</h2>
          <p>Meet the compassionate professionals dedicated to your wellness journey</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-avatar">
                <div className="avatar-placeholder"></div>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
