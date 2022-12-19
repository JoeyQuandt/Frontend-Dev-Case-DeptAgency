import Head from "next/head";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import {GraphQLCLIENT,gql} from "graphql-request";

const graphcms = new GraphQLCLIENT(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clburw2h12zem01t9gdxkagam/master"
)


const QUERY = gql`
  {
    works {
      highlight,
      id,
      thumbnail {
        url
      }
      subject,
      tagline,
      highlights {
        title
        description
      }
    }
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Front-end Dev Case</title>
        <meta name="description" content="Front-end Dev Case bye Joey Quandt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
