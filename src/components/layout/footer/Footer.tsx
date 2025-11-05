import Newsletter from "./NewsLetter";
import MainFooter from "./MainFooter";
import BotttomBar from "./BotttomBar";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-8 md:mt-16">
      <section className="py-12 md:py-16 border-b border-border mx-auto px-4 max-w-7xl">
        <Newsletter />
      </section>
      <MainFooter />
      <BotttomBar />
    </footer>
  );
}
