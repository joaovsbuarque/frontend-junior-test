import { Directive, OnChanges, Input } from "@angular/core";

@Directive({
  selector: "[mySearch]",
})
export class SearchDirective implements OnChanges {
  @Input("mySearch") texto: string | undefined;

  constructor() {
    console.log("mySearch");
  }

  ngOnChanges(): void {
    this.texto;
  }
}
