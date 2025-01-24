import { Component, inject, ViewChild, viewChild } from '@angular/core'
import { User } from '../_models/user'
import { AccountService } from '../_services/account.service'
import { MatTabsModule } from '@angular/material/tabs'
import { CommonModule } from '@angular/common'
import { FormsModule, NgForm } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatButton } from '@angular/material/button'
@Component({
  selector: 'app-profile',
  imports: [MatTabsModule, MatInputModule, MatFormFieldModule, CommonModule, FormsModule, MatSelectModule, MatButton],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  private accountService = inject(AccountService)
  user: User
  @ViewChild('form') form?: NgForm

  constructor() {
    this.user = this.accountService.data()!.user
  }
  onSubmit() {
    this.accountService.updateProfile(this.form?.value)
  }
}
