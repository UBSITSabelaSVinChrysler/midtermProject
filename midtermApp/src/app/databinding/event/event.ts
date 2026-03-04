import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-binding',
  imports: [FormsModule],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class EventBinding {
  // ─────────────────────────────────────────────────────────────
  // SECTION C: Event Binding Properties
  // These are updated BY the template when the user interacts.
  // The DOM PUSHES data into the component via event handlers.
  // ─────────────────────────────────────────────────────────────
  isButtonDisabled = false;
  buttonLabel = 'Click Me';
  clickCount = 0;

  lastKeyPressed = '';
  mousePosition = { x: 0, y: 0 };

  selectedColor = '#000000';
  typedInput = '';

  selectedFramework = '';
  frameworks = [
    { name: 'angular', value: 'Angular' },
    { name: 'react', value: 'React' },
    { name: 'vue', value: 'Vue' }
  ];

  inputValue = '';
  formMessage = '';
  eventLog: string[] = [];

  onButtonClick() {
    this.clickCount++;
    this.buttonLabel = 'Clicked!';
    this.logEvent('Button clicked');
  }

  onKeyPress(event: KeyboardEvent) {
    this.lastKeyPressed = event.key;
    this.logEvent(`Key pressed: ${event.key}`);
  }

  onMouseMove(event: MouseEvent) {
    this.mousePosition = { x: event.offsetX, y: event.offsetY };
  }

  onMouseEnter() {
    this.logEvent('Mouse entered');
  }

  onMouseLeave() {
    this.logEvent('Mouse left');
  }

  onColorChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedColor = input.value;
    this.logEvent('Color changed');
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.typedInput = input.value;
  }

  onSelectionChange(value: string) {
    this.logEvent(`Framework selected: ${value}`);
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    this.formMessage = `Form submitted with: ${this.inputValue}`;
    this.logEvent('Form submitted');
  }

  onDoubleClick() {
    this.logEvent('Double clicked');
  }

  onRightClick(event: Event) {
    event.preventDefault();
    this.logEvent('Right clicked');
  }

  private logEvent(message: string) {
    this.eventLog.unshift(message);
    if (this.eventLog.length > 5) {
      this.eventLog.pop();
    }
  }
}