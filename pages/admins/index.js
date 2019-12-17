import Head from 'next/head';
import withLayout from '../../components/layouts/withLayout';


const Admin_Index = () => {
  return (
      <div>
        <Head>
          <title>Dashboard | NextJs</title>
        </Head>
        Dashboard
      </div>
  )
};

export default withLayout(Admin_Index, { isAdmin: true });
