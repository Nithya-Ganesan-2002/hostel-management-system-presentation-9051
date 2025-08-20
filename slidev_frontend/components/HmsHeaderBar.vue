<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="hms-header">
    <div style="display:flex; align-items:center; gap:10px;">
      <div class="tag">
        <span class="i-carbon-hotel" />
        Hostel Management System
      </div>
      <strong style="font-size: 16px; letter-spacing: .2px;">{{ title }}</strong>
    </div>
    <div class="hms-footer">
      <span v-if="subtitle">{{ subtitle }}</span>
      <span class="badge">Demo</span>
    </div>
  </div>
</template>
