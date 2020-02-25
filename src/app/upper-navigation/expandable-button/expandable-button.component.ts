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
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('expand', [
      state('collapsed', style({ width: '40px' })),
      state('expanded', style({ width: '*' })),

      transition(
        'expanded <=> collapsed',
        animate('350ms cubic-bezier(0, 0, 0, 0.9)')
      )
    ])
  ]
})
export class ExpandableButtonComponent implements OnInit {
  constructor() {}

  @Input() dataSource: ExpandableButtonDataSource[] = []

  @HostBinding('@expand')
  public state: 'collapsed' | 'expanded' = 'collapsed';

  @HostListener('mouseenter')
  // Expands button
  expand() {
    return (this.state = 'expanded');
  }

  @HostListener('mouseleave')
  // Collapses button
  collapse() {
    return (this.state = 'collapsed');
  }

  ngOnInit(): void {}

  // Toggles button expansion
  toggle() {
    return (this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed');
  }
}
