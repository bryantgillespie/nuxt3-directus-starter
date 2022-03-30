<template>
  <div>
    <label
      v-if="label"
      :for="name"
      class="block mb-1 text-sm font-medium text-gray-700"
      >{{ label }}</label
    >
    <div>
      <input
        :value="modelValue"
        :inputmode="type === 'number' ? 'decimal' : 'text'"
        :type="type"
        :name="name"
        :id="name"
        :class="['input', { 'text-right': type === 'number' }]"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>
<script setup>
defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
})
</script>
<style>
.input {
  @apply block w-full text-lg md:text-base border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 placeholder:text-gray-400;
}
</style>
