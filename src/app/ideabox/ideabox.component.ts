import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {IdeaboxOptionComponent} from './ideabox-option/ideabox-option.component';

import { Ideabox } from './ideabox';
import {IdeaboxService} from './ideabox.service';

@Component({
  selector: 'app-ideabox',
  templateUrl: './ideabox.component.html',
  styleUrls: ['./ideabox.component.scss']
})
export class IdeaboxComponent implements OnInit {
  @ViewChild(IdeaboxOptionComponent) ideaboxOptionsChild;
  ideaboxForm = new FormGroup({
    id: new FormControl(0),
    subject: new FormControl('', Validators.required),
    idea: new FormControl('', Validators.required),
    firstName: new FormControl('' , Validators.required),
    lastName: new FormControl('' , Validators.required),
    email: new FormControl('' , Validators.required)
  });



  /*Ideabox*/
  idea: Ideabox[];
  error = '';
  success = '';
/*---------------*/
  ideaboxData = new Ideabox(0, '', '', '', '', '');
/*ideaboxUpdateData = new Ideabox(0, '', '', '', '', '');*/

edit = false;
editID: number;
/*btnText: 'Add an Idea: ';
editText: 'Edit an Idea: ';*/


constructor(private ideaboxService: IdeaboxService, private formBuilder: FormBuilder ) {
}

ngOnInit() {
  this.getIdea();
}

getIdea(): void {
  this.ideaboxService.getAll().subscribe(
    (res: Ideabox[]) => {
      this.idea = res;
    }, (err) => {
      this.error = err;
    }
  );
}

addIdea(form) {
  this.error = '';
  this.success = '';
  /*console.log(f);*/

  this.ideaboxService.store(this.ideaboxData)
    .subscribe(
      (res: Ideabox[]) => {
        // Update
        this.idea = res;

        // Inform the user
        this.success = 'Created successfully';

        /*console.log(this.ideaboxForm);*/

        // Reset the form
        form.reset();
      },
      (err) => this.error = err
    );
}

updateIdea() {
  this.error = '';
  this.success = '';

  this.ideaboxForm.get('id').setValue(this.editID);

  this.ideaboxService.update(this.ideaboxForm.value)
    .subscribe(
      (res: Ideabox[]) => {
        // Update
        this.idea = res;

        // Inform the user
        this.success = 'Created successfully';

        // Reset the form
        this.ideaboxForm.reset();

        // Return
        this.returnForm();
      },
      (err) => this.error = err
    );

}

returnForm() {
  this.edit = false;
  this.editID = null;
  this.ideaboxForm.reset();
}

editIdea(id): void {

  this.editID = id;
  this.edit = true;

  const ideaboxEditIndex = this.idea.findIndex(w => w.id === id);
  const ideaboxEditForm = this.idea[ideaboxEditIndex];

  const ideaboxEdit = this.idea.filter(x => x.id === id);

  this.ideaboxForm.get('subject').setValue(ideaboxEditForm.subject);
  this.ideaboxForm.get('idea').setValue(ideaboxEditForm.idea);
  this.ideaboxForm.get('firstName').setValue(ideaboxEditForm.firstName);
  this.ideaboxForm.get('lastName').setValue(ideaboxEditForm.lastName);
  this.ideaboxForm.get('email').setValue(ideaboxEditForm.email);

}

deleteIdea(id): void {
  this.success = '';
  this.error   = '';

  this.ideaboxService.delete(+id)
    .subscribe(
      (res: Ideabox[]) => {
        this.idea = res;
        this.success = 'Deleted successfully';
      },
      (err) => this.error = err
    );
}

onSubmit() {
  this.error = '';
  this.success = '';

  this.ideaboxService.store(this.ideaboxForm.value)
    .subscribe(
      (res: Ideabox[]) => {
        // Update the list of ideas
        this.idea = res;

        // Inform the user
        this.success = 'Created successfully';

        // Reset the form
        this.ideaboxForm.reset();
      },
      (err) => this.error = err
    );
}

}


