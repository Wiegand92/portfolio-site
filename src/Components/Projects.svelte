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
    max-width: 60%;
    margin: auto;
  }

  .container{
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    max-height: fit-content;

    @apply relative flex overflow-y-hidden overflow-x-auto;
  }

  .container::before {
    content: "";
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: calc(1600 / 2560 * 105%);
  }
  .container::after { /* to clear float */
    content: "";
    display: table;
    clear: both;
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