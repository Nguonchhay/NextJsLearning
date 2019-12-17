import Head from 'next/head';
import withLayout from './../components/layouts/withLayout';


const About = () => (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <p>This is the about page</p>
    </div>
);

export default withLayout(About);
