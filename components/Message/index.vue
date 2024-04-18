<template>
    <div class="bg-[#FFFFFF] flex justify-between gap-[64px] w-[100%] rounded-[10px] h-[100%] px-[26px] py-[26px] ">
        <div class="mx-auto">
            <img src="~/assets/icons/black-telegram.svg"/>
            <div class="mt-[20px]">
                <p class="text-[#000000] text-[16px] leading-[19.36px] font-medium">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget</p>
            </div>
            <div class="flex justify-between mt-[50px]">
                <UiLinkBtn label="Читать телеграм" color="#8424DE"/>
                <p class="text-[12px] text-[#808080] font-normal leading-[16.8px]">22.02.2024</p>
            </div>
        </div>
        <div class="w-[100%]" v-show="image">
            <img src="~/assets/imgs/message_image.png" />
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        props:{
            brief: {
                type: String,
                default: "",
            },
            image: {
                type: String,
                default: "",
            },
        },
    })
</script>