const admintoken = localStorage.getItem('admintoken')
const adminconsfig = {
    headers : {
    'Content-Type': 'multipart/form-data',
    Authorization: admintoken,
    }
}

export default adminconsfig


export const adminconsfig1 = {
    headers : {
    'Content-Type': 'application/json',
    Authorization: admintoken,
    }
}
