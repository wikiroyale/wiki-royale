import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}

@NgModule({
	declarations: [],
	imports: [
		TranslateModule
	],
	exports:[ TranslateModule ]
})
export class AppTranslationModule { }
