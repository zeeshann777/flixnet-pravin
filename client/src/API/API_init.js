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
        const responce = await fetch("http://localhost:3000/api/v1/database/    ", 
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
    signup = async () => {
        const responce = await fetch("http://localhost:3000/api/v1/auth/create-user", 
        {
            method:"POST",
            headers: {
                'Content-Type':'application/json'
            }
        })
        const data = await responce.json()
        
    }
    login = async () => {
        const responce = await fetch("http://localhost:3000/api/v1/auth/login-user", 
        {
            method:"POST",
            headers: {
                'Content-Type':'application/json'
            }
        })
        const data = await responce.json()
        return data
    }
}




export {auth, database}