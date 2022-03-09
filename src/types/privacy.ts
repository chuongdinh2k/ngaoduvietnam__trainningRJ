export interface IPolicyAnswer {
    title?: string;
    list?: Array<string>;
}

export interface IPolicyFAQ {
    name?: string;
    subText?: string;
    answers?: Array<IPolicyAnswer>;
}

export interface IPrivacy {
    title?: string;
    lastUpdated?: string;
    subText?: Array<string>;
    listQuestions?: Array<string>;
    listPolicies?: Array<IPolicyFAQ>;
}
