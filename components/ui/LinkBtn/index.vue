<template>
  <a :href="href" class="flex flex-row items-end border-b-[#8424DE] cursor-pointer" :class="`text-[${color}]`">
    <p
      :class="`border-b-[${color}]`"
      class="text-lg border-b pb-[1px] leading-[18px]"
    >
      {{ label }}
    </p>
    <img
      src="~/assets/icons/linkbtn-arrow.svg"
      v-show="color == '#808080'"
      class="w-[7px] ml-1"
      alt=""
    />
    <img
      src="~/assets/icons/linkbtn-arrow-color.svg"
      v-show="color == '#8424DE'"
      class="w-[7px] ml-1"
      alt=""
    />
  </a>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    href: { type: String },
    label: { type: String },
    color: {
      type: String,
      default: "#808080",
    },
  },
});
</script>
