
export interface Igoals {
    description: string,
    imageUrl: string
}
export interface ITimeline {
    date: string,
    goals:Igoals[];
    index?:number
}


export type TimeLine = ITimeline[];

export default TimeLine;