import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @ViewChild('qEditor') quillEditor;

  @Input() FormControlName: string;
  changeInput = true;
  @Output()
  changeInputEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  formG: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formG = this.fb.group({
      content: new FormControl(null, Validators.required),
    });
  }

  changeInputToTextArea() {
    console.log('Focus');
    this.changeInput = false;
  }

  changeInputToInput() {
    console.log('Blue');
    this.changeInput = true;
    console.log(this.formG.value);
  }

  setFocus(editor: any) {
    editor.focus();
  }

}
