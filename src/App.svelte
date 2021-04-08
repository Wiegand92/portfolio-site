<script>
	import Biography from './Components/Biography'
	import Contact from './Components/Contact'
	import Devicons from './Components/Devicons'
	import Header from './Components/Header'
	import Projects from './Components/Projects'
</script>

<main >
	<Header />
	<div>	
		<Biography />
		<Devicons />
		<Projects />
		<Contact />
	</div>
</main>

<style>
	main {
		@apply w-full h-full m-0 p-0;
	}

	div {
		border-radius: .2rem;
		box-shadow: -.2rem .2rem .2rem #F4A15D;
		box-sizing: content-box;
		max-width: 95%;
		max-height: 85%;
		margin: 0 2.5vw 1rem 2.5vw;
		padding: 1rem;
		scroll-behavior: smooth;
		top: 8rem;

		@apply bg-blue-dark fixed overflow-scroll;
	}

	div::-webkit-scrollbar{
		background-color: rgba(255, 255, 255, 0);
		width: 1rem;
	}

	div::-webkit-scrollbar:horizontal{
		display: none
	}

	div::-webkit-scrollbar-thumb{
		background-color: #DA304C;
		border-radius: .5rem;
		border: .3rem solid rgba(0, 0, 0, 0);
		max-width: .4rem;
	}

	@media (max-width: 420px) {
		div {
			max-width: 90%
		}
	}

	@media (max-width: 335px){
		div {
			padding: .1rem
		}
	}
</style>
