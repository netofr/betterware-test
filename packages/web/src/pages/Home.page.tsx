import { Layout } from '@/widgets';

function HomePage() {
  return (
    <Layout title="Home" description="Betterware Home Page">
      <section className="mx-auto w-full max-w-5xl text-left">
        <h1 className="mb-2 font-bold">This is just the home page...</h1>
      </section>
    </Layout>
  );
}

export { HomePage };
