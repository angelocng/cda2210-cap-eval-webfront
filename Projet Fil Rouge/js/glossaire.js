import {Db} from './db.js'
import {Liste} from './liste.js';

let dataInput = document.getElementById('data');

let data=new Liste("../data/glossaire.json");
data.makeData()

dataInput.addEventListener('change', (event)=>{
    data.search(dataInput.value);
})
