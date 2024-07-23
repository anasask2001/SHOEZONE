const token = localStorage.getItem('token')

const userconsfig = {
    headers : {
    'Content-Type': 'multipart/form-data',
    Authorization: token,
    }
    
}

export default userconsfig