import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSuperButton]',
  standalone: true
})
export class SuperButtonDirective {
  originalText:string = ''

  @HostListener('mouseover') onMouseOver() {
    console.log('ciaoooooo');
    this.originalText = this.el.nativeElement.innerHTML
    this.el.nativeElement.style.backgroundColor='red'
    this.el.nativeElement.style.color='white'
    this.el.nativeElement.style.borderRadius='none'
    this.el.nativeElement.innerHTML='Are you sure?'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.innerHTML = this.originalText
    this.el.nativeElement.style.backgroundColor='white'
    this.el.nativeElement.style.color='purple'
    this.el.nativeElement.style.borderRadius='0.5em'
  }

  constructor(private el: ElementRef) {

    el.nativeElement.style.border='1px solid purple'
    el.nativeElement.style.borderRadius='0.5em'
    el.nativeElement.style.background='none'
    el.nativeElement.style.fontSize='1.2em'
    el.nativeElement.style.padding='0.5em'
    el.nativeElement.style.fontWeight='200'
    el.nativeElement.style.color='purple'
    el.nativeElement.style.transition='background-color 0.5s ease in-out'
  }

}
