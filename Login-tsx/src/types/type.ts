export interface User {
    email : string,
    password : string,
    returnSecureToken: boolean
}

export type FormType={
    email: string,
    password : string
}

export type RegisterFormType={
    email: string,
    password : string,
    confirmPassword : string
}