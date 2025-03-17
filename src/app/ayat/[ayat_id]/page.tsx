import QuranPage from './components/QuranPage';

const Page = async ({ params }: any) => {
  const { ayat_id } = await params;

  return <QuranPage ayat_id={ayat_id} />;
};

export default Page;
