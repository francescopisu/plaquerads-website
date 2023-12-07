import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from './ui/fonts';

export default function Page() {
  return (
    <main className="flex flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {/* <div
            className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
          /> */}
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Carotid Plaque-RADS</strong>: a novel stroke risk classification system
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-16 md:py-12">
          <Image 
            src="/carotid_plaque_rads.png"
            width={1500}
            height={960}
            className="hidden md:block"
            alt='Screenshots of the dashboard project showing desktop version'
          />
          <Image 
            src="/hero-mobile.png"
            width={560}
            height={630}
            className="block md:hidden"
            alt='Screenshots of the dashboard project showing mobile version'
          />
        </div>
      </div>
    </main>
  );
}
