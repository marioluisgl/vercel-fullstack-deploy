import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Draw, EnumDrawType } from './models/draw.model';
import { cloneDeep } from 'lodash-es';
import { Helpers } from './core/utils/helpers';
import { HandleDrawService } from './services/handle-draw.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _handleDrawService = inject(HandleDrawService);

  modelData = new Draw();

  numberOne!: number | null;
  numberTwo!: number | null;
  numberThree!: number | null;
  numberFour!: number | null;
  numberFive!: number | null;
  ball!: number | null;


  register() {
    const numbers = [];
    this.modelData.ball = this.ball;
    this.modelData.type = EnumDrawType.POWERBALL;

    if (this.numberOne) {
      numbers?.push(Number(this.numberOne));
      this.numberOne = null;
    }

    if (this.numberTwo) {
      numbers?.push(Number(this.numberTwo));
      this.numberTwo = null;
    }

    if (this.numberThree) {
      numbers?.push(Number(this.numberThree));
      this.numberThree = null;
    }

    if (this.numberFour) {
      numbers?.push(Number(this.numberFour));
      this.numberFour = null;
    }

    if (this.numberFive) {
      numbers?.push(Number(this.numberFive));
      this.numberFive = null;
    }

    if (numbers.length < 5) {
      return;
    }else {
      this.modelData.numbers = numbers;
      this.ball = null;
      let modelDataCopy = cloneDeep(this.modelData);
      modelDataCopy = Helpers.convertToStringify(Helpers.removeNulls(modelDataCopy));

      this._handleDrawService.saveDraw({data: modelDataCopy}).subscribe({
        next: (data) => {
          if (data._id) {
            console.log(data);
          }
        },
        error: (e) => {
          console.log(e);
        },
      });
    }

  }
}
