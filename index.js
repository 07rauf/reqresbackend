const express = require('express');
const app = express();

const array = [
    { card: "41682301240", id: 1 },
    { card: '54393201223', id: 2 }
];

app.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const find = array.find(item=>item.id===id)
    if(find){
      res.status(200).json(find)
    } 
    else {
      res.status(404).send('Xeta bas verdi')
    }
})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
