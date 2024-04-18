<template>
    <div id="hate" class="w-[23px] rounded-[10px] h-[13px] bg-[#EAF5F9] items-center">
        <img :src="image" alt="">
        <p class="text-[#3C7DA7] text-[10px] leading-[12px] font-normal">{{ value }}</p>
    </div>
</template>

<script>
export default defineComponent({
    image: {
        type: String,
        default: "",
    },
    value: {
        type: String,
        default: "0",
    }
});
</script>