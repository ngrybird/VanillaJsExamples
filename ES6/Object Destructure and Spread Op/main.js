console.log('Object.create, Object.assign ,destructuring, Spread\n')
let Obj = {
	a : 10,
	b : 20
	
}
console.log('Obj : ',Obj)
let ObjectCreate = Object.create(Obj);
console.log('ObjectCreate : ',ObjectCreate) // values copied to proto of ObjectCreate
Obj.a = 30;
console.log('Obj : ' , Obj);
console.log('Obj.a : ' , Obj.a);
console.log('ObjectCreate.a  : ' ,ObjectCreate.a)
ObjectCreate.c = 40;
console.log('Obj.c : ',Obj.c)
//and changing values of base or child obj will reflect to all objects
let ObjectAssign = Object.assign(Obj);
console.log('ObjectAssign  : ',ObjectAssign);
///////////////For Objects in Object
{
	
console.log('Object.create, Object.assign ,destructuring, Spread\n')
let ObjObj = {
	a : 10,
	b : 20,
	d :{
		inner : 'New'
	}
	
}
console.log('ObjObj : ',ObjObj)
let ObjectCreate = Object.create(ObjObj);
console.log('ObjectCreate : ',ObjectCreate) // values copied to proto of ObjectCreate
ObjObj.d.inner = 'Old';
console.log('ObjObj : ' , ObjObj);
console.log('ObjObj.d : ' , ObjObj.d);
console.log('ObjectCreate.d.inner  : ' ,ObjectCreate.d.inner)
ObjectCreate.d.inner = 'Value';
console.log('ObjObj.d : ',ObjObj.d)
//and changing values of base or child obj will reflect to all objects
let ObjectAssign = Object.assign(ObjObj);
console.log('ObjectAssign  : ',ObjectAssign);
	
	
}



let ObjObj4 = {
	a : 10,
	b : 20,
	d :{
		inner : 'New'
	}
	
}
console.log('ObjObj : ',ObjObj)
let ObjectCreate4 = Object.create(ObjObj,{data: {value :'anis',enumerable:true}});

ObjectCreate4 = Object.create(ObjObj);
{}
ObjectCreate4.__proto__ === ObjObj
true
ObjectCreate4.__proto__ === ObjObj.__proto__
false
ObjectCreate4 = Object.assign(ObjObj);
{a: 60, b: 20, d: {…}}
ObjectCreate4.__proto__ === ObjObj.__proto__
true
ObjectCreate4.__proto__ === ObjObj
false