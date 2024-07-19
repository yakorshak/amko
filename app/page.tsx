import { inter } from "./ui/fonts";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section
        className={`flex items-center justify-center h-screen ${inter.className}`}
      >
        AMKO Digital is coming soon! Stay tuned!
      </section>
      <section
        className={`flex items-center justify-center h-screen bg-red-500 ${inter.className}`}
      >
        hello@amko.digital
      </section>
    </main>
  );
}
