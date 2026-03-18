import OfficeSceneClient from './components/OfficeSceneClient';
import CharacterGalleryClient from './components/CharacterGalleryClient';
import LoadingScreen from './components/LoadingScreen';
import IconInsta from './components/IconInsta';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full">
      <LoadingScreen />

      <div className="h-[clamp(500px,46.875vw,900px)] relative max-w-[1920px] mx-auto">
        <p className="top-[clamp(2.5rem,4.167vw,5rem)] left-[clamp(2.5rem,4.167vw,5rem)] font-compacta font-normal text-[clamp(1.75rem,2.5vw,3rem)] leading-[1.08] tracking-normal text-center align-middle uppercase absolute z-10">
          панч
        </p>
        <p className="top-[clamp(2.5rem,4.167vw,5rem)] right-[clamp(2.5rem,4.167vw,5rem)] font-compacta font-normal text-[clamp(1.75rem,2.5vw,3rem)] leading-[1.08] tracking-normal text-center align-middle uppercase absolute z-10">
          кластер
        </p>

        <div className="absolute h-[150%] w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <OfficeSceneClient />
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-[clamp(1.25rem,4.167vw,5rem)]">
        <div className="grid grid-cols-10 gap-y-[clamp(2.5rem,4.167vw,5rem)] gap-x-[clamp(0.625rem,1.042vw,1.25rem)] pt-[clamp(3.75rem,6.25vw,7.5rem)]">
          <div className="col-span-5 font-compacta">
            <p className="font-normal text-[clamp(1.75rem,2.5vw,3rem)] leading-[1.08] tracking-normal text-right align-middle uppercase">
              Пространство, где работают и пересекаются три <br /> независимые
              команды
            </p>
          </div>

          <div className="col-span-5 font-kinetika font-medium text-[clamp(0.875rem,0.938vw,1.125rem)] leading-[1.32] tracking-normal flex flex-col gap-[clamp(0.25rem,0.417vw,0.5rem)]">
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

          <div className="col-span-3 flex flex-col gap-[clamp(0.25rem,0.417vw,0.5rem)] items-end">
            <div className="p-[clamp(0.75rem,1.25vw,1.5rem)] border-2 border-dashed border-[#E4E4EC] w-1/2  flex flex-col gap-[clamp(0.25rem,0.417vw,0.5rem)] rounded-sm">
              <p className="font-bold text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] text-right uppercase ">
                Польза
              </p>
              <p className="font-medium text-[clamp(0.875rem,0.938vw,1.125rem)] leading-[1.32] tracking-normal text-right text-[#757382]">
                Креативное агентство
              </p>
            </div>
            <div className="p-[clamp(0.75rem,1.25vw,1.5rem)] border-2 border-dashed border-[#E4E4EC] w-3/4 flex flex-col gap-[clamp(0.25rem,0.417vw,0.5rem)] rounded-sm">
              <p className="font-bold text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] text-right uppercase">
                Анимарома
              </p>
              <p className="font-medium text-[clamp(0.875rem,0.938vw,1.125rem)] leading-[1.32] tracking-normal text-right text-[#757382]">
                Дизайн-проект
              </p>
            </div>
            <div className="p-[clamp(0.75rem,1.25vw,1.5rem)] border-2 border-dashed border-[#E4E4EC] w-full flex flex-col gap-[clamp(0.25rem,0.417vw,0.5rem)] rounded-sm">
              <p className="font-bold text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] text-right uppercase">
                Чудеса
              </p>
              <p className="font-medium text-[clamp(0.875rem,0.938vw,1.125rem)] leading-[1.32] tracking-normal text-right text-[#757382]">
                Студия цифровых продуктов
              </p>
            </div>
          </div>

          <div className="col-span-4 flex justify-center items-center">
            <p className="font-compacta font-normal text-[clamp(6rem,16.042vw,19.25rem)] leading-[0.91] tracking-normal text-center align-middle">
              ПАНЧ
            </p>
          </div>

          <div className="col-span-5 col-start-6 flex gap-[clamp(0.25rem,0.417vw,0.5rem)] flex-wrap relative">
            <div className="bg-[#282635] p-[clamp(0.625rem,1.042vw,1.25rem)] absolute rounded-sm right-1/10 -top-3/5 rotate-12 -z-10">
              <p className="font-medium text-[clamp(0.875rem,0.938vw,1.125rem)] leading-[1.32] tracking-normal text-white ">
                Cобираем людей из разных сфер
              </p>
            </div>
            <div className="p-[clamp(0.5rem,0.833vw,1rem)] border-2 border-dashed border-[#E4E4EC] w-fit  rounded-sm">
              <p className="font-bold text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] text-right uppercase">
                Дизайнеров
              </p>
            </div>

            <div className="p-[clamp(0.5rem,0.833vw,1rem)] border-2 border-dashed border-[#E4E4EC] w-fit  rounded-sm">
              <p className="font-bold text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] text-right uppercase">
                Разработчиков
              </p>
            </div>

            <div className="p-[clamp(0.5rem,0.833vw,1rem)] border-2 border-dashed border-[#E4E4EC] w-fit  rounded-sm">
              <p className="font-bold text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] text-right uppercase">
                Маркетологов
              </p>
            </div>

            <div className="p-[clamp(0.5rem,0.833vw,1rem)] border-2 border-dashed border-[#E4E4EC] w-fit  rounded-sm">
              <p className="font-bold text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] text-right uppercase">
                Предпринимателей
              </p>
            </div>

            <div className="w-fit">
              <p className="font-medium text-[clamp(0.875rem,0.938vw,1.125rem)] leading-[1.32] tracking-normal items-center text-start flex flex-loc justify-center h-full">
                Чтобы делиться опытом, запускать проекты <br /> и создавать
                новые идеи
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-[clamp(1.25rem,4.167vw,5rem)] py-[clamp(3.75rem,6.25vw,7.5rem)]">
        <h2 className="font-compacta font-normal text-[clamp(1.75rem,2.5vw,3rem)] leading-[1.08] tracking-normal align-middle uppercase pb-[clamp(2.5rem,4.167vw,5rem)]">
          Команда нашего пространства
        </h2>
        <CharacterGalleryClient />
      </div>

      <div className="grid grid-cols-[1fr_min(1920px,100%)_1fr] overflow-hidden">
        <div className="col-start-2 px-[clamp(1.25rem,4.167vw,5rem)] grid grid-cols-10 gap-x-[clamp(0.625rem,1.042vw,1.25rem)]">
          <div className="col-span-4 flex flex-1 flex-col justify-between">
            <h2 className="font-compacta font-normal text-[clamp(1.75rem,2.5vw,3rem)] leading-[1.08] tracking-normal align-middle uppercase">
              Где нас найти?
            </h2>
            <div className="flex flex-col gap-[clamp(1rem,1.667vw,2rem)]">
              <div className="flex items-center gap-[clamp(0.625rem,1.042vw,1.25rem)]">
                <Link
                  href="https://www.instagram.com/panch.claster/"
                  target="_blank"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <IconInsta />
                </Link>

                <Link
                  className="font-bold text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] align-middle uppercase"
                  href="tel:89960569519"
                >
                  +7 996 056-95-19
                </Link>
              </div>

              <div className="flex flex-col gap-[clamp(0.25rem,0.417vw,0.5rem)] font-bold text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] align-middle uppercase pb-[clamp(3.75rem,6.25vw,7.5rem)]">
                <p>Красноярский рабочий 150 / строение 46</p>
                <p>{'[этаж 4]'}</p>
              </div>
            </div>
          </div>

          <div className="col-span-6 col-start-5 overflow-hidden h-[clamp(500px,46.875vw,900px)] rounded-sm mr-[-30vw] ">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A62a7e1b1eec43b453cbc05109555ddee78bac96d3db77e4395f32fb9004e8513&amp;source=constructor"
              width="100%"
              height="100%"
              className=" top-0 left-0 w-full h-full min-h-100 border-0 md:grayscale-100 md:hover:scale-125 md:hover:grayscale-0 transition-all duration-300"
              allowFullScreen
              title="Yandex Map"
            />
          </div>
        </div>
      </div>

      <footer className="flex justify-center text-[#757382] py-[clamp(1rem,1.667vw,2rem)]">
        <p className="font-medium text-[clamp(0.875rem,0.938vw,1.125rem)] leading-[1.32] tracking-normal align-middle">
          © 2026 Панч_кластер. Все скриншоты принадлежат их соответствующим
          владельцам
        </p>
      </footer>
    </main>
  );
}
