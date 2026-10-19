import Section from "./Section";

const sectionsData = [
  {
    title: "Create",
    description: "Creates an empty Git repository in the current folder.",
    command: "git init",
  },
  {
    title: "Rename",
    description: "Renames the current branch to main.",
    command: "git branch -M main",
  },
  {
    title: "Upload",
    description: "Sends the main branch to the remote named origin.",
    command: "git push -u origin main",
  },
  {
    title: "Connect",
    description:
      "Links this local project to your forked repository on GitHub, under the name origin.",
    command:
      "git remote add myfork https://github.com/EspelitaNash/CSIT340-G8-Midterms-Espelita.git",
  },
];

export default function Guide() {
  return (
    <main className="px-20 pt-4">
      {sectionsData.map((section) => (
        <Section
          key={section.title}
          title={section.title}
          description={section.description}
          command={section.command}
        />
      ))}
    </main>
  );
}