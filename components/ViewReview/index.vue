<template>
    <div class="w-[510px] h-[473px] p-[30px] bg-[#212025] rounded-[10px]">
         <div class="flex flex-row justify-between mb-[40px]">
            <div class="flex flex-row gap-[20px]">
                <img :src="images[image]" width="61px" height="61px"/>
                <div>
                    <p class="text-[20px] font-semibold leading-[24px] text-[#F7F7F7]">Мамедов Никита</p>
                    <p class="text-[12px] font-normal leading-[16px] text-[#808080]">Управляющий партнёр компании</p>
                </div>
            </div>
            <img src="~/assets/icons/v-close.svg" @click="$emit('stateReview', false)" class="mt-[-35px] cursor-pointer" alt="">
         </div>
        <NuxtScrollbar tag="aside" @ps-scroll-y="onScroll">
            <div class="h-[300px] text-[#F7F7F7]">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. </p>
            </div>
        </NuxtScrollbar>
    </div>
</template>

<script setup>
import { filename } from "pathe/utils";

const props = defineProps({
  image: {
    type: String,
    default: 'user-2'
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