<template>
  <div
    class="max-w-[246px] h-[246px] p-[20px] rounded-[10px] flex flex-col justify-between"
    :class="`bg-[${color}]`"
  >
    <div>
      <p
        class="text-[14px] leading-[19.6px] max-max-w-[190px] text-[#808080] font-medium"
      >
        <span class="text-[14px] leading-[19.6px] text-[#8424DE] font-medium"
          >Lorem ipsum dolor sit amet</span
        >
        <br />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor
      </p>
    </div>

    <div class="flex flex-row relative cursor-pointer">
      <UiButton label="Обсудить проект" class="max-w-[185px] text-[8px]" />
      <img
        src="~/assets/icons/circle-btn.svg"
        class="absolute right-[-32px] top-[-18px]"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "#E0E0E0",
  },
});

const { color } = props;
</script>
