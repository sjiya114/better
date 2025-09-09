import './Help.css';

function Help() {
  return (
    <>
    
    <div className="help-container">
      <h1>Hi, I'm Betsy!</h1>
      <h1>What can I help you with?</h1>

      <button>Buying a home</button>
      <button>Refinancing my mortgage</button>
      <button>Get cash from my home</button>
    </div>


    <div className="stats-container">
    <div>
      <h1>$100B</h1>
      <p>home loans funded entirely online</p>
    </div>
    <div>
      <h1>400K</h1>
      <p>Customers who chose a Better Mortgage</p>
    </div>
   </div>

    <div className="unlock-section">
      <p>After a few qustions, you'll unlock:</p>
      <ul>
        <li>Custom mortgage rates</li>
        <li>Exclusive offers</li>
        <li>A personalized dashboard</li>
      </ul>

    </div>
    
    </>
  )
}

export default Help