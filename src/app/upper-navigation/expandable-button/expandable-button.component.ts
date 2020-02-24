import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  HostListener
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

export interface ExpandableButtonDataSource {
  title: string;
  icon: string; // Temporary until we decide between FontAwesome or Material Icons
  route: string;
}

/**
 * A button that expands when hovered over revealing all the hidden links or text
 *
 * @param dataSource an input that takes an array which contains data about the links
 */
@Component({
  selector: 'app-expandable-button',
  templateUrl: './expandable-button.component.html',
  styleUrls: ['./expandable-button.component.scss'],
  animations: [
    trigger('expand', [
      state('collapsed', style({ width: '40px' })),
      state('expanded', style({ width: '200px' })),
      transition('expanded <=> collapsed', animate(1000))
    ])
  ]
})
export class ExpandableButtonComponent implements OnInit {
  constructor() {}

  @Input() dataSource: ExpandableButtonDataSource[];

  @HostBinding('@expand') private state: 'collapsed' | 'expanded' = 'collapsed';

  @HostListener('click') toggleExpand() {
    return this.toggle();
  }

  ngOnInit(): void {}

  // Toggles button expansion
  toggle() {
    console.log('Toggled');

    return this.state === 'collapsed' ? 'expanded' : 'collapsed';
  }

  // Expands button
  expand() {
    return (this.state = 'expanded');
  }

  // Collapses button
  collapse() {
    return (this.state = 'collapsed');
  }
}
