<script>
  import { projects } from '../projects'
  import ProjectCard from './ProjectCard.svelte'
</script>
<section>
  <h2>My Projects</h2>

  <div class='outer-box'>
    <div class="container">
      <div class="inner">
        {#each projects as project (project.name)}
          <ProjectCard project={project} />
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .outer-box {
    position: static;
    max-width: 50%;
    margin: auto;
  }

  .container{
    padding-top: calc(1600 / 2560 * 100%);
    scroll-snap-type: x mandatory;

    @apply overflow-y-hidden overflow-x-auto;
    @apply h-0 relative;
  }

  .inner{
    @apply flex absolute w-full top-0 left-0;
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