import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe.component';
import { ListadoComponent } from '../listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        //--son los componentes que tengo en mi módulo
        HeroeComponent,
        ListadoComponent
    ],
    exports :[
        //--son los componentes de mi módulo que se verán desde fuera
        ListadoComponent
    ],
    imports: [
        //--sólo se importan módulos
        CommonModule
    ]
})
export class HeroesModule {

}