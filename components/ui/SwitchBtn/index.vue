<template>
  <div
    class="cursor-pointer"
    v-on:click="
      $colorMode.value == 'dark'
        ? ($colorMode.preference = 'light')
        : ($colorMode.preference = 'dark')
    "
  >
    <img
      v-show="$colorMode.value == 'light'"
      src="@/assets/icons/light-switch.svg"
      alt=""
    />
    <img
      v-show="$colorMode.value == 'dark'"
      src="@/assets/icons/dark-switch.svg"
      alt=""
    />
  </div>
</template>

<script setup>
const props = defineProps({});

// const { imgUrl, name } = props;
</script>
