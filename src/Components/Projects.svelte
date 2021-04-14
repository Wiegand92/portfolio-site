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
    <div class="padding"></div>
  </div>
</section>

<style>
  div{
    scroll-snap-type: x mandatory;
    @apply overflow-y-hidden overflow-x-auto;
    @apply flex mx-auto shadow-inner h-photoContainer w-photoContianer;
  }

  @screen portrait {
    div{
     @apply h-photoContainerPortrait w-photoContainerPortrait;
    }
  }

  div::-webkit-scrollbar{
		background-color: rgba(255, 255, 255, 0);
    height: 1rem
	}

	div::-webkit-scrollbar-thumb{
		background-color: #DA304C;
		border-radius: .5rem;
	}

  .padding{
    min-width: 1px
  }


</style>