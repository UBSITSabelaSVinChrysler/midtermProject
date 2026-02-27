import { Routes } from '@angular/router';
import { Home } from '../app/components/home/home'
import { Property } from './databinding/property/property';
import { TwoWay } from './databinding/two-way/two-way';
import { Attribute } from './databinding/attribute/attribute';
import { Style } from './databinding/style/style';
import { Interpolation } from './databinding/interpolation/interpolation';

export const routes: Routes =[
    {path: 'home', component: Home},
    {path: 'interpolation', component: Interpolation},
    {path: 'property-binding', component: Property},
    {path: 'event-binding', component: Event},
    {path: 'two-way', component: TwoWay},
    {path: 'attribute', component: Attribute},
    {path: 'style', component: Style},
    {path: '',redirectTo:'home', component: Home},

]
