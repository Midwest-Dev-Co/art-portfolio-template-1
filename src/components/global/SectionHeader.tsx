interface IProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
}: IProps) {
  return (
    <header className="px-6 pb-24 sm:pb-32 max-w-2xl text-center mx-auto">
      <p className="text-base font-semibold leading-7 text-purple-600">
        {subtitle}
      </p>
      <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
    </header>
  );
}
