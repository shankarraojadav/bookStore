import axios from 'axios';

const url = 'http://localhost:8000';

export const AuthenticateLogin =async (login) => {
    
        try {
           return await axios.post(`${url}/login`, login) 
        } catch (error) {
           
            console.log('error while calling login api', error)
           
        }
}

export const SignupNewUser =async (data) => {
    try {
       return await axios.post(`${url}/signup`, data)
    } catch (error) {
        console.log('error while calling signup api', error)
    }
};


export const AddNewBook = async (book_data) => {
    try {
        return await axios.post(`${url}/addBook`, book_data)
    } catch (error) {
        console.log('error while calling addBook api')
    }
};

export const getBooks =async () => {
     try {
        return await axios.get(`${url}/getbooks`)
     } catch (error) {
        console.log('error while calling getbooks api', error)
     }
};

export const editBookData =async (data, id) => {
     try {
        return await axios.put(`${url}/${id}`, data)
     } catch (error) {
        console.log('error while calling editBook', error)
     }
};

export const getbookById =async (id) => {
    try {
        return await axios.get(`${url}/${id}`)
    } catch (error) {
        console.log('error while calling getbookById', error)
    };
};

export const deleteBook =async (id) => {
    try {
        return await axios.delete(`${url}/${id}`)
    } catch (error) {
        console.log('error while calling deleteBook api', error)
    };
};

export const getBookByAuthor =async (data) => {
    try {
        
        return await axios.post(`${url}/filter`, data)
    } catch (error) {
        console.log('error while calling getAuthor', error)
    };
}