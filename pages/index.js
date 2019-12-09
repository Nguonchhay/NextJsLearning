import Head from 'next/head';
import withLayout from './../components/layouts/withLayout';


const Index = () => (
    <div>
        <Head>
          <title>Home</title>
        </Head>
        <p>Hello Next.js</p>
    </div>
);

export default withLayout(Index);
