<template>
  <div class="flex flex-row">
    <div class="flex flex-col gap-[13px]">
      <img :src="images[imgUrl]" @click="$emit('stateImage', imgUrl)" alt="" class="w-[85px] h-[85px] cursor-pointer" />
      <p class="text-[#808080] text-center text-xs">Lorem</p>
    </div>
  </div>
</template>

<script setup>
import { filename } from "pathe/utils";

  const props = defineProps({
    imgUrl: {
      type: String,
      default: "lorem-1",
    },
    name: {
      type: String,
    },
  });
  const { imgUrl, name } = props;

  const glob = import.meta.glob("~/assets/imgs/*.png", { eager: true });
  const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
  );
</script>
