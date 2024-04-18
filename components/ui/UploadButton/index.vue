<template>
    <div>
        <button class="flex items-center rounded-[431.09px] dark:bg-[#8424DE] bg-[#212025] border-none px-[30px] py-[12px] gap-[2px]"><p class="text-[#F7F7F7] mr-[5px] text-[14px]">{{ label }}</p><img src="~/assets/icons/upload.svg"/></button>
    </div>
</template>

<script>
    export default defineComponent({
        props: {
            label: {
            type: String,
            default: "",
            }
        }
    });
</script>