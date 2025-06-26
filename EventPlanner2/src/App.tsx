// App.jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to Event Planner</h1>
        <p>Plan and organize your events effortlessly with Event Planner. From birthdays to corporate meetings, we’ve got you covered.</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="event-categories">
        <div className="event-category">
          <h2>Social Events:</h2>
          <ul>
            <li>Birthday parties</li>
            <li>Anniversary celebrations</li>
            <li>Wedding receptions</li>
            <li>Baby showers</li>
            <li>Graduation parties</li>
            <li>Family reunions</li>
          </ul>
        </div>

        <div className="event-category">
          <h2>Entertainment Events:</h2>
          <ul>
            <li>Concerts</li>
            <li>Music festivals</li>
            <li>Film screenings</li>
            <li>Comedy shows</li>
            <li>Art exhibitions</li>
            <li>Cultural events</li>
          </ul>
        </div>

        <div className="event-category">
          <h2>Community Events:</h2>
          <ul>
            <li>Fundraising events</li>
            <li>Charity galas</li>
            <li>Volunteer drives</li>
            <li>Neighborhood block parties</li>
            <li>Community festivals</li>
            <li>Cultural celebrations</li>
          </ul>
        </div>
      </section>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Easy event creation and management</li>
          <li>Customizable event templates</li>
          <li>Guest list management</li>
          <li>Real-time collaboration</li>
          <li>Reminders and notifications</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"<br /><em>- Emily Johnson</em></p>
        <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"<br /><em>- John Smith</em></p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows={4} placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;
