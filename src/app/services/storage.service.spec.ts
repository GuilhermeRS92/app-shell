import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { CookieService } from 'ngx-cookie-service';

fdescribe('StorageService', () => {
  let service: StorageService;
  let storage: Storage;
  let cookie: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
    cookie = TestBed.inject(CookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set value in local storage', () => {
    storage = window.localStorage;
    const spy = spyOn(storage, 'setItem');
    service.set('key', 'value', 'local');
    expect(spy).toHaveBeenCalledWith('key', 'value');
  });

  it('should set value in cookie', () => {
    const spy = spyOn(cookie, 'set');
    service.set('key', 'value', 'session');
    expect(spy).toHaveBeenCalledWith('key', 'value');
  });

  it('should get value from local storage', () => {
    storage = window.localStorage;
    const spy = spyOn(storage, 'getItem').and.returnValue('value');
    expect(service.get('key', 'local')).toBe('value');
    expect(spy).toHaveBeenCalledWith('key');
  });

  it('should get value from cookie', () => {
    const spy = spyOn(cookie, 'get').and.returnValue('value');
    expect(service.get('key', 'session')).toBe('value');
    expect(spy).toHaveBeenCalledWith('key');
  });

  it('should remove value from local storage', () => {
    storage = window.localStorage;
    const spy = spyOn(storage, 'removeItem');
    service.remove('key', 'local');
    expect(spy).toHaveBeenCalledWith('key');
  });

  it('should remove value from cookie', () => {
    const spy = spyOn(cookie, 'delete');
    service.remove ('key', 'session');
    expect(spy).toHaveBeenCalledWith('key');
  });

  it('should clear local storage and cookie', () => {
    storage = window.localStorage;
    const spyLocalStorage = spyOn(storage, 'clear');
    const spyCookie = spyOn(cookie, 'deleteAll');
    service.clear();
    expect(spyLocalStorage).toHaveBeenCalled();
    expect(spyCookie).toHaveBeenCalled();
  });
});
