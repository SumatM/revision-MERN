'use client'
import { useRouter } from 'next/navigation';

export const Buttons = () => {
    const navigate = useRouter();
  return (
    <div>
      {" "}
      <button onClick={()=>{navigate.push('/')}}>Main Page</button>
    </div>
  );
};
