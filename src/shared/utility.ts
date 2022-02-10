export const UpdateObject = (obj:object, newObject:object) => ({
    ...obj,
    ...newObject,
  });

export const createMarkup = (data:string)=> {
    return {__html: data};
  }
  
export const getTotalSeason = (episodes:any[])=>{
  let filterBySeason:any[] = [];
  for(let episode of episodes){
    let isExist = filterBySeason.some(item=>item.id === episode.season)
    if(!isExist) {
      filterBySeason.push({
        id:episode.season,
        name:`S${episode.season}`
      });
    }
  }
  return filterBySeason
}