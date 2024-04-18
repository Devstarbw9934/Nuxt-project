<template>
  <div>
    <button
      class="flex items-center rounded-[431.09px] dark:bg-[#212025] border-none px-[30px] py-[12px] gap-[2px]"
      :class="`bg-[${color}]`"
    >
      <p class="text-[#F7F7F7] mr-[5px] text-[14px]">{{ label }}</p>
      <img src="~/assets/icons/rotated-arrow.svg" />
    </button>
  </div>
</template>

<script>
export default defineComponent({
  props: {
    color: {
      type: String,
      default: "#8424DE",
    },
    label: {
      type: String,
      default: "Читать на VC",
    },
  },
});
</script>
