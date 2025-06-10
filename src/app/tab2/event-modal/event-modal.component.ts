import { Component } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-event-modal',
    standalone: true,
    imports: [CommonModule, IonicModule, ReactiveFormsModule],
    templateUrl: './event-modal.component.html',
    styleUrls: ['./event-modal.component.scss'],
})
export class EventModalComponent {
    eventForm: FormGroup;

    constructor(
        private modalCtrl: ModalController,
        private fb: FormBuilder
    ) {
        this.eventForm = this.fb.group({
            title: ['', Validators.required],
            start: ['', Validators.required],
            end: ['', Validators.required],
            description: [''],
            color: ['#3788d8'],
            completed: [false]
        });
    }

    CANCEL() {
        this.modalCtrl.dismiss(null, 'cancel');
    }

    CONFIRM() {
        if (this.eventForm.valid) {
            this.modalCtrl.dismiss(this.eventForm.value, 'confirm');
        }
    }
}
