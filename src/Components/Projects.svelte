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
    flex-direction: row;
    overflow: hidden;
    padding: 0 0 0 0;
    scroll-snap-type: x mandatory;
    transition: max-width .5s ease-out; 
  }

  .project-card{
    display: block;
    flex: 1 1 100%;
    margin: auto;
    padding: 2rem;
    scroll-snap-align: center;
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
  }

  .container__project-container::-webkit-scrollbar{
		background-color: rgba(255, 255, 255, 0);
		width: 1rem;
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
      overflow: overlay;
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
    img{
      max-width: 63vw;
    }
  }

</style>