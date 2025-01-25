var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productCate = document.getElementById('productCate');
var productDesc = document.getElementById('productDesc');
var addBtn =document.getElementById('addbtn');
var products=[];
var inputs=document.getElementsByClassName('form-control');
var searchInput=document.getElementById('searchinput');
var updateindex;


if (JSON.parse(localStorage.getItem('prodcutsitems')) != null)
{
products=JSON.parse(localStorage.getItem('prodcutsitems'))
displayproduct();
}




addBtn.onclick=function(){
    if(addBtn.innerHTML=="add product"      )
    {
        addproduct();
    } 
    else {
        updateproduct();
    }
    
    displayproduct();
    clearform();
    



    }
 clrbtn.onclick=function(){
    clearform();
 }   

    


function addproduct()
{
    var product={
        name:productName.value,
        price:productPrice.value,
        cate:productCate.value,
        desc:productDesc.value,
    }
    products.push(product)
    localStorage.setItem('prodcutsitems',JSON.stringify(products));


    
}
function displayproduct()
{
    var cartona='';
    for(var i=0; i<products.length; i++)
    { 
        cartona+=`<tr>
                <td>${products[i].name} </td>
                <td>${products[i].price} </td>  
                <td>${products[i].cate}</td>
                <td>${products[i].desc} </td>
                <td> <button class="btn btn-outline-primary disabled " onclick="getelementinfo(${i})"><i class="fa-solid fa-check"></i></button></td>
                <td> <button class="btn btn-outline-danger" onclick="productdelete(${i})"><i class="fa-solid fa-trash"></i></i></button></td>
                
              </tr>`
    }
    document.getElementById('tablebody').innerHTML=cartona;

}

function productdelete(index)
{
    products.splice(index,1);
    displayproduct();
    localStorage.setItem('prodcutsitems',JSON.stringify(products));


}

function clearform()
{
    for (let i = 0; i < inputs.length; i++) {
       inputs[i].value='';
        
    }


}
searchInput.onkeyup=function(){
    var cartona='';
    
    for(var i=0; i<products.length; i++)
        if(products[i].name.toLowerCase().includes(searchInput.value.toLowerCase()))
    { 
        cartona+=`<tr>
                <td>${products[i].name} </td>
                <td>${products[i].price} </td>  
                <td>${products[i].cate}</td>
                <td>${products[i].desc} </td>
                <td> <button class="btn btn-outline-" ><i class="fa-solid fa-check"></i></button></td>
                <td> <button class="btn btn-outline-danger" onclick="productdelete(${i})"><i class="fa-solid fa-trash"></i></i></button></td>
                
              </tr>`
    }
    document.getElementById('tablebody').innerHTML=cartona;
    

}
function getelmentinfo(index)
{
    updateindex=index;
    var currentindex=products[index];
    productNameInput.value=currentindex.name;
    productPriceInput.value=currentindex.price;
    productCateInput.value=currentindex.cate;
    productDescInput.value=currentindex.desc;
    AddBtn.innerHTML="update"

    
}

function updateproduct()
{

    var product={
        name:productNameInput.value,
        price:productPriceInput.value,
        cate:productCateInput.value,
        desc:productDescInput.value,

    }
    products[updateindex]=product;
    localStorage.setItem('productitems',JSON.stringify(products));
    AddBtn.innerHTML='add product ';    


}





