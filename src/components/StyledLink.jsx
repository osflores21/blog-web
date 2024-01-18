import React from "react";
import Link from "next/link";

const StyledLink = ({ children, href }) => {
    return (
      <div className="text-blue-500 cursor-pointer hover:underline  flex justify-end pb-2">
        <Link href={href} passHref>
          {children}
        </Link>
      </div>
    );
  };
  
export default StyledLink