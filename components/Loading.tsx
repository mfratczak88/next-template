import { Loader2 } from 'lucide-react';
import Logo from './Logo';

const Loading = () => {
  return (
    <div className="flex flex-col items-center w-full absolute top-[35%] gap-6">
      <Logo className="h-[64px] w-[64px]" />
      <Loader2 className="h-[32px] w-[32px] animate-spin" />
    </div>
  );
};

export default Loading;
