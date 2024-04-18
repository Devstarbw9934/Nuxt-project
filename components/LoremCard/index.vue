<template>
  <div
    :class="type == `second` ? 'bg-[#8424DE]' : 'bg-[#212025]'"
    class="w-[275px] h-[310px] rounded-[10px] p-7 relative text-[#F7F7F7] flex flex-col justify-between"
  >
    <p class="text-lg font-semibold leading-5">
      <span class="text-[#AB51FF]" v-show="type != 'second'"
        >Lorem ipsum dolor <br
      /></span>

      Lorem ipsum dolor sit <br />
      amet, consectetuer <br />
      adipiscing elit
    </p>

    <div>
      <p class="text-[25px]">{{ numText }}</p>
      <p class="text-[14px] leading-4 max-w-[170px]">
        {{ footerText }}
      </p>
    </div>

    <img
      src="~/assets/imgs/lorem-img.png"
      class="absolute top-[72px] left-[172px]"
      alt=""
      v-show="type != 'second'"
    />

    <div v-show="bt">
      <div class="flex flex-row relative cursor-pointer items-center mb-[10px]">
        <button
          class="rounded-[431.09px] hover:bg-[] bg-[#F7F7F7] border-none px-[22px] py-[18px] flex flex-col justify-center items-center"
          :class="`bg-[${color}]`"
        >
          <p class="text-[#8424DE] text-[17px] leading-[18px] text-center">
            {{ bt }}
          </p>
        </button>
        <img
          src="~/assets/icons/lorem_circle.svg"
          class="absolute right-[-34px] top-[-18px]"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  props: {
    type: {
      type: String,
    },
    bt: {
      type: String,
      default: "",
    },
    headerText: { type: String },
    numText: { type: String },
    footerText: { type: String },
  },
});
</script>
