"use client";

import CharacterCard, { CharacterData } from "./CharacterCard";

const characters: CharacterData[] = [
  {
    modelPath: "/models/people/man_01.glb",
    name: "Иван Петров",
    role: "Frontend Developer",
    skills: ["React", "TypeScript", "Three.js"],
    bio: "Строит интерфейсы, которые не стыдно показать.",
  },
  {
    modelPath: "/models/people/man_02.glb",
    name: "Алексей Смирнов",
    role: "Backend Developer",
    skills: ["Node.js", "PostgreSQL", "Docker"],
    bio: "Отвечает за то, чтобы всё работало под капотом.",
  },
  {
    modelPath: "/models/people/man_03.glb",
    name: "Дмитрий Волков",
    role: "UI/UX Designer",
    skills: ["Figma", "Motion Design", "Prototyping"],
    bio: "Превращает хаос в понятные и красивые интерфейсы.",
  },
  {
    modelPath: "/models/people/man_02.glb",
    name: "Сергей Козлов",
    role: "DevOps Engineer",
    skills: ["Kubernetes", "CI/CD", "Terraform"],
    bio: "Следит за тем, чтобы прод никогда не падал.",
  },
  {
    modelPath: "/models/people/man_01.glb",
    name: "Михаил Новиков",
    role: "Mobile Developer",
    skills: ["React Native", "Swift", "Kotlin"],
    bio: "Пишет приложения, которыми приятно пользоваться.",
  },
  {
    modelPath: "/models/people/man_02.glb",
    name: "Андрей Морозов",
    role: "Product Manager",
    skills: ["Roadmap", "Analytics", "Agile"],
    bio: "Держит команду в нужном направлении.",
  },
  {
    modelPath: "/models/people/man_01.glb",
    name: "Павел Зайцев",
    role: "QA Engineer",
    skills: ["Selenium", "Cypress", "Load Testing"],
    bio: "Ломает всё до того, как это сделают пользователи.",
  },
  {
    modelPath: "/models/people/man_02.glb",
    name: "Николай Соколов",
    role: "Data Engineer",
    skills: ["Python", "Spark", "Airflow"],
    bio: "Строит пайплайны, которые не нужно чинить по ночам.",
  },
  {
    modelPath: "/models/people/man_01.glb",
    name: "Артём Лебедев",
    role: "Security Engineer",
    skills: ["Pentesting", "OWASP", "Zero Trust"],
    bio: "Думает как хакер, чтобы защитить как инженер.",
  },
  {
    modelPath: "/models/people/man_02.glb",
    name: "Виктор Федоров",
    role: "Tech Lead",
    skills: ["Architecture", "Code Review", "Mentoring"],
    bio: "Принимает решения, за которые не стыдно через год.",
  },
];

export default function CharacterGallery() {
  return (
    <section className="py-16 px-8">
      <h2 className="text-white text-3xl font-bold mb-10 tracking-tight">Команда</h2>
      <div className="flex flex-wrap gap-6">
        {characters.map((character) => (
          <CharacterCard key={character.name} character={character} />
        ))}
      </div>
    </section>
  );
}
