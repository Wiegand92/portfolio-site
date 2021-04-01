<script>
  
  import {fade} from 'svelte/transition'

  export let project
  let hover = false

</script>

<div class='project-card'>
  <a href={project.url}>
    <div
      on:pointerover={() => {hover=true}} 
      on:pointerout={() => {hover=false}}  
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
    flex: 1 1 100%;
    box-sizing: content-box;
    margin: auto;
    padding: 2rem;
    scroll-snap-align: center;
    text-align: center;
    height: 25rem;
  }

  a{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 220px;
    min-width: 340px;
    text-decoration: none;
  }

  .description{
    background-color: #0c2231;
    box-sizing: border-box;
    border-radius: .5rem;
    box-shadow: .2rem .2rem .2rem #0c2231;
    height: 200px;
    width: 320px;
    margin: 0 0;
    padding: 1rem 2rem;
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