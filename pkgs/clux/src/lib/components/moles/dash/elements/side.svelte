<script lang="ts">
	import { UIcon } from '$lib/components/index.js';
</script>

{#snippet aside()}
	<div class="h-15 flex shrink-0 items-center">
		<UIcon
			class="-ml-1.5 size-[2.5rem] text-amber-500"
			name="i-fluent-location-24-filled rotate-180"
		/>
	</div>
	<nav class="flex flex-1 flex-col">
		<ul role="list" class="flex flex-1 flex-col gap-y-7">
			<li>
				<ul role="list" class="-mx-2 space-y-1">
					<li>
						<!-- Current: "bg-white/5 text-white", Default: "text-neutral-400 hover:text-white hover:bg-white/5" -->
						<a
							href="/"
							class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-neutral-400 hover:bg-white/5 hover:text-white"
						>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								data-slot="icon"
								aria-hidden="true"
								class="size-6 shrink-0 text-neutral-400 group-hover:text-white"
							>
								<path
									d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							Projects
						</a>
					</li>
					<li>
						<a
							href="/"
							class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-neutral-400 hover:bg-white/5 hover:text-white"
						>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								data-slot="icon"
								aria-hidden="true"
								class="size-6 shrink-0 text-neutral-400 group-hover:text-white"
							>
								<path
									d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							Deployments
						</a>
					</li>
					<li>
						<a
							href="/"
							class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-neutral-400 hover:bg-white/5 hover:text-white"
						>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								data-slot="icon"
								aria-hidden="true"
								class="size-6 shrink-0 text-neutral-400 group-hover:text-white"
							>
								<path
									d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							Activity
						</a>
					</li>
					<li>
						<a
							href="/"
							class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-neutral-400 hover:bg-white/5 hover:text-white"
						>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								data-slot="icon"
								aria-hidden="true"
								class="size-6 shrink-0 text-neutral-400 group-hover:text-white"
							>
								<path
									d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							Domains
						</a>
					</li>
					<li>
						<a
							href="/"
							class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-neutral-400 hover:bg-white/5 hover:text-white"
						>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								data-slot="icon"
								aria-hidden="true"
								class="size-6 shrink-0 text-neutral-400 group-hover:text-white"
							>
								<path
									d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							Usage
						</a>
					</li>
					<li>
						<a
							href="/"
							class="group flex gap-x-3 rounded-md bg-white/5 p-2 text-sm/6 font-semibold text-white"
						>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								data-slot="icon"
								aria-hidden="true"
								class="size-6 shrink-0 text-white"
							>
								<path
									d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							Settings
						</a>
					</li>
				</ul>
			</li>
			<li>
				<div class="text-xs/6 font-semibold text-neutral-400">Your teams</div>
				<ul role="list" class="-mx-2 mt-2 space-y-1">
					<li>
						<!-- Current: "bg-white/5 text-white", Default: "text-neutral-400 hover:text-white hover:bg-white/5" -->
						<a
							href="/"
							class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-neutral-400 hover:bg-white/5 hover:text-white"
						>
							<span
								class="flex size-6 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[0.625rem] font-medium text-neutral-400 group-hover:border-white/20 group-hover:text-white"
								>P</span
							>
							<span class="truncate">Planetaria</span>
						</a>
					</li>
					<li>
						<a
							href="/"
							class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-neutral-400 hover:bg-white/5 hover:text-white"
						>
							<span
								class="flex size-6 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[0.625rem] font-medium text-neutral-400 group-hover:border-white/20 group-hover:text-white"
								>P</span
							>
							<span class="truncate">Protocol</span>
						</a>
					</li>
					<li>
						<a
							href="/"
							class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-neutral-400 hover:bg-white/5 hover:text-white"
						>
							<span
								class="flex size-6 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[0.625rem] font-medium text-neutral-400 group-hover:border-white/20 group-hover:text-white"
								>T</span
							>
							<span class="truncate">Tailwind Labs</span>
						</a>
					</li>
				</ul>
			</li>
			<li class="-mx-6 mt-auto">
				<a
					href="/"
					class="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-white/5"
				>
					<img
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
						class="size-8 rounded-full bg-neutral-800 outline -outline-offset-1 outline-white/10"
					/>
					<span class="sr-only">Your profile</span>
					<span aria-hidden="true">Tom Cook</span>
				</a>
			</li>
		</ul>
	</nav>
{/snippet}

<el-dialog>
	<dialog id="sidebar" class="backdrop:bg-transparent xl:hidden">
		<el-dialog-backdrop
			class="data-closed:opacity-0 fixed inset-0 bg-neutral-900/80 transition-opacity duration-300 ease-linear"
		></el-dialog-backdrop>

		<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
		<div tabindex="0" class="fixed inset-0 flex focus:outline-none">
			<el-dialog-panel
				class="group/dialog-panel data-closed:-translate-x-full relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out"
			>
				<div
					class="group-data-closed/dialog-panel:opacity-0 absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out"
				>
					<button
						type="button"
						command="close"
						commandfor="sidebar"
						class="rounded-full border border-white/5 bg-neutral-800 p-0.5"
					>
						<span class="sr-only">Close sidebar</span>
						<UIcon class="size-8 text-white" name="i-fluent-dismiss-circle-24-regular" />
					</button>
				</div>

				<!-- Sidebar component, swap this element with another sidebar if you like -->
				<div
					class="relative flex grow flex-col gap-y-5 overflow-y-auto bg-neutral-900 px-6 ring ring-white/10 before:pointer-events-none before:absolute before:inset-0 before:bg-black/10"
				>
					{@render aside()}
				</div>
			</el-dialog-panel>
		</div>
	</dialog>
</el-dialog>

<!-- Static sidebar for desktop -->
<div class="hidden bg-neutral-900 xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-[20rem] xl:flex-col">
	<!-- Sidebar component, swap this element with another sidebar if you like -->
	<div class="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
		{@render aside()}
	</div>
</div>
