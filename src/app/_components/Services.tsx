import { useTranslations } from 'next-intl';
export default function Services() {
    const t = useTranslations('Services');
    return (
        <div>
            <p>{t('name')}</p>
        </div>
    );
}