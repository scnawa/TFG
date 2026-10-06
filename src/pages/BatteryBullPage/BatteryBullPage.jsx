import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/ui/Button";
import CtaBand from "../../components/ui/CtaBand";
import FeatureSplit from "../../components/ui/FeatureSplit";
import PageHero from "../../components/ui/PageHero";
import Section from "../../components/ui/Section";

function BatteryBull() {
  return (
    <>
      <Navbar />

      <main id="main">
        <PageHero
          title={
            <>
              BATTERY <em>BULL.</em>
            </>
          }
          lead="Battery and power solutions designed to keep businesses and facilities operating reliably."
        />

        <Section>
          <FeatureSplit
            reverse
            media={
              <iframe
                src="https://www.youtube.com/embed/hKZb7Rk81oM"
                title="Battery Bull forklift battery exchange"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            }
            eyebrow="BATTERY BULL"
            title={
              <>
                Battery <em>Solutions</em>
              </>
            }
            action={
              <Button to="/warehouse-services" variant="outline" arrow>
                Warehouse services
              </Button>
            }
          >
            <p>
              Battery Bull provides dependable power solutions with a focus on
              performance, reliability and long-term support.
            </p>
          </FeatureSplit>
        </Section>

        <CtaBand
          title={
            <>
              TALK TO US ABOUT <em>BATTERY BULL.</em>
            </>
          }
          text="Find out how Battery Bull can fit into your warehouse operation."
        />
      </main>

      <Footer />
    </>
  );
}

export default BatteryBull;
