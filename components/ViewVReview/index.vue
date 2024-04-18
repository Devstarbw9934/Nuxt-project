<template>
    <div class="w-[648px] h-[473px] p-[30px] bg-[#212025] rounded-[10px]">
        <div class="flex flex-row justify-between mb-[40px]">
        <div class="flex flex-row gap-[20px]">
            <img :src="images[image]" width="61px" height="61px"/>
            <div>
                <p class="text-[20px] font-semibold leading-[24px] text-[#F7F7F7]">Мамедов Никита</p>
                <p class="text-[12px] font-normal leading-[16px] text-[#808080]">Управляющий партнёр компании</p>
            </div>
        </div>
        <img src="~/assets/icons/v-close.svg" @click="$emit('stateVReview', false)" class="mt-[-35px] cursor-pointer" alt="">
        </div>
        <div>
          <video ref="videoElement" class="video-js h-[300px] w-[588px] rounded-[10px] bg-[#D9D9D9]"></video>
        </div>
    </div>
</template>

<script setup>
import { filename } from "pathe/utils";
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const props = defineProps({
  image: {
    type: String,
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