import { ThumbDownIcon, ThumbUpIcon } from '@heroicons/react/solid';
import { useState } from 'react';

export default function Clue({ value }: any) {
  const [status, setStatus] = useState<boolean | null>(null);

  return (
    <div className="px-4 pb-4 flex justify-between items-center">
      <div
        className={`transition-all ${status && 'font-bold'} ${
          status === false && 'opacity-25'
        }`}
      >
        {value}
      </div>
      <div className="flex gap-1">
        <button
          className="rounded-full outline-none active:bg-stone-200 p-2"
          onClick={() => (status !== true ? setStatus(true) : setStatus(null))}
        >
          <ThumbUpIcon
            className={`h-6 w-6 text-stone-500 transition-all ${
              status && 'text-green-600'
            }`}
          ></ThumbUpIcon>
        </button>
        <button
          className="rounded-full outline-none transition-all active:bg-stone-200 p-2"
          onClick={() =>
            status !== false ? setStatus(false) : setStatus(null)
          }
        >
          <ThumbDownIcon
            className={`h-6 w-6 text-stone-500 transition-all ${
              status === false && 'text-red-600 '
            }`}
          ></ThumbDownIcon>
        </button>
      </div>
    </div>
  );
}
