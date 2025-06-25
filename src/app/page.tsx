import Image from "next/image";

export default function Home() {
  const greeting : string = "Welcome to my Portfolio";
  return (
    <main>
      <h1>{greeting}</h1>
    </main>
  );
}
