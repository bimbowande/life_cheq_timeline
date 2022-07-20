import React from 'react';
import '../styles/components/_timelinecard.scss';

interface ITimelineCards  {
    text?: string,
    image?: string,
    cardColor?: string

}

export const TimelineCard:React.FC<ITimelineCards> = (ITimeLineCards) => {
  return (
    <div className='timeline_card'>
        <div className='timeline_card_inner'></div>
        <p className='timeline_card_text'>{ITimeLineCards?.text}</p>
    </div>
  )
}
