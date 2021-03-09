<script>
  const projects = [ 
    {
      name: "Hang Mouse",
      url: "https://hang-mouse.netlify.app/",
      photo: "./photos/hang-mouse.png"
    },
    {
      name: "Notes App",
      url: "https://notes-app-wiegand.netlify.app/",
      photo: "./photos/notes-app.png"
    },
    {
      name: "Todos App",
      url: "http://abrasive-bee.surge.sh",
      photo: "./photos/todos-app.png"
    }
  ]
</script>

<section id='projects'>
  <h2>My Projects</h2>
  <div class="container container__project-container">
    {#each projects as project}
      <div class='project-card'>
        <a href={project.url}>
        <img src={project.photo} alt={project.name}/>
        <h3>{project.name}</h3>
        </a>
      </div>
    {/each}
  </div>
</section>

<style>
  .container__project-container{
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-content: center;
    overflow: auto;
    padding: 0 0 0 0;
  }

  .container__project-container::before, .container__project-container::after{
    box-sizing: border-box;
  }

  .project-card{
    flex: 1 1 33%;
    padding: 2rem;
    text-align: center;
  }

  a{
    transition: color ease-in 200ms
  }

  a:hover{
    color: #F4A15D
  }

  h3{
    margin-bottom: 0
  }

  img{
    border-radius: .5rem;
    box-shadow: .2rem .2rem .2rem #0c2231;
    max-width: 100%;
  }

  .container__project-container::-webkit-scrollbar{
		background-color: rgba(255, 255, 255, 0);
		width: 1rem;
	}

	.container__project-container::-webkit-scrollbar-thumb{
		background-color: #DA304C;
		border-radius: .5rem;
	}

	.container__project-container::-webkit-scrollbar-corner {
		display: none
	}

</style>