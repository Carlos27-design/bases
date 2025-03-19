import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'hero-page',
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  public name = signal('Ironman');
  public age = signal(45);

  public heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  public capitalizedName = computed(() => this.name().toUpperCase());

  public getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

  public changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  public resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  public changeAge() {
    this.age.set(60);
  }
}
