<script setup lang="ts">
import { Button, RatingStar } from '@ds'

defineProps<{ msg: string }>()
</script>

<template>
	<Button label="Card Test" variant="primary"></Button>
	<hr />
	<RatingStar />
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
