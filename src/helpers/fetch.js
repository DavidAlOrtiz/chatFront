const baseUrl = process.env.REACT_APP_APP_URL
const baseUrlAqui = "https://chat-pri.herokuapp.com/api"
export const fetchSinToken = async (enpoint, data, method = "GET")=>{
    const url  = `${baseUrlAqui}/${enpoint}`;
    if(method === "GET"){
        const resp = await fetch(url);
        return await resp.json();
    }else{
        const resp = await fetch(url,{
            method, 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        return await resp.json();
    }
}

export const fetchConToken = async (enpoint, data, method = "GET")=>{
    const url  = `${baseUrlAqui}/${enpoint}`;
    const token = localStorage.getItem('token') || ''
    if(method === "GET"){
        const resp = await fetch(url, {
            headers:{
                'x-token' : token, 
            }
        });
        return await resp.json();
    }else{
        const resp = await fetch(url,{
            method, 
            headers: {
                'Content-Type': 'application/json',
                 'x-token' : token
            },
            body: JSON.stringify(data)
        });

        return await resp.json();
    }
}