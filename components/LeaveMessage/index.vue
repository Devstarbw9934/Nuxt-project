
<template>
    <div class="rounded-[10px] w-[717px] bg-[#ECECEC] dark:bg-[#212025] px-[82px] py-[87.5px] overflow-auto bar">
        <div id="tile" class="mb-[72px]">
            <p class="font-semibold text-[55px] text-[#212025] dark:text-[#F7F7F7] leading-[66px]">Оставьте ваш запрос</p>
            <p class="font-normal text-[20px] text-[#212025] dark:text-[#F7F7F7] leading-[28px] mt-[20px]">Lorem ipsum dolor sit amet, consectetuer</p>
        </div>
        <div id="topic" class="mb-[68px]">
            <p class="font-semibold text-[25px] text-[#212025] dark:text-[#F7F7F7] leading-[30px]">Тема</p>
            <div id="topics" class="flex flex-col mt-[35px] gap-[14px]">
                <div class="flex gap-[11px]">
                    <UiButton label="Lorem ipsum" />
                    <UiButton label="Dolor sit amet" color="#FFFFFF" dark="#ffffff" textColor="#212025" />
                    <UiButton label="Sit amet" color="#FFFFFF" dark="#ffffff" textColor="#212025" />
                </div>
                <div class="flex gap-[11px]" >
                    <UiButton label="Consectetuer" color="#FFFFFF" dark="#ffffff" textColor="#212025" />
                    <UiButton label="Donec quam felis" color="#FFFFFF" dark="#ffffff" textColor="#212025" />
                    <UiButton label="Curabitur" color="#FFFFFF" dark="#ffffff" textColor="#212025" />
                </div>
            </div>
        </div>
        <div id="describe" class="mb-[75px]">
            <p class="font-semibold text-[25px] text-[#212025] dark:text-[#F7F7F7] leading-[30px]">Опишите задачу</p>
            <div class="mt-[35px] mb-[20px]">
                <UiCustomTextarea/>
            </div>
            <UiUploadButton label="Прикрепить файл"/>
        </div>
        <div id="contact" class="mb-[73px]" >
            <p class="font-semibold text-[25px] text-[#212025] dark:text-[#F7F7F7] leading-[30px]">Контактные данные</p>
            <div id="contacts" class="grid grid-cols-12 gap-[12px] mb-[15px]">
                <div class="col-span-6">
                    <CustomInput label="Ваше имя" />
                </div>
                <div class="col-span-6">
                    <CustomInput label="Ваш телефон" />
                </div>
                <div class="col-span-6">
                    <CustomInput label="Ваш telegram" />
                </div>
                <div class="col-span-6">
                    <CustomInput label="Ваш email" />
                </div> 
            </div>
            <div id="confirm" class="flex">
                <img src="~/assets/icons/checkbox.svg" class="mr-[3px]"/>
                <p class="font-normal text-[17px] leading-[19.6px] text-[#808080] dark:text-[#808080]">Отправляя форму, вы соглашаетесь на обработку <sapn class="font-semibold text-[17px] leading-[19.6px] text-[#212025] dark:text-[#8424DE]">персональных данных</sapn></p>
            </div>
        </div>
        <UiButton label="Отправить" />
    </div>
</template>