import * as dotenv from "dotenv";
dotenv.config();

enum enviromentList { develop = 'develop', production = 'production'};

export const ENVIROMENTS: any = {
    defaultEnviroment: enviromentList.develop,
    enviroments: enviromentList
};

export const GLOBAL_CONFIG: any = {
    develop : {
        config: {
            https: false,
            multipleThreads : true,
            name: 'vercel-fullstack-deploy',
            local: false,
        },
        authorization: {
            secret: 'sdkfjwifcnfhifhusgaligufaougofgacoygfoafyngofygadfonuagnfdugfnaocyufondufgdnoyfugnodfugfdg',
        },
        database: process.env.DATABASE_URI,
        database_local: process.env.DATABASE_LOCAL_URI || '',
        web: {
            name: 'vercel-fullstack-deploy',
            host: 'https://localhost:4200',
        },
    },
    production : {
        config: {
            https: true,
            multipleThreads : true,
            name: 'vercel-fullstack-deploy',
            local: false,
        },
        authorization: {
            secret: 'sdkfjwifcnfhifhusgaligufaougofgacoygfoafyngofygadfonuagnfdugfnaocyufondufgdnoyfugnodfugfdg',
        },
        database: process.env.DATABASE_URI,
        database_local: process.env.DATABASE_LOCAL_URI || '',
        web: {
            name: 'vercel-fullstack-deploy',
            host: 'https://localhost:4200',
        },
    }
}[ENVIROMENTS.defaultEnviroment];