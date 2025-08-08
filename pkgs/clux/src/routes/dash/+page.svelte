<script lang="ts">
	import { UDash, UIcon } from '$lib/components/index.js';
</script>

<svelte:head>
	<title>Ash</title>
</svelte:head>

<UDash.Side />

<div class="xl:pl-[20rem]">
	<!-- Sticky search header -->
	<div
		class="h-15 sticky top-0 z-40 flex shrink-0 items-center gap-x-6 border-b border-white/5 bg-neutral-900 px-4 sm:px-6 lg:px-8"
	>
		<button
			type="button"
			command="show-modal"
			commandfor="sidebar"
			class="-m-2.5 p-2.5 text-white xl:hidden"
		>
			<span class="sr-only">Open sidebar</span>
			<svg
				viewBox="0 0 20 20"
				fill="currentColor"
				data-slot="icon"
				aria-hidden="true"
				class="size-5"
			>
				<path
					d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
					clip-rule="evenodd"
					fill-rule="evenodd"
				/>
			</svg>
		</button>

		<div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
			<form
				action="#"
				method="GET"
				class="my-2.5 grid max-w-sm flex-1 grid-cols-1 rounded-lg border border-neutral-800/70 bg-neutral-800/50 px-3"
			>
				<input
					name="search"
					placeholder="Search"
					aria-label="Search"
					class="outline-hidden col-start-1 row-start-1 block size-full px-3 pl-8 text-base text-white placeholder:text-neutral-500 sm:text-sm/6"
				/>
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					data-slot="icon"
					aria-hidden="true"
					class="pointer-events-none col-start-1 row-start-1 size-5 self-center text-neutral-500"
				>
					<path
						d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
						clip-rule="evenodd"
						fill-rule="evenodd"
					/>
				</svg>
			</form>
		</div>
	</div>

	<main class="bg-neutral-900">
		<h1 class="sr-only">Account Settings</h1>

		<header class="border-b border-white/5">
			<!-- Secondary navigation -->
			<nav class="flex overflow-x-auto py-4">
				<ul
					role="list"
					class="flex min-w-full flex-none gap-x-6 px-4 text-sm/6 font-semibold text-neutral-400 sm:px-6 lg:px-8"
				>
					<li>
						<a href="/" class="text-amber-400">Account</a>
					</li>
					<li>
						<a href="/" class="">Notifications</a>
					</li>
					<li>
						<a href="/" class="">Billing</a>
					</li>
					<li>
						<a href="/" class="">Teams</a>
					</li>
					<li>
						<a href="/" class="">Integrations</a>
					</li>
				</ul>
			</nav>
		</header>

		<!-- Settings forms -->
		<div class="divide-y divide-white/10">
			<div
				class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"
			>
				<div>
					<h2 class="text-base/7 font-semibold text-white">Personal Information</h2>
					<p class="mt-1 text-sm/6 text-neutral-400">
						Use a permanent address where you can receive mail.
					</p>
				</div>

				<form class="md:col-span-2">
					<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
						<div class="col-span-full flex items-center gap-x-8">
							<img
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
								class="size-24 flex-none rounded-lg bg-neutral-800 object-cover outline -outline-offset-1 outline-white/10"
							/>
							<div>
								<button
									type="button"
									class="inset-ring-1 inset-ring-white/5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
									>Change avatar</button
								>
								<p class="mt-2 text-xs/5 text-neutral-400">JPG, GIF or PNG. 1MB max.</p>
							</div>
						</div>

						<div class="sm:col-span-3">
							<label for="first-name" class="block text-sm/6 font-medium text-white"
								>First name</label
							>
							<div class="mt-2">
								<input
									id="first-name"
									type="text"
									name="first-name"
									autocomplete="given-name"
									class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-neutral-500 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-500 sm:text-sm/6"
								/>
							</div>
						</div>

						<div class="sm:col-span-3">
							<label for="last-name" class="block text-sm/6 font-medium text-white">Last name</label
							>
							<div class="mt-2">
								<input
									id="last-name"
									type="text"
									name="last-name"
									autocomplete="family-name"
									class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-neutral-500 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-500 sm:text-sm/6"
								/>
							</div>
						</div>

						<div class="col-span-full">
							<label for="email" class="block text-sm/6 font-medium text-white">Email address</label
							>
							<div class="mt-2">
								<input
									id="email"
									type="email"
									name="email"
									autocomplete="email"
									class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-neutral-500 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-500 sm:text-sm/6"
								/>
							</div>
						</div>

						<div class="col-span-full">
							<label for="username" class="block text-sm/6 font-medium text-white">Username</label>
							<div class="mt-2">
								<div
									class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-amber-500 sm:text-sm/6"
								>
									<div class="shrink-0 select-none text-base text-neutral-400 sm:text-sm/6">
										example.com/
									</div>
									<input
										id="username"
										type="text"
										name="username"
										placeholder="janesmith"
										class="block min-w-0 grow bg-transparent py-1.5 pl-1 pr-3 text-base text-white placeholder:text-neutral-500 focus:outline-none sm:text-sm/6"
									/>
								</div>
							</div>
						</div>

						<div class="col-span-full">
							<label for="timezone" class="block text-sm/6 font-medium text-white">Timezone</label>
							<div class="mt-2 grid grid-cols-1">
								<select
									id="timezone"
									name="timezone"
									class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pl-3 pr-8 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-neutral-800 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-500 sm:text-sm/6"
								>
									<option>Pacific Standard Time</option>
									<option>Eastern Standard Time</option>
									<option>Greenwich Mean Time</option>
								</select>
								<svg
									viewBox="0 0 16 16"
									fill="currentColor"
									data-slot="icon"
									aria-hidden="true"
									class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-neutral-400 sm:size-4"
								>
									<path
										d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
										clip-rule="evenodd"
										fill-rule="evenodd"
									/>
								</svg>
							</div>
						</div>
					</div>

					<div class="mt-8 flex sm:max-w-xl">
						<button
							type="submit"
							class="w-full rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
							>Save</button
						>
					</div>
				</form>
			</div>

			<div
				class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"
			>
				<div>
					<h2 class="text-base/7 font-semibold text-white">Change password</h2>
					<p class="mt-1 text-sm/6 text-neutral-400">
						Update your password associated with your account.
					</p>
				</div>

				<form class="md:col-span-2">
					<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
						<div class="col-span-full">
							<label for="current-password" class="block text-sm/6 font-medium text-white"
								>Current password</label
							>
							<div class="mt-2">
								<input
									id="current-password"
									type="password"
									name="current_password"
									autocomplete="current-password"
									class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-neutral-500 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-500 sm:text-sm/6"
								/>
							</div>
						</div>

						<div class="col-span-full">
							<label for="new-password" class="block text-sm/6 font-medium text-white"
								>New password</label
							>
							<div class="mt-2">
								<input
									id="new-password"
									type="password"
									name="new_password"
									autocomplete="new-password"
									class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-neutral-500 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-500 sm:text-sm/6"
								/>
							</div>
						</div>

						<div class="col-span-full">
							<label for="confirm-password" class="block text-sm/6 font-medium text-white"
								>Confirm password</label
							>
							<div class="mt-2">
								<input
									id="confirm-password"
									type="password"
									name="confirm_password"
									autocomplete="new-password"
									class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-neutral-500 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-500 sm:text-sm/6"
								/>
							</div>
						</div>
					</div>

					<div class="mt-8 flex sm:max-w-xl">
						<button
							type="submit"
							class="w-full rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
							>Save</button
						>
					</div>
				</form>
			</div>
		</div>
	</main>
</div>
