<template>
    <div class="bg-[url('~/assets/imgs/phone.png')] bg-repeat-no max-w-[375px] px-[45px] pb-[26px] pt-[83px]">
        <div id="user" class="flex gap-[10px] items-center mb-[41px]">
            <img src="~/assets/imgs/phone-avatar.png" width="46px" height="46px"/>
            <div>
                <p cla ss="text-[#212025] font-semibold leading-[12px] text-[10px]">Василий Петров | Канал</p>
                <p class="text-[#212025] font-normal leading-[12px] text-[13px]">12 148 подписчика</p>
            </div>
        </div>
        <div id="message" class="mb-[20px]">
            <p class="text-[#A55369] text-[11px] leading-[13.2px] font-semibold mb-[13px]">Василий Петров  | Канал </p>
            <p class="text-[#000000] text-[12px] leading-[14.52px] font-semibold mb-[20px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget</p>
            <p class="text-[#000000] text-[12px] leading-[14.52px] font-normal mb-[20px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim</p>
            <p class="text-[#000000] text-[11px] leading-[14.52px] font-normal mb-[20px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
            <p class="text-[#000000] text-[11px] leading-[14.52px] font-normal">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
        </div>
        <div class="flex justify-between border-b-[1px] border-[#E4E4E4] pb-[8px]">
            <div class="flex gap-[5px]"> 
                <UiPhoneKit image="~/assets/icons/hare.svg" value="5"/>
                <UiPhoneKit image="~/assets/icons/like_mob.svg" value="11"/>
                <UiPhoneKit image="~/assets/icons/fav.svg" value="2"/>
            </div>
            <div class="flex gap-[5px] items-center">
                <img src="~/assets/icons/view.svg" alt="">
                <p class="text-[8.73px] text-[#A6ABAF] leading-[10.56px] font-semibold">726</p>
                <p class="text-[8.73px] text-[#A6ABAF] leading-[10.56px] font-semibold">9:46</p>
            </div> 
        </div>
        <div class="mt-[12px]">
            <p class="text-[#3C7DA7] text-[10px] leading-[12px] font-normal">2 комментария</p>
        </div>
        <div class="mt-[64px]">
            <UiButton label="Читать в телеграм" class="max-w-[210px] mx-auto"/>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        
    })
</script>