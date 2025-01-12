<script lang="ts">
	import Logo from "$lib/Logo.svelte";
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	type ColorTuple = any;
	/** @type {{ data: import('./$types').PageData }} */
	const {  data  }  = $props();
	const { members, team_bio } = data;
	type IntersectionObserverOptions = {
		root: HTMLElement,
		rootMargin: string,
		threshold: number | number[],
	};
	onMount(function(): () => void {
		const container = document.querySelector("div[member-bios]");
		const defaul_color = container.style.backgroundColor;
		for(const elt of document.getElementsByClassName("member-bio")) {
			//const bottomHold = screen.availHeight / 3;
			//const rects = elt.getBoundingClientRect();
			//const threshold = Math.min(bottomHold / rects.height, 1);
			const [r, g, b]: ColorTuple = members[elt.getAttribute("member-id")].color;
			const focus_color = `rgba(${r}, ${g}, ${b}, 0.2)`;
			elt.style.borderColor = focus_color;
			const observer = new IntersectionObserver(function(entries, observer) {
				entries.forEach(function(entry) {
					// Each entry describes an intersection change for one observed
					    // target element:
					    //   entry.boundingClientRect
					    //   entry.intersectionRatio
					    //   entry.intersectionRect
					    //   entry.isIntersecting
					    //   entry.rootBounds
					    //   entry.target
					    //   entry.time
					if(entry.isIntersecting && entry.intersectionRatio != 0) {
						setTimeout(function() {
							container.style.backgroundColor = focus_color;
							elt.style.opacity = 1;
						}, 10);
					}
				});
			}, {
				root: document.querySelector("#scrollArea"),
				rootMargin: "0px",
				threshold: 1,
			});
			observer.observe(elt.querySelector("img"));
		}
		return () => window.onscroll = undefined;
	});
</script>
<main class="w3-text-white">
	<div id="hero" class="w3-center w3-container">
		<div space></div>
		<div class="img-box">
			<img
				src="https://avatars.githubusercontent.com/u/190141100?s={150}"
				alt="Sbook Logo"
				width="150"
			/>
		</div>
		<h1 class="w3-margin">
			<span>
				The
			</span>
			<span class="w3-block nova-cut">
				Record Breakers
			</span>
		</h1>
	</div>
	<div team-bio>
		<SvelteMarkdown source={team_bio} />
	</div>
	<div member-bios>
		{#each members as member, index}
			<div member-bio member-id={index} class="member-bio w3-container">
				<div member-bio-header>
					<img
						src={member.profile}
						alt={member.name + "'s profile"}
						member-bio-profile
					/>
					<h3 member-bio-name>{member.name}</h3>
				</div>
				<div member-bio-desc class="w3-container">
					<SvelteMarkdown source={member.bio} />
				</div>
			</div>
		{/each}
	</div>
</main>
<style lang="sass">
	div[member-bio]
		margin: auto
		margin:
			top: 200px
			bottom: 200px
		opacity: 0
		transition: 2s
		border-radius: 0 50px 50px 50px
		border:
			size: 1px
			style: solid
	div[member-bio-header]
		max-width: 700px
		position: relative
		display: block
	img[member-bio-profile]
		position: relative
		top: -50px
		left: -50px
		width: 150px
		border-radius: 50px 0 0 0
		//background: radial-gradient(#77f7, #7ff7, #7f77, #ff77, #f777)
	h3[member-bio-name]
		font-size: 3em
		display: inline
	div[member-bio-desc]
		text-justify: newspaper
		overflow-x: hidden
	div[member-bios]
		margin-top: 0!important
		background-image: url('/background.png')
		padding: 50px
		transition: 3s
	main
		display: contents
	#hero
		background-image: url('/background.png')
	div[space]
		height: 20px
	.img-box
		padding: 5px !important
		border: 5px black solid
		width: fit-content
		margin: auto
		margin-top: 50px
	.nova-cut
		font:
			family: 'Nova Cut'
			size: 3em
</style>

