import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'personal-info',
    },
    {
        path: 'personal-info',
        loadComponent: () => import('./views/personal-info/personalInfo.component').then(m => m.PersonalInfoComponent),
    },
    {
        path: 'select-plan',
        loadComponent: () => import('./views/select-plan/selectPlan.component').then(m => m.SelectPlanComponent),
    },
    {
        path: 'pick-add-ons',
        loadComponent: () => import('./views/pick-add-ons/pickAddOns.component').then(m => m.PickAddOnsComponent),
    },
    {
        path: 'finishing-up',
        loadComponent: () => import('./views/finishing-up/finishingUp.component').then(m => m.FinishingUpComponent),
    },
    {
        path: 'finishing-up/thank-you',
        loadComponent: () => import('./views/thank-you/thankYou.component').then(m => m.ThankYouComponent),
    },
    {
        path: '**',
        loadComponent: () => import('./views/not-found/not-found.component').then(m => m.NotFoundComponent),
    }
];
