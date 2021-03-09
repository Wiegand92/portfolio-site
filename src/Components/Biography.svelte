
<section>
  <h2>About Me</h2>
  <div class="container container__biography-container">
    <img src='./photos/profile.jpg' alt='Alex Wiegand'/>
    <p>
      Previously from the restaurant industry, hoping to transition into software development after the pandemic. 
      I have almost 15 years experience in the restaurant industry, most recently being the lead bartender at Bambara restaurant in Cambridge, MA.
      <br>
      Currently I am learning to code to transition into an industry that has work from home availability. 
      My main focus has been in learning Javascript in the front end. 
      I have focused on learning vanilla javascript to be framework independent, and now that I am comfortable with it I am focusing on learning React.
      <br>
      That being said, I have also been dabbling in many other languages. 
      I can at least work my way through documentation on the following: Bash, CSS/SCSS, Express, HTML, MySQL, Node.js, SQLite, Svelte, Redux.
      <br>
      I look forward to seeing where the Tech industry leads me. 
    </p>
  </div>
  
</section>

<style>
  
  p{
    color: #0c2231;
    background-color:  rgba(255, 255, 255, 0.37);
    border-radius: .2rem;
    line-height: 2.5rem;
    padding: 1rem 2rem
  }
  
  img {
    bottom: 10.9rem;
    clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    float: right;
    left: 9rem;
    position: relative;
    max-height: 40rem;
    max-width: 20rem;
  }


  @media (max-width: 1130px) {
    .container__biography-container{
      width: 85%
    }
    img{
      bottom: 7.8rem;
      max-height: 30rem;
      max-width: 15rem;
      left: 8.5rem;
    }
  }

  @media (max-width: 880px) {
    img{
      bottom: 6.2rem;
      max-height: 25rem;
      max-width: 12.5rem;
      left: 7.5rem;
    }
  }
  @media (max-width: 650px) {
    .container__biography-container{
      width: 80%
    }
  }
  @media (max-width: 400px){
    img{
      bottom: 6.3rem;
      left: 3rem;
    }
  }
</style>
