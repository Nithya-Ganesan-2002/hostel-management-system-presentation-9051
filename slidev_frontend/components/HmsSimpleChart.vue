<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title?: string
  items: { label: string; value: number; color?: string }[]
  max?: number
}>()

const maxVal = computed(() =>
  props.max ?? Math.max(1, ...props.items.map(i => i.value))
)
</script>

<template>
  <div class="hms-card" style="padding:14px;">
    <div class="section-title">{{ title }}</div>
    <div style="display:flex; flex-direction:column; gap:10px; margin-top:8px;">
      <div v-for="(i, idx) in items" :key="idx" style="display:grid; grid-template-columns: 120px 1fr 60px; align-items:center; gap:10px;">
        <div class="badge">{{ i.label }}</div>
        <div class="hms-progress" :style="{ '--progress': (i.value / maxVal) * 100 + '%' } as any">
          <span :style="{ background: i.color || 'var(--color-primary)' }" />
        </div>
        <div style="text-align:right; color: var(--color-secondary); font-size: 12px;">{{ i.value }}</div>
      </div>
    </div>
  </div>
</template>
