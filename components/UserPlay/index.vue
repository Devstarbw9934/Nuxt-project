<template>
  <div class="flex flex-col items-center">
    <div class="relative">
      <img :src="images[imgUrl]" class="w-[227px] h-[227px]" alt="" />
      <img
        class="absolute top-[185px] left-[149px] cursor-pointer"
        src="~/assets/icons/play.svg"
        alt=""
        @click="{$emit('stateVReview', true); $emit('stateImage', imgUrl)}"
      />
    </div>
    <p
      class="text-[17px] dark:text-[#ECECEC] text-[#212025] leading-[17px] font-semibold mt-[21px]"
    >
      Макарова Александра
    </p>
    <p
      class="text-[12px] text-[#808080] leading-[17px] max-w-[125px] text-center mt-[17px]"
    >
      Управляющий партнёр компании
    </p>
    <div class="mt-[35px]">
      <UiLinkBtn @click="{$emit('stateReview', true); $emit('stateImage', imgUrl)}" label="Cмотреть отзыв" color="#8424DE" />
    </div>
  </div>
</template>

<script setup>
import { filename } from "pathe/utils";

const props = defineProps({
  imgUrl: {
    type: String,
    default: "user-1",
  },
  name: {
    type: String,
  },
  text: {
    type: String,
  },
});
const { imgUrl, name, text } = props;

const glob = import.meta.glob("~/assets/imgs/*.png", { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
</script>
