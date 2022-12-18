import Layout from "../components/layout";
import Hero from "../components/hero/Hero";
import Clients from "../components/clients/clients";
import Form from "../components/form/Form";
import Work from "../components/work/work";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Work />
        <Clients />
        <Form />
      </Layout>
    </>
  );
}
