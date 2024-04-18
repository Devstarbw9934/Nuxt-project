<template>
    <div>
        <button class="rounded-[431.09px] dark:bg-[#F7F7F7] bg-[#212025] border-none w-[100%]"><p class="text-[#F7F7F7] mx-[30px] my-[10px] text-[14px]">{{ label }}</p></button>
    </div>
</template>

<script>
export default defineComponent({
    props: {
        label: {
            type: String,
            default: "",
        }
    },
});
</script>