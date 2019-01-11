import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PatientsPostModel} from '../home/home.model';
import { FormGroup, FormControl} from '@angular/forms';
import {HomePage} from '../home/home';

@IonicPage()
@Component({
    selector: 'page-advanced-search',
    templateUrl: 'advanced-search.html',
})
export class AdvancedSearchPage {
    public patientsPostModel: PatientsPostModel;
    search_form: FormGroup;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.patientsPostModel = navParams.get("patientsPostModel");
        this.search_form = new FormGroup({

            mr: new FormControl(),
            name: new FormControl(),
            prov: new FormControl(),
            order: new FormControl(),
            order_by: new FormControl(),
            limit_to: new FormControl(),

        });
    }

    onSubmit(values) {
        let dataPatientsPostModel: PatientsPostModel = new PatientsPostModel();
        dataPatientsPostModel = values as PatientsPostModel;
        this.navCtrl.push(HomePage, {
            dataPatientsPostModel
        })
    }


}
