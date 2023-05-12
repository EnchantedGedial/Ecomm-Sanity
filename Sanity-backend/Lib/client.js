import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
// Nead to install the packages image builder and create client

 export const client = createClient({

    projectId :'su9hhwdi',
    dataset:'production',
    apiVersion:'2023-05-10',
    useCdn:true,
    token:'skPMjSXNnSyr9O6XIbJmQCITZyCIMmVYBBrOQgrs5Il9rDZNxDR34HMRDbgGZa6swjkuGiov1owuEQh6TGgfKByCwjjZg3xQ6GIZxpuqyvtQqhPXNIrLbcrS2v8gUcFWZPh5mt9wkxSGkcC6H83tCC84Y9haHBr4QzAtuc7b5o1pvsJ1Hdh6'
});

//  this all are like the template to statr our project there is no logic behind this 
//  Just need to do same thing for every project

const builder =imageUrlBuilder(client);
export const urlFor =(source)=>builder.image(source);