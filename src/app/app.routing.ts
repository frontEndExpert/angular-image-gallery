import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery/gallery.component';

const appRoutes: Routes = [
    {path: '', component: GalleryComponent},    
    {path: 'gallery', component: GalleryComponent },
    {path: '**',  redirectTo: 'gallery' },
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);