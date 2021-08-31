/// <reference types="svelte" />

type IPage = "login" | "home" | "messages"

interface IQueuesCount{
    totalCount: number,
    processedCount: number,
    unProcessedCount: number
}

interface IStatsCardLink{
    href: IPage,
    label: string
}

interface IStatsCardInfo{
    iconClass: string,
    iconColor: string,
    heading: string | number,
    text: string
}

interface IStatsCardProps{
    iconClass: string,
    heading: string | number,
    text: string,
    info?: IStatsCardInfo[],
    link?: IStatsCardLink
}

interface IMessage{
    createdAt: string,
    queueName: string,
    processed: boolean,
    messageContent: Object
}
