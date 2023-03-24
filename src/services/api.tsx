import client from './config';

const assetsPath = '/assets';
const userPath = '/users';
const companiesPath = '/companies';
const unitsPath = '/units';
const workordersPath = '/workorders';


const ClientUsers = {
    async createUser(data:{}) {
        try {
            console.log(data)
            const response = await client.post(`${userPath}`, data);
            return response;
        } catch (e) {
            return e;
        }
    },
    
    async listUsers() {
        try {
            const response = await client.get(`${userPath}`);
            return response;
        } catch (e) {
            return e;
        }
    },

    async listById(data:any) {
        try {
            if(data === 'all' || data === undefined){
                const response = await client.get(`${userPath}`);
                return response;
            }
            else{
                const response = await client.get(`${userPath}`,{params: {id: data}});
                return response;
            }
        } catch (e) {
            return e;
        }
    },

    async DeleteById(data:number) {
        try {
            const response = await client.delete(`${userPath}`,{params: {id: data}});
            return response;
        } catch (e) {
            return e;
        }
    },
};

export default ClientUsers;