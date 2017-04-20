/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SqxFrameworkModule } from 'shared';

import {
    AssetComponent,
    AssetsPageComponent
} from './declarations';

const routes: Routes = [
    {
        path: '',
        component: AssetsPageComponent
    }
];

@NgModule({
    imports: [
        SqxFrameworkModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AssetComponent,
        AssetsPageComponent
    ]
})
export class SqxFeatureAssetsModule { }