const {MongoClient}=require('mongodb');
const uri='mongodb://127.0.0.1:27017/test';
const client = new MongoClient(uri);
const orders=[
    {
        _id:1,
        product_id:101,
        quantity: 5,
    },
    {
        _id:2,
        product_id:102,
        quantity:7,
    },
    {_id:3,
        product_id:103,
        quantity:2,
    }
];

const products=[
    {
        _id:101,
        name:'A',
        price:100,
    },
    {
        _id:102,
        name:'B',
        price:200,
    },
    {
        _id:103,
        name:'new',
        proce:500,
    }
];

async function insertData(){
    try{
        await client.connect();
        const db=client.db("mydatabase");
        const order=db.collection("orders");
        await order.insertMany(orders);

        const product=db.collection("products");
        await product.insertMany(products);
        console.log("done");
       
    }
    catch(error){
        console.log(error);
    }
    finally{
        await client.close();
    }
}
insertData();