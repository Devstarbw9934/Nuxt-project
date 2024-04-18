<template>
    <div>
        <input class="p-[20px] rounded-[5px] border-none hover:border-none w-[100%] dark:bg-[#2F2E33] h-[45px]" :class="`bg-[${color}]`" :placeholder="label" />
    </div>
</template>

<script>
    export default defineComponent({
        props: {
            label: {
                type: String,
                default: "",
            },
            color: {
                type: String,
                default: "#DBDBDB",
            },
        }
    });
</script>