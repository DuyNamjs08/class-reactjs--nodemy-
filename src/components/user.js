import React from 'react';

const User = () => {
     const products = [
        {
            id: 0,
            productName: 'sp 0',
            quantity: 0,
        },
        {
            id: 1,
            productName: 'sp 1',
            quantity: 100,
        },
        {
            id: 2,
            productName: 'sp 2',
            quantity: 20,
        }
    ]
    const style = {
        textAlign: 'left',
        padding: '24px'
    }
    return (
        <div>
            {
                products.map((item,index)=>{
                    return (
                    <div key={index}
                    style={style}>
                        <div>id: {item.id}</div>
                        <div>Name: {item.productName}</div>
                        <div>soluong: {item.quantity}</div>
                    </div>
                    )
                })
            }
        </div>
    )
}   

export default User;