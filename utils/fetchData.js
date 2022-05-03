export const postData = async (url,post,token) =>{
    try {
        const res = await fetch(`http://localhost:3000/api/${url}`,{
            method:"POST",
            headers:{
                'Authorization':token
            },
            body:JSON.stringify(post)
        });

        const data =await res.json();
        return data;

    } catch (ex) {
        console.log(ex);
    }
}