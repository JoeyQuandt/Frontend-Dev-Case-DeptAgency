import Layout from "../components/layout";
import Hero from "../components/hero/Hero";
import Clients from "../components/clients/clients";
import Form from "../components/form/form";
import Work from "../components/work/work";
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clburw2h12zem01t9gdxkagam/master"
);

const QUERY = gql`
  {
    works(first: 20) {
      highlight
      id
      thumbnail {
        url
      }
      subject
      tagline
      highlights {
        title
        description
      }
      typeofWork
    }
  }
`;

export async function getStaticProps() {
  const { works } = await graphcms.request(QUERY);
  return {
    props: {
      works,
    },
    revalidate: 10,
  };
}

export default function Home(works) {
  return (
    <Layout>
      <Hero />
      <Work works={works.works} />
      <Clients />
      <Form />
    </Layout>
  );
}
