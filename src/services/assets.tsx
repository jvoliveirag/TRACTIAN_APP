import client from './config';

const assetsPath = '/assets';

const ClientAssets = {
    async createAsset(data:{}) {
        try {
            console.log(data)
            const response = await client.post(`${assetsPath}`, data);
            return response;
        } catch (e) {
            return e;
        }
    },
    
    async listAssets() {
        try {
            const response = await client.get(`${assetsPath}`);
            return response;
        } catch (e) {
            return e;
        }
    },

    async listAssetById(data:any) {
        try {
            if(data === 'all' || data === undefined){
                const response = await client.get(`${assetsPath}`);
                return response;
            }
            else{
                const response = await client.get(`${assetsPath}`,{params: {id: data}});
                return response;
            }
        } catch (e) {
            return e;
        }
    },

    async DeleteAssetById(data:number) {
        try {
            const response = await client.delete(`${assetsPath}`,{params: {id: data}});
            return response;
        } catch (e) {
            return e;
        }
    },
};

export default ClientAssets;