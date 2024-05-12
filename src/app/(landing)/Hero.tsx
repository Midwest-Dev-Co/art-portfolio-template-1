import Image from 'next/image';
import ArtStudentImg from '@/assets/images/art_student.jpg';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="Hero"
      className="isolate overflow-hidden bg-gradient-to-b from-purple-100/20 pt-14 relative"
    >
      {/* Decorative element */}
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 md:py-40 lg:px-8">
        {/* Main content */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          {/* Headline */}
          <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:col-span-2 xl:col-auto relative">
            <span>Hi, I&apos;m</span>{' '}
            <span className="text-purple-600 inline-block">
              Maxine Porter<span className="text-slate-900">!</span>
            </span>
            <span className="block mt-4 sm:mt-3 text-slate-800 sm:leading-[1.25] relative text-2xl sm:text-6xl">
              Your Local Missouri{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Creative Designer</span>
                <span className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-200 z-0 -rotate-1 transform -translate-x-2 sm:-translate-x-4 translate-y-1 w-[110%] rounded-lg h-[105%]"></span>
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            {/* Subtitle */}
            <p className="text-lg leading-8 text-slate-600">
              I&apos;m a creative designer based in Missouri, specializing in
              branding, web design, and UI/UX design. I help businesses create a
              unique identity that stands out from the competition. Let&apos;s
              work together to bring your ideas to life!
            </p>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/portfolio"
                className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                View Portfolio
              </Link>
              <Link
                href="#About"
                className="text-sm font-semibold leading-6 text-slate-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <Image
            src={ArtStudentImg}
            alt="Art student painting on canvas"
            className="mt-10 aspect-[4/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2"
          />
        </div>
      </div>

      {/* Gradient overlay Bottom */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </section>
  );
}
