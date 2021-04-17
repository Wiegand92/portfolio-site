<script>
  import { projects } from '../projects'
  import ProjectCard from './ProjectCard.svelte'
</script>
<section>
  <h2>My Projects</h2>

  <div class='outer-box'>
    <div class="container">
      {#each projects as project (project.name)}
        <ProjectCard project={project} />
      {/each}
    </div>
  </div>
</section>

<style>
  .outer-box {
    position: static;
    max-width: 70%;
    margin: auto;
  }

  .container{
    padding-top: calc(125 / 200 * 100%);
    scroll-snap-type: x mandatory;

    @apply overflow-y-hidden overflow-x-auto;
    @apply flex h-0 mx-auto shadow-inner;
  }

  div::-webkit-scrollbar{
		background-color: rgba(255, 255, 255, 0);
    height: 1rem
	}

	div::-webkit-scrollbar-thumb{
		background-color: #DA304C;
		border-radius: .5rem;
	}

</style>