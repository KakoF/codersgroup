import { useTranslations } from 'next-intl';
import background from '../../../public/imgs/Background.jpg'
import Image from 'next/image';

export default function Hero() {
    const t = useTranslations('Hero');
    return (
        <section className="bg-black relative overflow-hidden">
            <div className="relative w-full h-80 md:h-100 lg:h-150">
                <Image
                    src={background}
                    alt='background'
                    className='object-cover opacity-40'
                    fill
                    quality={100}
                    sizes='100vw'
                    priority
                />
                <div className='flex flex-col items-center justify-start'>
                    <h1 className="relative pt-8 text-white text-5xl font-bold">Coders Group</h1>
                    <p className="relative text-white pt-3">
                        {t('subtitle')}
                    </p>
                </div>

            </div>

        </section >
    );
}

/*import { useTranslations } from 'next-intl';
import background from '../../../public/imgs/back6.png'
import Image from 'next/image';

export default function Hero() {
    const t = useTranslations('Hero');
    return (
        <section className="bg-black relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className='flex flex-col items-center justify-center'>
                    <h1 className="relative pt-8 text-white text-5xl font-bold">Coders Group</h1>
                    <p className="relative text-white pt-3">
                        {t('subtitle')}
                    </p>
                </div>
                <div className="relative w-full h-80 hidden lg:block">
                    <Image
                        src={background}
                        alt='background'
                        className='object-cover opacity-40 border-8 rounded-4xl p-10'
                        fill
                        quality={100}
                        priority
                    />
                </div>
            </div>

        </section >
    );
}*/