


export const handleStatus = res =>  res.ok ? res.json() : Promise.reject(res.statusText)

export const log =  data => { 
        console.log(data)
        return data
};

export const timeoutPromise = (milliseconds, promise) => {

        const timeout = new Promise((resolve, reject) => 
                setTimeout(() => 
                        reject(`Limite da promise excedido (limite: ${milliseconds} ms)`), milliseconds
                )
        )
        return Promise.race([timeout,promise])
};

export const delay = milliseconds => data => 
        new Promise(resolve =>  
                        setTimeout(() => resolve(data), milliseconds) 
                 )

export const retry = (retries, milliseconds, fn) =>     
                fn().catch(err => {
                        return  delay(milliseconds)()
                                .then(() => retries > 1 ? 
                                        retry(--retries, milliseconds, fn) : Promise.reject(err) )
                })
