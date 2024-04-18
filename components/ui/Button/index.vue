<template>
  <div>
    <button
      class="rounded-[431.09px] border-none px-[22px] py-[18px] flex flex-col justify-center items-center"
      :class="`bg-[${color}] dark:bg-[${dark}]`"
    >
      <p
        class="text-[18px] leading-[18px] text-center"
        :class="`text-[${textColor}]`"
      >
        {{ label }}
      </p>
    </button>
  </div>
</template>

<script>
export default defineComponent({
  props: {
    label: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#8424DE",
    },
    dark: {
      type: String,
      default: "#8424DE",
    },
    textColor: {
      type: String,
      default: "#F7F7F7",
    }
  },
});
</script>
