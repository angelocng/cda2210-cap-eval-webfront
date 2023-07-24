import {Db} from './db.js'

class Liste{
    constructor(_url){
        this.url=_url;
        this.data=[];
    }

    async makeData(){
        this.data=await Db.load(this.url);
        this.data=this.data.glossaire; 
        this.fillDataList();
    }

    fillDataList(){
        let element = document.getElementById("mydatalist");
        let i = 1;
        for (let prop of this.data){
            let option = document.createElement('option');
            option.value = i.toString() + " - " + prop.titre;
            element.appendChild(option);
            ++i;
        }
    }

    search(input){
        let result;
        result=this.data.filter(prop => prop.titre == input.substring(input.indexOf("-")+2));
        try{
            this.fillUI(result[0].corps);
        }
        catch{
            this.fillUI(null)
            console.log("Aucun élément sélectionné");
        }
    }    
    
    fillUI(result=null){
        let element = document.getElementById('result');
        let p = document.createElement('p');
        if (result == null){
            element.innerHTML="";
        }else{
            element.innerHTML=result;
        }
        element.appendChild(p);
    }
}

export {Liste}