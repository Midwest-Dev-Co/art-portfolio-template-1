import Main from '@/components/global/Main';
import ConstructionImage from '@/assets/images/construction.jpg';
import Image from 'next/image';

export default function SinglePortfolioPage() {
  return (
    <Main>
      {/* Under Construction with Construction Image */}
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mt-4">Under Construction</h1>
        <p className="text-sm text-slate-500">
          This page is under construction. Please check back later.
        </p>
        <Image
          src={ConstructionImage}
          alt="Under Construction"
          className="w-1/2"
        />
      </div>
    </Main>
  );
}
