import { AppComponent } from "./app.component";


export const routarr=[
    {path:'home',component:AppComponent},
    {path:'',redirectTo:'/', pathMatch: 'full' },
    {path:'users',loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule) }
]