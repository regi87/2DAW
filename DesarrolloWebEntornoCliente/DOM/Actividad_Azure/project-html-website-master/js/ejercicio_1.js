function links()
{
    let arrayLink = document.getElementsByTagName("a");
    let hostnames=[];

  for (let i = 0; i < arrayLink.length; i++) {
      hostnames[i]= arrayLink[i].hostname;
  }    
  let result = new Set(hostnames);
   console.log(result);
}

links();