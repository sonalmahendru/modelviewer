window.assets = ['Breakdance','ChickenDance','clapAndSpin','dougie','footShuffle','Gangnam','hipHop','Macarena','Moonwalk','selfie']

export function selectAnimationToPlay(){
    var len = assets.length;
    if(len>1){
        let i = Math.floor(Math.random()*len);
        console.log(i);
        console.log(assets[i]);
        var asset = assets[i];
        assets.splice(i,1);
        return asset;
    }
    return assests[0];         
}

window.playRandomAnimation=()=>{
    var anim = selectAnimationToPlay();
    let asset = "assets/"+anim+".gltf";
    document.querySelector("model-viewer").src=asset;
}

window.loadAR=()=>{
    //playRandomAnimation();
    var viewer = document.getElementById("modelviewer");
    viewer.activateAR()
}