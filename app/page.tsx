import OfficeSceneClient from './components/OfficeSceneClient';
import CharacterGalleryClient from './components/CharacterGalleryClient';
import LoadingScreen from './components/LoadingScreen';
import IconInsta from './components/IconInsta';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full">
      <LoadingScreen />

      <div className="h-[900px] relative max-w-[1920px] mx-auto">
        <p className="top-20 left-20 font-compacta font-normal text-[48px] leading-[1.08] tracking-normal text-center align-middle uppercase absolute">
          панч
        </p>
        <p className="top-20 right-20 font-compacta font-normal text-[48px] leading-[1.08] tracking-normal text-center align-middle uppercase absolute">
          кластер
        </p>

        <div className="absolute h-[120vh] w-full -top-64">
          <OfficeSceneClient />
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-20">
        <div className="grid grid-cols-10 gap-y-20 gap-x-5 pt-[120px]">
          <div className="col-span-5 font-compacta">
            <p className="font-normal text-[48px] leading-[1.08] tracking-normal text-right align-middle uppercase">
              Пространство, где работают и пересекаются три <br /> независимые
              команды
            </p>
          </div>

          <div className="col-span-5 font-kinetika font-medium text-[18px] leading-[1.32] tracking-normal flex flex-col gap-2">
            <p>
              Мы сняли большой офис и превратили его в место, где можно не
              только работать <br /> над проектами, но и развивать креативную
              среду города
            </p>
            <p>
              Здесь проходят мастер-классы, встречи, обучающие <br /> программы
              и открытые события
            </p>
          </div>

          <div className="col-span-3 flex flex-col gap-2 items-end">
            <div className="p-6 border-2 border-dashed border-[#E4E4EC] w-1/2  flex flex-col gap-2 rounded-sm">
              <p className="font-bold text-[28px] leading-[1.13] tracking-[-0.01em] text-right uppercase ">
                Польза
              </p>
              <p className="font-medium text-[18px] leading-[1.32] tracking-normal text-right text-[#757382]">
                Креативное агентство
              </p>
            </div>
            <div className="p-6 border-2 border-dashed border-[#E4E4EC] w-3/4 flex flex-col gap-2 rounded-sm">
              <p className="font-bold text-[28px] leading-[1.13] tracking-[-0.01em] text-right uppercase">
                Анимарома
              </p>
              <p className="font-medium text-[18px] leading-[1.32] tracking-normal text-right text-[#757382]">
                Дизайн-проект
              </p>
            </div>
            <div className="p-6 border-2 border-dashed border-[#E4E4EC] w-full flex flex-col gap-2 rounded-sm">
              <p className="font-bold text-[28px] leading-[1.13] tracking-[-0.01em] text-right uppercase">
                Чудеса
              </p>
              <p className="font-medium text-[18px] leading-[1.32] tracking-normal text-right text-[#757382]">
                Студия цифровых продуктов
              </p>
            </div>
          </div>

          <div className="col-span-4 flex justify-center items-center">
            <p className="font-compacta font-normal text-[308px] leading-[0.91] tracking-normal text-center align-middle">
              ПАНЧ
            </p>
          </div>

          <div className="col-span-5 col-start-6 flex gap-2 flex-wrap relative">
            <div className="bg-[#282635] p-5 absolute rounded-sm right-1/10 -top-3/5 rotate-12 -z-10">
              <p className="font-medium text-[18px] leading-[1.32] tracking-normal text-white ">
                Cобираем людей из разных сфер
              </p>
            </div>
            <div className="p-4 border-2 border-dashed border-[#E4E4EC] w-fit  rounded-sm">
              <p className="font-bold text-[28px] leading-[1.13] tracking-[-0.01em] text-right uppercase">
                Дизайнеров
              </p>
            </div>

            <div className="p-4 border-2 border-dashed border-[#E4E4EC] w-fit  rounded-sm">
              <p className="font-bold text-[28px] leading-[1.13] tracking-[-0.01em] text-right uppercase">
                Разработчиков
              </p>
            </div>

            <div className="p-4 border-2 border-dashed border-[#E4E4EC] w-fit  rounded-sm">
              <p className="font-bold text-[28px] leading-[1.13] tracking-[-0.01em] text-right uppercase">
                Маркетологов
              </p>
            </div>

            <div className="p-4 border-2 border-dashed border-[#E4E4EC] w-fit  rounded-sm">
              <p className="font-bold text-[28px] leading-[1.13] tracking-[-0.01em] text-right uppercase">
                Предпринимателей
              </p>
            </div>

            <div className="w-fit">
              <p className="font-medium text-[18px] leading-[1.32] tracking-normal items-center text-start flex flex-loc justify-center h-full">
                Чтобы делиться опытом, запускать проекты <br /> и создавать
                новые идеи
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-20 py-[120px]">
        <h2 className="font-compacta font-normal text-[48px] leading-[1.08] tracking-normal align-middle uppercase pb-20">
          Команда нашего пространства
        </h2>
        <CharacterGalleryClient />
      </div>

      <div className="max-w-[1920px] mx-auto px-20 grid grid-cols-10  gap-x-5">
        <div className="col-span-4 flex flex-1 flex-col justify-between">
          <h2 className="font-compacta font-normal text-[48px] leading-[1.08] tracking-normal align-middle uppercase">
            Где нас найти?
          </h2>
          <div className='flex flex-col gap-8'>
            <div className="flex items-center gap-5">
              <Link
                href="https://www.instagram.com/panch.claster/"
                target="_blank"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <IconInsta />
              </Link>

              <Link
                className="font-bold text-[28px] leading-[1.13] tracking-[-0.01em] align-middle uppercase"
                href="tel:89992223333"
              >
                +7 999 999-99-99
              </Link>
            </div>

            <div className="flex flex-col gap-2 font-bold text-[28px] leading-[1.13] tracking-[-0.01em] align-middle uppercase pb-[120px]">
              <p>Красноярский рабочий 150 / строение 46</p>
              <p>{'[этаж 4]'}</p>
            </div>
          </div>
        </div>

        <div className="col-span-6 overflow-hidden h-[900px] rounded-sm">
        
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A4079059cb6ac2debc99f721e03ad6bd204c472cdb6fbf973323d97072ca14d6a&amp;source=constructor"
            width="100%"
            height="100%"
            className=" top-0 left-0 w-full h-full min-h-100 border-0 md:grayscale-100 md:hover:scale-125 md:hover:grayscale-0 transition-all duration-300"
            allowFullScreen
            title="Yandex Map"
          />
        </div>
      </div>
    </main>
  );
}
