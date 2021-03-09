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
  section{
    padding:none
  }
  .container__devicon-container{
    display: grid;
    grid-template: 
        [col-1-left] "d b d b d" [col-1-right] 
        [col-2-left] "b d b d b" [col-2-right] 
        [col-3-left] "d b d b d" [col-3-right];
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 50%;
    height: 30%;
    border: .4rem ridge #F4A15D;
    margin: auto;
    padding: 0
  } 
  
  .devicon {
    background-color: #1D5962 ;
    box-sizing: content-box;
    color: #F4A15D;
    grid-area: "d";
    font-size: 200%;
    text-align: center;
    padding: 25% 0 25% 0;
  }

  .background {
    grid-area: 'b';
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