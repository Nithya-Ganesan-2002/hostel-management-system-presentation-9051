<script setup lang="ts">

defineEmits<{ (e: 'action', value: string): void }>()
const actions = [
  { id: 'prev', label: 'Previous', ghost: true },
  { id: 'next', label: 'Next', primary: true },
  { id: 'demo', label: 'Run Demo', accent: true },
]
</script>

<template>
  <div style="display:flex; gap:10px; align-items:center;">
    <button
      v-for="a in actions"
      :key="a.id"
      class="hms-btn"
      :class="{
        'hms-btn--primary': a.primary,
      }"
      :style="a.accent ? 'background: var(--color-accent); color: #111; border-color: transparent' : ''"
      @click="$emit('action', a.id)"
    >
      {{ a.label }}
    </button>
  </div>
</template>
