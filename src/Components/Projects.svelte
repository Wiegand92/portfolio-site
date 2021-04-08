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
    min-width: 320px;
    scroll-snap-type: x mandatory;
    transition: width .5s ease-out; 

    @apply overflow-y-hidden overflow-x-auto;
    @apply flex p-0;
  }



  .container__project-container::-webkit-scrollbar{
		background-color: rgba(255, 255, 255, 0);
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
      transition: max-width .5s ease-out;
    }
  }

</style>