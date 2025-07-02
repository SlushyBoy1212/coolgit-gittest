var url = prompt();
var ulr = url.split(".");
if(ulr.length = 2){
ulr.reverse()
ulr.push("root")
ulr.reverse()
}
location.replace("https://raw.githubusercontent.com/"+ulr[1]+"/coolgit-"+ulr[2]+"/refs/heads/main/"+ulr[0])
