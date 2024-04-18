<template>
    <div class="flex w-[1161px] h-[279px] dark:bg-[#212025] bg-[#ECECEC] rounded-[10px]">
        <div class="max-w-[50%] px-[34px] py-[35px]">
            <div class="mb-[105px]" id="intro">
                <p class="text-[30px] font-semibold dark:text-[#F7F7F7] text-[#212025] leading-[36px] mb-[27px]">Подпишись на обновления</p>
                <p class="text-[16px] font-normal dark:text-[#F7F7F7] text-[#212025] leading-[22.4px]">Без рекламы и регулярных рассылок</p>
            </div>
            <div class="flex gap-[11px]">
                <div class="max-w-[267px]">
                    <UiCustomInput label="Ваш Email"/>
                </div>
                <div class="max-w-[168.2px]">
                    <UiEmailBtn label="Подписаться" />
                </div>
            </div>
        </div>
        <div class="max-w-[50%]">
            <div class="float-right">
                <img src="~/assets/imgs/filex.png" class="rounded-[10px]"/>
            </div>
            <div class="flex">
                
            </div>
        </div>
    </div>
</template>