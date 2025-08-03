<script lang="ts">
	import { cn } from '$lib/Helper'
	import type { Sponsor } from '../../routes/api/sponsors/+server'
	import Clickable from './Clickable.svelte'

	export let sponsor: Sponsor
	export let showImage = false
	export let showSlogan = false
	export let sloganClass = ''
</script>

<Clickable href={sponsor.link} class={cn('flex flex-col items-center gap-4')}>
	{#if showImage && sponsor.image}
		<img
			title={sponsor.name}
			class={cn(
				'size-full self-center justify-self-start rounded-md object-contain',
				$$restProps.class
			)}
			src={sponsor.image}
			alt=""
		/>
	{:else}
		<div
			class={cn(
				'size-full px-1 py-0.5 text-sm  text-slate-100',
				sponsor.link && 'hover:text-cyan-200',
				showImage && 'text-lg'
			)}
		>
			{sponsor.name}
		</div>
	{/if}

	{#if showSlogan && sponsor.slogan}
		<div class={cn('text-center text-sm font-medium text-slate-300', sloganClass)}>
			{sponsor.slogan}
		</div>
	{/if}

	<!-- {#if showLink && sponsor.link}
		<a
			class={cn(
				'rounded bg-primary/10 px-3 py-1.5 text-sm text-cyan-400 outline outline-cyan-700 transition-all hover:scale-105 hover:bg-primary/25 hover:text-primary hover:shadow-lg hover:shadow-primary/70 hover:outline-primary',
				linkClass
			)}
			href={sponsor.link}
			>{sponsor.link
				.replace(/https?:\/\//, '')
				.replace(/\/$/, '')
				.replace(/^www./, '')}</a
		>
	{/if} -->
</Clickable>
