<script>
	import Biography from './Components/Biography'
	import Contact from './Components/Contact'
	import Devicons from './Components/Devicons'
	import Header from './Components/Header'
	import Projects from './Components/Projects'
</script>

<main >
	<div class="header">
		<Header />
	</div>
	<div class="body">	
		<Biography />
		<Devicons />
		<Projects />
		<Contact />
	</div>
</main>

<style>
	main {
		@apply m-0 p-0;
	}
	.header{
		@apply p-0 m-0;
	}

	.body {
		border-radius: .2rem;
		box-shadow: -.2rem .2rem .2rem #F4A15D;
		box-sizing: content-box;
		padding: 1rem;
		scroll-behavior: smooth;
		top: 8rem;
		left: 2.5vw;

		max-height: 86vh;
		max-width: 95vw;
		@apply bg-blue-dark p-0 m-0 fixed overflow-scroll;
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
</style>
