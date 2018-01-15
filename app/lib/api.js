class Api{
    static headers(){
        return {
            'Accept':'application/json',
            'Content-type':'application/json',
            'dataType':'json',
            'X-Requested-With':'XMLHttpRequest',
            'X-Mashape-key':'SHAKEYHERE'
        }
    }
    static post(route,params){
        return this.xhr(route,params,'POST');
    }
    static xhr(route,params,verb){
        const url=`${route}`
        let options=Object.assign({method:verb},params?{body:JSON.stringify(params)}:null);
        options.headers=Api.headers();
        return fetch(url,options).then(resp=>{
            let json=resp.json();
            if(resp.ok){
                return json;
            }
            return json.then(err=>{throw err});
        });
    }
}
export default Api;