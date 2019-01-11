import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {PatientsModel} from './home.model';
import {PatientsPostModel} from './home.model';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {PopoverController} from 'ionic-angular';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public dataPatients: PatientsModel = new PatientsModel();
    public dataPatientsPostModel: PatientsPostModel = new PatientsPostModel();
    public columns: any;
    public rows: any;
    loading: any;



    constructor(public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public http: Http,
        public navParams: NavParams,
        public popoverCtrl: PopoverController, ) {

        this.columns = [
            {name: 'NAME'},
            {name: 'MR'},
            {name: 'ID NUM'},
            {name: 'PROV'},
            {name: 'INSURANCE '},
            {name: 'ADDRESS'},
            {name: 'CITY'},
            {name: 'ST'},
            {name: 'PHONE'},
            {name: 'DOB'},
            {name: 'ADMIT'},
            {name: 'DC'},
        ];

        if (typeof navParams.get("dataPatientsPostModel") != "undefined") {
            this.dataPatientsPostModel = navParams.get("dataPatientsPostModel");
        }
        else {
            this.dataPatientsPostModel = null;
        }
    }


    openSearch(myEvent) {

        let dataPatientsPostModel = this.dataPatientsPostModel;
        let popover = this.popoverCtrl.create('AdvancedSearchPage', {"patientsPostModel": dataPatientsPostModel});
        popover.present({
            ev: myEvent,
        });
    }

  


    ionViewDidLoad() {
        this.loading = this.loadingCtrl.create();
        this.loading.present();


        this.getDataPatients()
            .then(data => {
                this.loading.dismiss();
                if (data) {
                } else {
                    console.log("Error at loading patients");
                }


            });
    }



    getDataPatients() {
        let promise = new Promise((resolve, reject) => {

            return this.http.get('./assets/data/patients.json', {})
                .map(res => res.json() as PatientsModel)
                .filter(item=>{
                    
                }).subscribe(resp => {
                    this.dataPatients = resp as PatientsModel;
                    this.rows = this.dataPatients.patientsList;
                    resolve(true);
                },
                err => {
                    console.log(JSON.stringify(err));
                    reject(JSON.stringify(err));
                });
        });
        return promise;
    }


}
