
<section>
  <h2>About Me</h2>
  <div class="container container__biography-container">
    <img src='./photos/profile.jpg' alt='Alex Wiegand'/>

    <p>
      A veteran of the restaurant industry for over 14 years, I have experience working as part of a team in a fast paced, ever changing environment. I also have practical experience in designing, developing, and launching a product. I am seeking to leverage this experience to enter the tech industry. 
      <br/>
      I specialize in Web/UI/UX design with JavaScript frameworks such as React and Svelte, as well as developing full stack applications with the PERN stack.

    </p>
  </div>
  
</section>

<style>
  div{
    padding: 1rem 1rem
  }

  p{
    color: #0c2231;
    background-color:  rgba(255, 255, 255, 0.37);
    border-radius: .2rem;
    line-height: 2.5rem;
    margin: 0 0;
    padding: 1rem 2rem;
  }
  
  img {
    clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    float: right;
    position: relative;
    left: 10rem;
    top: -10.5rem;
    width: 18rem;
    height: 21rem;
    transition: all 200ms ease-out;
  }

  @media (max-width: 1130px) {
    .container__biography-container{
      width: 85%
    }
  }

  @media (max-width: 880px) {
    img{
      bottom: 6.2rem;
      left: 7.5rem;
    }
  }
  @media (max-width: 650px) {
    .container__biography-container{
      width: 80%
    }
  }
  @media (max-width: 420px){
    img{
      display: inline-block;
      position: static;
      margin-right: 2.5rem;
      margin-top: 1rem
    }
  }
</style>
