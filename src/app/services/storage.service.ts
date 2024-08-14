import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: Storage;

  constructor(
    private cookieService: CookieService
  ) {
    this.storage = window.localStorage;
   }

  set(key: string, value: any, location: 'local' | 'session' = 'local'){
    if (this.storage && location === 'local'){
    this.storage.setItem(key, value)
    }
    this.cookieService.set(key, value)
  }

  get(key: string, location: 'local' | 'session' = 'local'){
    if(this.storage && location === 'local'){
      const item = this.storage.getItem(key)
      if(item)
      return item
    }
    return this.cookieService.get(key)
  }

  remove(key: string, location: 'local' | 'session' = 'local'){
    if(this.storage && location === 'local'){
      this.storage.removeItem(key)
    }
    this.cookieService.delete(key)
  }

  clear(){
    if(this.storage){
      this.storage.clear()
    }
    this.cookieService.deleteAll()
  }
}
