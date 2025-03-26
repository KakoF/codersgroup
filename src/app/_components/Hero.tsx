import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Hero() {
    const t = useTranslations('Hero');
    return (
        <div>
            <h1>{t('title')}</h1>
        </div>
    );
}