<template>
	<div>
		<header>
			<h2>header</h2>
		</header>
		<main>
			<router-view />
		</main>
		<footer></footer>
	</div>
</template>

<script>
export default {
	name: 'AppLayout',
};
</script>

<style lang="scss" scoped></style>
