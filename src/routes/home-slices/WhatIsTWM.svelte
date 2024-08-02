<script>
	import TitleHeading from '$lib/components/Title/TitleHeading.svelte'
	import TitleSubtile from '$lib/components/Title/TitleSubtile.svelte'
	import Title from '$lib/components/Title/TitleWrapper.svelte'
	import { animateIn } from '$lib/Helper.mjs'
</script>

<section class="relative flex max-w-screen-xl flex-col items-start px-3 text-left md:px-8">
	<Title align="left">
		<TitleSubtile slot="pre" class="text-left !text-primary">It's simple, really</TitleSubtile>
		<TitleHeading slot="title" class="font-medium text-slate-300"
			>But what is a Tiling Window Manager?</TitleHeading
		>
	</Title>

	<div
		class="max-w-prose text-pretty text-lg text-slate-300 md:text-xl lg:text-2xl lg:text-slate-400"
	>
		<p>
			Tradional desktops have floating windows layered upon each other all over the screen.<br />
			Tiling window managers however automatically organizes all apps into a grid, ensuring every window
			has its own space. When you open a new app, instead of floating freely, it snaps into place alongside
			the others—like perfectly fitting pieces of a puzzle. This means no more dragging windows around
			or dealing with clutter; everything is laid out efficiently and neatly how you want it.
		</p>

		<h2>Enter Hyprland Hyprland takes this concept of tiling to the next level.</h2>
		<p>
			It's not just about organizing your workspace—it's about customizing it to reflect your style.
			With Hyprland, you can fine-tune how your windows are arranged, add smooth animations, and
			tweak every visual detail to create a setup that’s as unique as you are.
		</p>
		<p>
			For tech enthusiasts and power users who crave control, efficiency, and a touch of elegance,
			Hyprland offers a dynamic, modern approach to managing your digital environment. It’s the
			ultimate tool for turning your desktop into a clean, organized, and visually stunning space
			that works just the way you want it to.
		</p>

		Fully open-source. Full privacy. For you, your own workflow. You own your desktop.
	</div>
</section>
