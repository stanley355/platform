import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { HOME_HERO_CARDS } from '@/lib/home/constant';

const HomeHeroCards = () => {


  return (
    <div className='p-4 py-8 bg-gray-100 w-full overflow-x-auto overflow-y-visible'>
      <div className='w-max lg:w-full lg:grid lg:grid-cols-6 lg:gap-4'>
        {HOME_HERO_CARDS.map((card: any, index: number) =>
          <a href={card.url} key={card.alt} className={classNames('rounded lg:rounded-lg float-left mr-4 w-[150px] lg:w-full', index === 1 ? "bg-blue-400 text-white " : "bg-white ")}>
            <div className='p-1'>{card.title}</div>
            <Image src={card.src} alt={card.alt} width={100} height={100} className={classNames('rounded lg:rounded-lg w-full h-auto', index === 1 ? "mx-auto p-2" : "")} />
          </a>
        )}
      </div>
    </div>
  )
};

export default HomeHeroCards;