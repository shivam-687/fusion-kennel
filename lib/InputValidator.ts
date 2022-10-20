export type ValidationCondition = (value: string) => boolean | string;

export default class InputValidator {
    private _error: string | undefined;
    private _isValid: boolean;
    constructor(private input: string, private conditions?: ValidationCondition[]) {
        this._error = undefined;
        this._isValid = true;
    }

    validate() {
        if (!this.conditions || this.conditions.length <= 0) return true;
        this.conditions.forEach(cond => {
            if (this._isValid) {
                const result = cond(this.input);
                if (!result) {
                    this._isValid = false;
                    this._error = typeof (result) === 'string' ? result : 'Input error'
                }
            }
        })
        return this._isValid;
    }

    error(){
        return this._error;
    }

    addConditions(validationCondition: ValidationCondition[]){
        if(!this.conditions) {
            this.conditions = validationCondition;
            return this;
        }
        this.conditions = [...this.conditions, ...validationCondition];
        return this;
    }

    setConditions(validationCondition: ValidationCondition[]){
        this.conditions = validationCondition;
        return this;
    }


    static notEmpty(message?: string) {
        return (value: string)=>{
            if (value.trim().length <= 0) return message||'Input must not be empty';
            return true;
        }
    }

    static email(message?: string){
        return (value: string)=> {
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
                return true;
            }
            return message || 'input must be an email'
        }
    }

}