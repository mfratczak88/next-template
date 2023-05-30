import Loading from '@/components/Loading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loading content',
  description: 'Content is loading',
};

const LoadingPage = () => {
  return <Loading />;
};

export default LoadingPage;
