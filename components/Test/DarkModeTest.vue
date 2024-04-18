<template>
  <div>
    <p class="dark:bg-black dark:text-white bg-white text-red-700">Menu Item</p>
    <button @click="$colorMode.preference = 'light'">light</button>
    <button @click="$colorMode.preference = 'dark'">dark</button>
  </div>
</template>
