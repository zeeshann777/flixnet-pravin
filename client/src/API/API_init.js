class database
{
    getuserinfo = async () => {
        const responce = await fetch("http://localhost:3000/api/v1/database/user-info", 
        {
            method:"GET",
            headers: {
                'Content-Type':'application/json'
            }   
        })
        const data = await responce.json()
        return data
    }
    userupdate = async () => {
        const responce = await fetch("http://localhost:3000/api/v1/database/", 
        {
            method:"POST",
            headers: {
                'Content-Type':'application/json'
            }
        })
        const data = await responce.json()
        return data
    }

    adduserinfo = async () => {
        const responce = await fetch("http://localhost:3000/api/v1/database/add-userinfo", 
        {
            method:"POST",
            headers: {
                'Content-Type':'application/json'
            }
        })
        const data = await responce.json()
        return data
    }
    availableshows = async () => {
        const responce = await fetch("http://localhost:3000/api/v1/database/available-shows", 
        {
            method:"GET",
            headers: {
                'Content-Type':'application/json'
            }
        })
        const data = await responce.json()
        return data
    }
}

class auth
{
    signup = async (email, password) => {
        const senddata = {
            email: email,
            password : password
        }
        const responce = await fetch("http://localhost:3000/api/v1/auth/create-user", 
        {
            method:"POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(senddata)
        });
        const data = await responce.json()
        
    }
}




export {auth, database}