export enum PointType {
    empty = 0,
    player = 1,
    opponent = 2,
}

export enum PointStatus {
    absent = 'absent',
    capturing = 'capturing',
    is_capturing = 'is_capturing',
}

export interface IPoint {
    type: PointType;
    status: PointStatus;
}

export interface MoveResposneType {
    message: string;
    payload: {
        matrixAfterOpponentMoved: IPoint[][];
        matrixAfterPlayerMoved: IPoint[][];
    };
}
