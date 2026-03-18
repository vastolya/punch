"use client";

import CharacterCard, { CharacterData } from "./CharacterCard";

const characters: CharacterData[] = [
  {
    modelPath: "/models/people/man_01.glb",
    name: "Алексей Башинский",
    role: "Дизайн",
    skills: ["React", "TypeScript", "Three.js"],
    bio: "Строит интерфейсы, которые не стыдно показать.",
  },
  {
    modelPath: "/models/people/man_02.glb",
    name: "Илья Костенко",
    role: "3D дизигнер",
    skills: ["Node.js", "PostgreSQL", "Docker"],
    bio: "Отвечает за то, чтобы всё работало под капотом.",
  },
  {
    modelPath: "/models/people/man_03.glb",
    name: "Анатолий Васильев",
    role: "Веб Разработка",
    skills: ["Figma", "Motion Design", "Prototyping"],
    bio: "Превращает хаос в понятные и красивые интерфейсы.",
  },
  {
    modelPath: "/models/people/man_04.glb",
    name: "Соня Салтыкова",
    role: "Веб Дизайн",
    skills: ["Kubernetes", "CI/CD", "Terraform"],
    bio: "Следит за тем, чтобы прод никогда не падал.",
  },
  {
    modelPath: "/models/people/man_05.glb",
    name: "Эльдар Мухамедзянов",
    role: "продюсер",
    skills: ["React Native", "Swift", "Kotlin"],
    bio: "Пишет приложения, которыми приятно пользоваться.",
  },
  {
    modelPath: "/models/people/man_06.glb",
    name: "Максим Романов",
    role: "тех. Директор",
    skills: ["Roadmap", "Analytics", "Agile"],
    bio: "Держит команду в нужном направлении.",
  },
  {
    modelPath: "/models/people/man_07.glb",
    name: "Ангелина Баранкова",
    role: "Маркетолог",
    skills: ["Roadmap", "Analytics", "Agile"],
    bio: "Держит команду в нужном направлении.",
  }
];

export default function CharacterGallery() {
  return (
    <section className="grid grid-cols-10 gap-y-5 gap-x-5">

        {characters.map((character) => (
          <CharacterCard key={character.name} character={character} />
        ))}
  
    </section>
  );
}
