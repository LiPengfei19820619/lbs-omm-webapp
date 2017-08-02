export class OperationResult {
    
    error: ErrorInfo;
}

export class ErrorInfo {
    constructor(public result: string, public reason: string) {
    }
}