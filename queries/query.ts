import { response } from 'express'
import {request} from 'http'

export enum QueryType {
    Get,
    Post
}

export class QueryStruct {
    constructor(host: string, queryType: QueryType) {
        this.host = host
        this.qType = queryType
    }
    // host name
    private host: string
    public SetHost (value: string) {
        this.host = value
    }
    public GetHost (): string {
        return this.host
    }
    // query type
    private qType: QueryType
    public SetQueryType (value: QueryType) {
        this.qType = value
    }
    public GetQueryType (): QueryType {
        return this.qType
    }
}

function getQueryType(inQueryType: QueryType): string {
    switch (inQueryType) {
        case QueryType.Get:
            return 'GET'
        case QueryType.Post:
            return 'POST'
        default:
            return ''
    }
}

export function Send (inQuery: QueryStruct): any {
    const req = request({
        host: inQuery.GetHost(),
        path: '',
        method: getQueryType(inQuery.GetQueryType())
    }, response => {
        req.end()
        return response
    })
    req.end()
}