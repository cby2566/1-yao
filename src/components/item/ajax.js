let p = new Promise(prms);
function prms (resolve,reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('get','http://router.111yao.com//sltRouter?method=goodsDetailWapMINAUse&platFormType=wap&goodsId=15091&storeId=6007',true);
    xhr.send();

    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                resolve(xhr.responseText);
            }
        }
    }
}
export default {
    data:'qqq',
    p:p
}