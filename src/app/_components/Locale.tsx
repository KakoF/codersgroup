import { useTranslations } from 'next-intl';
export default function Hero() {
    const t = useTranslations('Locale');
    return (
        <div>
            <p>{t('description')}</p>
        </div>
    );
}