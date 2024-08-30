
$(document).ready(function(){
    let apiKey = "AIzaSyAAbXGRT_f0i7ik7i4Y-mFbrkway_5hhoU"
 
    $("form").submit((e) => {
        e.preventDefault()
        let search = $("#search").val()
        videoSearch(apiKey,search,10)
    })
})
 
function videoSearch(apiKey,search,maxResults){
    $("#videos").empty()
    $.get("https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,(data) => {
        console.log(data)
 
        let video = ''
 
        data.items.forEach(item => {
            video = `
            <iframe border="2px solid gray" width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
            `
 
            $("#videos").append(video)
        });
    })
 
}