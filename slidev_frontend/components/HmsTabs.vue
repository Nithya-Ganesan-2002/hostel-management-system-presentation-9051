<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = defineProps<{
  tabs: { id: string; label: string }[]
  modelValue?: string
}>()

const emit = defineEmits<{ (e: 'update:modelValue', v: string): void }>()

const active = ref(props.modelValue || props.tabs?.[0]?.id || '')

watchEffect(() => {
  if (props.modelValue && props.modelValue !== active.value) {
    active.value = props.modelValue
  }
})

function setActive(id: string) {
  active.value = id
  emit('update:modelValue', id)
}
</script>

<template>
  <div class="hms-card" style="padding: 10px;">
    <div style="display:flex; gap:8px; flex-wrap:wrap;">
      <button
        v-for="t in tabs"
        :key="t.id"
        class="hms-btn"
        :class="active === t.id ? 'hms-btn--primary' : 'hms-btn--ghost'"
        @click="setActive(t.id)"
      >
        {{ t.label }}
      </button>
    </div>
    <div class="mt-2">
      <slot :active="active" />
    </div>
  </div>
</template>

<style scoped>
.mt-2 { margin-top: 12px; }
</style>
