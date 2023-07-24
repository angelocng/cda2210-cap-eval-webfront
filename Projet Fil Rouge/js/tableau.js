import {Db} from './db.js'

class Tableau{
    constructor(_url){
        this.url = _url;
        this.data=[];
    }

    async makeData(){
        this.data = await Db.load(this.url);
        this.data=this.data.termes;
        this.makeTable();
    }

    makeTable(){
        let tbody=document.getElementById("tbody")
        this.data.forEach(line=>{            
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            td1.innerHTML=line.terme;
            td2.innerHTML=line.definition;
            tr.appendChild(td1);
            tr.appendChild(td2);        
            tbody.appendChild(tr);
        })

    }
}
export{Tableau}