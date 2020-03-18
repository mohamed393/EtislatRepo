import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { FUSE_CONFIG } from '@etraining/services/config.service';

@NgModule()
export class EtrainingModule
{
    constructor(@Optional() @SkipSelf() parentModule: EtrainingModule)
    {
        if ( parentModule )
        {
            throw new Error('EtrainingModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : EtrainingModule,
            providers: [
                {
                    provide : FUSE_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
