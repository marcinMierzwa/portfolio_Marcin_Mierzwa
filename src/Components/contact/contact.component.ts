import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [FormComponent]
})
export class ContactComponent {

}
