<template>
  <div class="flex flex-col items-center justify-center">
    <div
      class="text-[#808080] dark:bg-[#8424DE] dark:text-[#F7F7F7] px-9 py-4 rounded-[50px] flex flex-col items-center justify-center cursor-pointer hover:bg-[#212025] hover:text-[#F7F7F7] dark:hover:bg-[#EAEAEA] dark:hover:text-[#808080]"
      :class="`bg-[${color}]`"
    >
      <p class="text-[14px] text-center leading-[14px]">{{ label }}</p>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  props: {
    label: String,
    color: String,
  },
});
</script>
