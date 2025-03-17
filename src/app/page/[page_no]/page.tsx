import QuranPage from './components/QuranPage';

const Page = async ({ params }: any) => {
  const { page_no } = await params;

  return <QuranPage page_no={page_no} />;
};

export default Page;
