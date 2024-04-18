<template>
    <div class="bg-[#212025] items-center max-w-[275px] h-[349px] rounded-[10px] px-[28px] py-[32px] dark:bg-[#8424DE] text-[#F7F7F7]">
        <div class="bg-gradient-to-t from-black-200 to-black-0 max-w-[211px] h-[53px] absolute mt-[130px] z-50"></div>
        <div class="mb-[34px]">
            <p class="leading-[24px] text-[20px] font-semibold">Cameron Williamson</p>
            <p class="text-[#808080] text-[12px] leading-[16px] font-normal">Управляющий партнёр компании</p>
        </div>
        <div class="h-[130px]">
            <p class="font-normal text-[14px] leading-[19px]">Хочу выразить слова благодарности, нашему постоянному партнеру, уже ставшему другом, компании «ЛАРД». Когда только планировался наш проект, ребята взялись за него с</p>
        </div>
        <img src="~assets/icons/dot.svg" @click="{$emit('stateReview', true); $emit('stateImage', imgUrl)}" class="m-auto cursor-pointer mt-2" alt="">
        <div class="flex flex-row justify-between mt-3">
            <img :src="images[imgUrl]" alt="">
            <UiLinkBtn @click="{$emit('stateReview', true); $emit('stateImage', imgUrl)}" label="Читать отзыв" class="text-[#F7F7F7]"/>
        </div>
    </div>
</template>

<script setup>
import { filename } from "pathe/utils";
import { defineModel, ref } from 'vue';

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
  deg: {
    String,
  },
});
const { imgUrl, name, text, deg } = props;
const stateReview = defineModel("stateReview", { default: true });

const glob = import.meta.glob("~/assets/imgs/*.png", { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
</script>