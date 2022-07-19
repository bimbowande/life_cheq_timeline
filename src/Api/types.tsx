
export interface Igoals {
    description: string,
    imageUrl: string
}
export interface ITimeline {
    date: string,
    goals:Igoals[]
}


export type TimeLine = ITimeline[]

export default TimeLine