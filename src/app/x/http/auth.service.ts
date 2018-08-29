import { Injectable } from '@angular/core';
import { SessionFactory } from '../storage.utils';
import { userSessionKey } from '../../common/constant.common';

@Injectable()
export class AuthService {

    constructor() { }

    public getToken() {
        return SessionFactory.getItem(userSessionKey).token;
    }

    public setToken(token) {
        localStorage.setItem('token',token);
    }

    public authorize(token): boolean {
        return false;
    }
}