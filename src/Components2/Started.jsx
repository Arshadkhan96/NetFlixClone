const Started = () => {
  return (
    <div className="get-started">
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <form className="signup-form">
        <input 
          type="email" 
          className="input-field"
          placeholder="Email address"
          required
        />
        <button type="submit" className="btn btn-primary">Get Started</button>
      </form>
    </div>
  )
}

export default Started;