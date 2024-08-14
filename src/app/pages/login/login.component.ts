import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ MessageService ]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private storage: StorageService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      keepLogin: [false]
    });

    if(this.storage.get('userName')){
      this.router.navigate(['/home']);
    }
  }

  login(){
    if(this.loginForm.valid ){
      const location: "local" | "session" = this.loginForm.value.keepLogin ? "local" : "session"
      this.storage.set('userName', this.loginForm.value.username, location)
      const url: string = this.storage.get('blockedUrl') || '/home';
      this.storage.remove('blockedUrl');
      this.router.navigate([url]);
    } else{
      this.messageService.add({severity:'error', summary:'Erro', detail:'Usuário ou senha inválidos'});
    }
  }
}
