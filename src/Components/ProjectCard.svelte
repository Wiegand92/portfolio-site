<script>
  
  import {fade} from 'svelte/transition'

  export let project
  let hover = false

  const handleMouseEnter = (e) => {
    const isPhoto = e.target.classList.contains('project-photo')
    
    console.log(e.target.tagName)
    if(isPhoto && hover === false ){
      hover = true
    }
  }

  const handleMouseLeave = (e) => {
      hover = false
  }
</script>

<div class='project-card'
on:mouseover={handleMouseEnter} 
on:mouseleave={handleMouseLeave} >
  <a href={project.url}>
    <div 
    >
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
        class='project-photo' 
        out:fade="{{delay:0, duration:200}}" 
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
    padding: 2rem;
    scroll-snap-align: center;
    height: 25rem;

    @apply m-auto text-center;
  }

  a{
    min-height: 220px;
    min-width: 340px;
    text-decoration: none;

    @apply flex flex-col justify-between;
  }

  .description{
    border-radius: .5rem;
    box-shadow: .2rem .2rem .2rem #0c2231;
    height: 200px;
    width: 320px;
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
    height: 200px;
    width: 320px;
    box-sizing: border-box;
    border-radius: .5rem;
    box-shadow: .2rem .2rem .2rem #0c2231;
  }

  @media(max-width: 450px) {
    img{
      max-width: 63vw;
    }
  }
</style>