import { Loader2 } from 'lucide-react';

const PleaseWait = () => {
  return (
    <span className="flex items-center">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </span>
  );
};

export default PleaseWait;
