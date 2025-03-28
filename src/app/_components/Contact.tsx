import { useTranslations } from 'next-intl';
export default function About() {
    const t = useTranslations('Contact');
    return (
        <div>
            <p>{t('name')}</p>
        </div>
    );
}