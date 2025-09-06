const Background = () => {
  return (
    <div className="hero">
      <div className="header-container">
        <div className="logo"></div>
        <div className="language-selector">
          <select>
            <option value="en">English  </option> 
            <option value="hi">हिन्दी</option>
          </select>
        <button className="btn btn-primary">Sign In</button>
        
        </div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Unlimited movies, TV shows and more
        </h1>
        <p className="hero-subtitle">
          Starts at ₹149. Cancel anytime.
        </p>
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
    </div>
  )
}

export default Background;