<section id='header'>
  <a href='#projects' class='link link__projects'>My Projects</a>
  <a href='/photos/Resume.pdf'>My Resume</a>
  <h1 class='title'>Alex Wiegand</h1>
</section>

<style>
  #header{
    /* Border Styles */
    @apply border-b-2 border-l-0 border-r-0 border-t-0 border-orange-dark border-solid;

    /* Spacing Styles */
    @apply bg-blue-light fixed flex h-32 items-center p-0 top-0 w-full;
  }

  h1 {
    flex: 1 1 80%;
    font-size: 4rem;
    text-decoration: underline #F4A15D;
    text-shadow: .1rem .1rem black;

    @apply text-blue-dark text-right tracking-wide pr-8;
  }

  a{
    flex: 1 1 10%;

    @apply text-white text-center ml-2;
  }

  @media (max-width: 470px){
    h1 {
      font-size: 2.5rem
    }
	}

  @media(max-width: 320px){
    h1{
      font-size: 2rem
    }
  }

</style>