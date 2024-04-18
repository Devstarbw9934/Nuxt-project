<template>
  <div
    class="w-[50px] h-[50px] flex flex-col justify-center items-center bg-[#E0E0E0] rounded-full"
  >
    <img :src="images[imgUrl]" alt="" />
  </div>
</template>

<script setup>
import { filename } from "pathe/utils";

const props = defineProps({
  imgUrl: {
    type: String,
    default: "telegram-light",
  },
  name: {
    type: String,
  },
});
const { imgUrl, name } = props;

const glob = import.meta.glob("~/assets/icons/*.svg", { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
</script>
