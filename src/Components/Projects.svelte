<script>
  import { projects } from '../projects'
  import ProjectCard from './ProjectCard.svelte'
</script>
<section id='projects'>
  <h2>My Projects</h2>
  <div class="container container__project-container">
    {#each projects as project (project.name)}
      <ProjectCard project={project} />
    {/each}
  </div>
</section>

<style>
  .container__project-container{
    box-sizing: content-box;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    padding: 0 0 0 0;
    scroll-snap-type: x mandatory;
    transition: max-width .5s ease-out; 
  }

  .container__project-container::-webkit-scrollbar{
		background-color: rgba(255, 255, 255, 0);
		width: 0;
    height: 1rem
	}

	.container__project-container::-webkit-scrollbar-thumb{
		background-color: #DA304C;
		border-radius: .5rem;
	}

	.container__project-container::-webkit-scrollbar-corner {
		display: none
	}

  @media (max-width: 1280px) {
    .container__project-container{
      overflow: scroll;
      max-width: 68rem;
      transition: max-width .5s ease-out;
    }
  }

  @media (max-width: 890px) {
    .container__project-container{
      max-width: 34rem;
      min-width: 34rem
    }
  }

  @media(max-width: 450px) {
    .container__project-container{
      min-width: 95%
    }
  }

</style>