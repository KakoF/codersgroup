import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('Hero');
    return (
        <div>
            <h1>{t('title')}</h1>
        </div>
    );
}