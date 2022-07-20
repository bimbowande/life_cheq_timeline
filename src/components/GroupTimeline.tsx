import React from 'react'
import { ITimeline,Igoals } from '../Api/types';
import '../styles/components/_grouptimeline.scss';
import { TimelineCard } from './TimelineCards';


export const GroupTimeline:React.FC<ITimeline> = ITimeline => {
  return (
    <div className='timeline_group'>
        <div className='timeline_group_line'></div>
        <div className='timeline_group_cards'>
            {ITimeline?.goals.map((goal:Igoals, index:number) => <TimelineCard text={goal?.description}/>)}
        </div>
    </div>
  )
}
