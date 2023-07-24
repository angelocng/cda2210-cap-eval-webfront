class Db{

    static async load(_url) {
        try {
            let response = await fetch(_url);
            let json = await response.json();
            return json
            
        } catch(error) {
            console.log("Erreur du chargement de la ressource");
        }
    }
}
export {Db}