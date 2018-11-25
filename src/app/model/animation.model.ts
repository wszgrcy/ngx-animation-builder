export interface TriggerCore {
    type: number
}
export interface TriggerState extends TriggerCore {
    stateName: string;
    cssStr: string;
}
export interface TriggerTransition extends TriggerCore {
    /**状态变更 */
    stateChangeExpr: string;
    /**选的关键帧名字 */
    keyframeRule: string
}
export interface Trigger {
    id?:number;

    name?: string;
    value?: (TriggerState | TriggerTransition)[]
}
// export type Trigger = TriggerState | TriggerTransition 