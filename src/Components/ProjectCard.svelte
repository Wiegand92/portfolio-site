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
      <img 
        in:fade="{{delay:200}}" 
        out:fade="{{delay:0, duration:200}}" 
        class='project-photo' 
        src={project.photo} 
        alt={project.name}
      />
      {/key}
      {/if}
    </div>
  <p class={hover ? 'title hover' : 'title'}>{project.name}</p>
  </a>
</div>

<style>

  .project-card{
    scroll-snap-align: center center;

    @apply mx-photoX text-center h-full w-full;
  }

  a{
    text-decoration: none;

    @apply flex flex-col justify-between;
  }

  a, .description{
    @apply h-photo w-photo;
    
  }

  @screen portrait {
    a, .description{
     @apply h-photoContainerPortrait w-photoContainerPortrait;
    }
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

  img{
    box-sizing: border-box;
    border-radius: .5rem;
    box-shadow: .2rem .2rem .2rem #0c2231;
  }
</style>