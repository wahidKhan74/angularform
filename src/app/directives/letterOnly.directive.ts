import { Directive } from '@angular/core';
import {Validator, AbstractControl, ValidationErrors,ValidatorFn, NG_VALIDATORS} from '@angular/forms';


export function letterOnlyValidtor():ValidatorFn{
    return (control:AbstractControl ): { [ key: string]: any } =>{
        const value = control.value;
        if(value===""){
            return null;
        }   

        const  expression  = { pattern :"^[a-zA-z]+$",message:"Letters only and no spaces."};
        const regExp =  new RegExp(expression.pattern);
        return !regExp.test(value) ? { 'letterOnly': expression.message} :null;
    };
}


@Directive({
    selector :'[dir-letter-only]',
    providers: [{ provide : NG_VALIDATORS, useExisting:LetterOnlyDirective,multi:true}]
})
export class LetterOnlyDirective implements  Validator{

    validate(control: AbstractControl):  { [ key: string]: any } {
        return letterOnlyValidtor()(control);
    }

}

