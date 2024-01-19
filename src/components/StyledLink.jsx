"use client" 
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const StyledLink = ({ children, href }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="text-smalt-500 cursor-pointer hover:underline flex justify-end pb-2">
      {href === 'back' ? (
        <a href="#" onClick={handleClick}>
          {children}
        </a>
      ) : (
        <Link href={href} passHref>
          {children}
        </Link>
      )}
    </div>
  );
};

export default StyledLink;
