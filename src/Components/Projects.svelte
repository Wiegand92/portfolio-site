<script>
  import { projects } from '../projects'
  import ProjectCard from './ProjectCard.svelte'
</script>
<section>
  <h2>My Projects</h2>
  <div class="container">
    {#each projects as project (project.name)}
      <ProjectCard project={project} />
    {/each}
  </div>
</section>

<style>
  div{
    min-width: 320px;
    scroll-snap-type: x mandatory;
    transition: width .5s ease-out; 

    @apply overflow-y-hidden overflow-x-auto;
    @apply flex p-0;
  }

  div::-webkit-scrollbar{
		background-color: rgba(255, 255, 255, 0);
    height: 1rem
	}

	div::-webkit-scrollbar-thumb{
		background-color: #DA304C;
		border-radius: .5rem;
	}

  @media (max-width: 1280px) {
    div{
      transition: max-width .5s ease-out;
    }
  }

</style>