import OfficeSceneClient from './components/OfficeSceneClient';
import CharacterGalleryClient from './components/CharacterGalleryClient';
import LoadingScreen from './components/LoadingScreen';

export default function Home() {
  return (
    <main className="w-full">
      <LoadingScreen />

      <div className="h-screen ">
        <OfficeSceneClient />
      </div>

      <div className="max-w-[1440px] mx-auto flex gap-10 pb-[120px]">
        <h1 className="text-[400px] font-compacta leading-[0.7]">ПАНЧ</h1>
        <div className=' flex flex-col justify-between'>

   
        <p className='text-3xl text-end flex flex-1'>
          пространство, где работают и пересекаются три независимые команды: <br />
          креативное агентство «Польза», дизайн-проект «Анимарома» <br /> и студия
          цифровых продуктов «Чудеса»
        </p>

        <p className="text-3xl text-start flex flex-1 items-end">
          Мы сняли один большой офис и превратили его в место, <br /> где можно не
          только работать над проектами, <br /> но и развивать креативную среду города.
        </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto  flex flex-col gap-20">
    
        <h1 className="text-3xl">
          Здесь проходят мастер-классы, встречи, обучающие программы и открытые
          события. Мы собираем людей из разных сфер — дизайнеров, разработчиков,
          предпринимателей, маркетологов — чтобы делиться опытом, запускать
          проекты и создавать новые идеи.
        </h1>
      </div>

  

      <div className="max-w-[1440px] mx-auto">
        <CharacterGalleryClient />
      </div>
    </main>
  );
}
