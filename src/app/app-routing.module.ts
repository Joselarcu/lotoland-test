import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EuroJackpotResultComponent } from './containers/euro-jackpot-result/euro-jackpot-result.component';

const routes: Routes = [
  {
    path: 'results',
    component: EuroJackpotResultComponent,
    data: { animationState: 'results' },
  },

  { path: '', redirectTo: 'results', pathMatch: 'full' },
  { path: '**', redirectTo: '/results' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
