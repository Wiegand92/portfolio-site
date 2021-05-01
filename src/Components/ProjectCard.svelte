<script>
  
  import {slide} from 'svelte/transition'

  export let project
  let hover = false

  const handleMouseEnter = (e) => {
    const isPhoto = e.target.classList.contains('project-photo')
    if(isPhoto && hover === false ){
      hover = true
    }
  }
  const handleMouseLeave = (e) => {
    const isParagraph = e.target.classList.contains('description');
    if(isParagraph && hover){
      hover = false
    }
  }

</script>

<div class='project-card'
  on:pointerover={handleMouseEnter}
  on:pointerout={handleMouseLeave}
>
  <a href={project.url}>
    <div>
      {#if hover}
      {#key hover}
      <div 
        in:slide="{{delay:220}}" 
        out:slide="{{delay:0, duration:200}}" 
        class='description'
      >
        <p>{project.description}</p>
      </div>
      {/key}
      {:else}
      {#key hover}
      <div 
        in:slide="{{delay:220}}" 
        out:slide="{{delay:0, duration:200}}" 
        class='project-photo'
        style={`background: no-repeat url(${project.photo}); background-size: contain`}
        alt={project.name}
      ></div>
      {/key}
      {/if}
    </div>
  <p class={hover ? 'title hover' : 'title'}>{project.name}</p>
  </a>
</div>

<style>

  .project-card{
    scroll-snap-align: center center;
    min-width: 95%;
    @apply text-center w-full px-20 pt-2 mb-2;
  }


  .project-card:last-of-type{
    @apply pr-32;
  }

  .project-photo{
    border-radius: .5rem;
    box-shadow: .2rem .2rem .2rem #0c2231;
    height: 0;

     /* 62.5 Percent */
    padding-top: calc(656 / 1000 * 100%);
    @apply bg-contain;
  }

  a{
    text-decoration: none;

    @apply flex flex-col w-full h-full justify-between;
  }

  .description{
    border-radius: .5rem;
    position: relative;

    box-shadow: .2rem .2rem .2rem #0c2231;
    height: 0;
    padding-top: calc(656 / 1000 * 100%);
    
    @apply bg-blue-dark box-border m-0;
  }

  .description p{
    @apply absolute top-0 left-0 px-5;
  }

  .title{
    transition: color 400ms ease-in;
    margin-bottom: 0;
    font-size: 1.6rem;
    font-weight: bold;
  }

  .hover{
    color: #F4A15D
  }

</style>