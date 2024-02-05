
import Link from 'next/link';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Home</h1>
      <Link href="/news">Go to News Page</Link>
    </div>
  );
}

export default Home;
