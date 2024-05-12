import Section from '@/components/global/Section';
import SectionHeader from '@/components/global/SectionHeader';

const timeline = [
  {
    name: 'Graduated from SEMO University',
    description:
      'Degree in Graphic Design and Web Development. Minimal design and clean code are my jam.',
    date: 'Aug 2021',
    dateTime: '2021-08',
  },
  {
    name: 'Started working at a design agency',
    description:
      'I learned a lot about design and development, and I was able to work on some really cool projects.',
    date: 'Sep 2021',
    dateTime: '2021-09',
  },
  {
    name: 'Freelance web designer and developer',
    description:
      'I started freelancing to work on projects that I was passionate about and to expand my skillset.',
    date: 'Oct 2022',
    dateTime: '2021-10',
  },
  {
    name: 'Started working on my own projects',
    description:
      'I started working on my own projects to build my portfolio and showcase my skills.',
    date: 'Nov 2023',
    dateTime: '2021-11',
  },
];

export default function About() {
  return (
    <Section name="About">
      {/* Header */}
      {/* <SectionHeader
        title="My Journey"
        subtitle="And here's a little bit about..."
        description="I'm a creative designer and developer with a passion for building beautiful and functional user experiences. I specialize in web design and development, but I'm always looking to expand my skillset and learn new things. I'm currently working on a few projects that I'm really excited about."
      /> */}

      {/* Timeline */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4 pb-16 sm:pb-20 md:pb-24">
        {timeline.map((item) => (
          <div key={item.name}>
            <time
              dateTime={item.dateTime}
              className="flex items-center text-sm font-semibold leading-6 text-purple-600"
            >
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx={2} cy={2} r={2} fill="currentColor" />
              </svg>
              {item.date}
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-slate-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              />
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-slate-900">
              {item.name}
            </p>
            <p className="mt-1 text-base leading-7 text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Info */}
    </Section>
  );
}
