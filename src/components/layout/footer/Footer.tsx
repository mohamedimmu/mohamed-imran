import Newsletter from "./NewsLetter";
import MainFooter from "./MainFooter";
import BotttomBar from "./BotttomBar";

export default function Footer() {
  return (
    <footer className="mt-24">
      <section className="py-8 md:py-12 border-b border-border mx-auto px-4 max-w-7xl">
        <Newsletter />
      </section>
      <MainFooter />
      <BotttomBar />
    </footer>
  );
}
