<script>
	import Biography from './Components/Biography'
	import Contact from './Components/Contact'
	import Devicons from './Components/Devicons'
	import Header from './Components/Header'
	import Projects from './Components/Projects'
</script>

<main >
	<Header />
	<div id='content'>	
		<Biography />
		<Devicons />
		<Projects />
		<Contact />
	</div>
</main>

<style>
	main {
		font-size: 1.6rem;
		max-width: 100vw;
		min-width: 100vw;
		max-height: 100vh;
		min-height: 100vh;
		margin: 0;
		padding: 0;
	}

	#content {
		background-color: #0c2231;
		border-radius: .2rem;
		box-shadow: -.2rem .2rem .2rem #F4A15D;
		box-sizing: content-box;
		max-width: 95%;
		max-height: 85%;
		margin: 0 2.5vw 1rem 2.5vw;
		overflow: scroll;
		padding: 1rem;
		position: fixed;
		scroll-behavior: smooth;
		top: 8rem
	}

	#content::-webkit-scrollbar{
		background-color: rgba(255, 255, 255, 0);
		width: 1rem;
	}

	#content::-webkit-scrollbar:horizontal{
		display: none
	}

	#content::-webkit-scrollbar-thumb{
		background-color: #DA304C;
		border-radius: .5rem;
		max-width: .4rem;
	}

	#content::-webkit-scrollbar-corner {
		display: none
	}

	@media (max-width: 420px) {
		#content {
			max-width: 90%
		}
	}

	@media (max-width: 335px){
		#content {
			padding: .1rem
		}
	}
</style>
