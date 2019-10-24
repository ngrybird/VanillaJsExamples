function myAsyncFunction() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/posts');
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
async function  calls(){
	var r =  await myAsyncFunction().then(res => res );
	console.log(r);	
}
calls()
