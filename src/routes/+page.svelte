<script lang="ts">
	import Logo from "$lib/Logo.svelte";
	import {MEMBERS} from "$lib/team.ts";
	import { onMount } from 'svelte';

	onMount(() => {
		document.getElementById("members").onmousemove = (e) => {
			const
				x = e.screenX,
				y = e.screenY;
			for(let elt of document.getElementsByClassName("member-profile")) {
				const rect = elt.getBoundingClientRect();
				let difference = Math.abs(rect.x - x);
				let zoom = 130 - 30*(difference / 500);
				elt.style.zoom = `${zoom}%`;
			}
		}
	});
</script>
<div id="front">
	<div id="hero">
		<img
			src="https://avatars.githubusercontent.com/u/190141100?s={150}"
			class="sbook-logo"
			alt="Sbook Logo"
		/>
		<h1>
			<span>
				The
			</span>
			<span>
				Record Breakers
			</span>
		</h1>
	</div>
	<div id="content-side">
		<div id="members">
			{#each MEMBERS as member}
				<div class="member-profile w3-card w3-margin">
					<div class="member-picture w3-display-container">
						<img width="250" src={member.profile_url()} alt={member.name + "'s photo"} />
						<legend class="w3-display-bottommiddle w3-large">{member.name}</legend>
					</div>
					<legend class="member-bio w3-margin-top w3-container">
						{member.bio}
					</legend>
				</div>
			{/each}
		</div>
	</div>
</div>
<style lang="sass">
	#front
		background-image: url(/background.png)
		color: white
	#members
		display: flex
	div.member-profile
		width: 250px
		height: 350px
		transition: 0.3s
		.member-picture
			legend
				width: 100%
				text-align: center
				background-color: #1237
				backdrop-filter: blur(5px)
</style>

