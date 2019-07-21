import React from 'react'
import '../styles/newsletter.scss'

function NewsLetter(props) {
  return (
    <div className="newsletter-div">
      <p>{props.text}</p>
      <form action="/send-email" method="POST">
        <input id="emailNewsletter" class="newsletterEmail" type="email" name="emailNewsletter" placeholder="Email" required />
        <input id="submitForNewsletter" class="newsletterSubmit" type="submit" />
      </form>
    </div>
  );
}

export default NewsLetter;