export default interface DateTimePicker{
    title: string;
    openButton: string;
    allowDate: boolean;
    allowTime: boolean;
    minTime?: {
        hour: number;
        min: number;
    }
    maxTime?: {
        hour: number;
        min: number;
    }
    disabledDays?: DaysOfTheWeek[];
    sendButton: string; 
}

export enum DaysOfTheWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
}