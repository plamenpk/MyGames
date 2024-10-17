import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
  id: string;
  slug: string;
  img: StaticImageData;
  children: ReactNode;
}

const CardForm = ({ id, slug, img, children }: CardProps) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
      <div className="relative w-56 h-56">
        <Link href={slug}>
          <Image
            className="rounded-t-lg object-cover"
            src={img}
            alt="Game image"
            fill
          />
        </Link>
      </div>
      <div className="p-5 flex flex-col justify-center">
        <Link href={slug}>
          <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-blue-500  hover:text-blue-800 dark:text-white">
            {children}
          </h5>
        </Link>
        <Link
          href={slug}
          className="inline-flex items-center justify-center font-medium text-center border rounded border-blue-600 text-blue-500 text-xl px-4 py-2 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>

  );
};

export default CardForm;

