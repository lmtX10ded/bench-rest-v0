import React from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://resttest.bench.co/transactions/',
})


export default async function fetchXtions() {
    console.log('fetchXtions loaded');

    let allXtions = [];
    let combineXtions = [];
    let allPromiseData = [];
    await api
            .get(`1.json`)
            .then( async (response) => {

                allXtions = response.data.transactions;
                for(let i=1;i<5;i++){
                    allPromiseData.push(api.get(`${i}.json`))
                }
                let combineXtions = await Promise.all(allPromiseData);
                {/*console.log(combineXtions.length);*/}
                for(let i=1;i<combineXtions.length;i++){
                    allXtions = allXtions.concat(combineXtions[i].data.transactions);

                }

            })
            .catch( errmsg => {

            })
            return allXtions
}
