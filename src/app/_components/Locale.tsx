import { useTranslations } from 'next-intl';
export default function Hero() {
  const t = useTranslations('Locale');
  return (
    <div className="w-full bg-black text-white text-sm py-2 px-4 flex justify-end">
      <a href='/en' className="mx-2 hover:underline">English</a>
      <a href='/pt' className="mx-2 hover:underline">Português</a>
    </div>
  );
}