/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['fakestoreapi.com']
    },
    redirects: async()=>{
        return [
            {
                source:'/location',
                destination:'/login',
                permanent:false
            },
            {
                source:'/font',
                destination:'/products',
                permanent:false
            }
        ]
    }
}

module.exports = nextConfig
