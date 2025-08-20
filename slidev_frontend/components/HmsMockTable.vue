<script setup lang="ts">
defineProps<{
  title?: string
  headers: string[]
  rows: Array<Record<string, string | number>>
  note?: string
}>()
</script>

<template>
  <div class="hms-card" style="padding: 12px;">
    <div class="section-title">{{ title }}</div>
    <div class="mock" style="margin-top: 8px; overflow: hidden;">
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th v-for="h in headers" :key="h" style="text-align:left; font-size: 12px; font-weight: 600; padding: 10px; border-bottom: 1px solid var(--border); color: var(--color-secondary);">
              {{ h }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(r, i) in rows" :key="i">
            <td v-for="h in headers" :key="h" style="padding: 10px; border-bottom: 1px solid var(--border);">
              {{ r[h] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="note" style="margin-top: 10px; font-size: 12px; color: var(--color-secondary);">
      {{ note }}
    </div>
  </div>
</template>
