<section>
  <h2>My Skills</h2>
  <div class="container container__devicon-container">
    <i class="devicon devicon-javascript-plain"></i>
    <div class="background"></div>
    <i class="devicon devicon-css3-plain"></i>
    <div class="background"></div>
    <i class="devicon devicon-html5-plain"></i>
    <div class="background"></div>
    <i class="devicon devicon-react-original"></i>
    <div class="background"></div>
    <i class="devicon devicon-redux-original"></i>
    <div class="background"></div>
    <i class="devicon devicon-webpack-plain"></i>
    <div class="background"></div>
    <i class='devicon devicon-git-plain'></i>
    <div class="background"></div>
    <i class="devicon devicon-bash-plain"></i>
  </div>
</section>

<style>
  .container__devicon-container{
    width: 50%;
    height: 30%;
    border: .4rem ridge #F4A15D;

    @apply grid grid-flow-col grid-rows-3 m-auto p-0;
  } 
  
  .devicon {
    font-size: 200%;
    padding: 25% 0 25% 0;

    @apply bg-blue-light text-orange-light box-content text-center;
  }

  .background {
    background-color: rgba(255, 255, 255, 0.37)
  }

  @media (max-width: 420px) {
    .devicon{
      font-size: 100%;
    }
  }

  @media (max-width: 260px) {
    .devicon{
      font-size: 80%;
    }
  }
</style>