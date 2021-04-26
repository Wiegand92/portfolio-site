<script>
  
  import {fade} from 'svelte/transition'

  export let project
  let hover = false

  const handleMouseEnter = (e) => {
    const isPhoto = e.target.classList.contains('project-photo')
    if(isPhoto && hover === false ){
      hover = true
    }
  }
  const handleMouseLeave = (e) => {
      hover = false
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
      <p 
        in:fade="{{delay:200}}" 
        out:fade="{{delay:0, duration:200}}" 
        class='description'
      >
        {project.description}
      </p>
      {/key}
      {:else}
      {#key hover}
      <div 
        in:fade="{{delay:200}}" 
        out:fade="{{delay:0, duration:200}}" 
        class='project-photo' 
        src={project.photo} 
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

    @apply text-center min-h-full min-w-full;
  }

  .project-photo{
    border-radius: .5rem;
    box-shadow: .2rem .2rem .2rem #0c2231;
    height: 0;
    padding-top: calc(1600 / 2560 * 100%);
    background: url(/photos/hang-mouse.png);
  }

  a{
    text-decoration: none;

    @apply flex flex-col w-full h-full justify-between;
  }

  .description{
    border-radius: .5rem;

    box-shadow: .2rem .2rem .2rem #0c2231;
    padding: 1rem 2rem;
    @apply bg-blue-dark box-border m-0;
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