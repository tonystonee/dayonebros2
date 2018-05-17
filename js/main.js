function selectFrom(lowerValue,upperValue){
	var choices = upperValue-lowerValue + 1;
	return Math.floor(Math.random() * choices +lowerValue);
}
function appendVideoShit(videoId,title,description){
	if ($('.player').children('iframe')){    //make sure only one at a time
		removeVideoShit();
	}
	$('.player').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+videoId+'?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
	$('.title').append(title);
	$('.description').children('p').append(description);

	getRelatedVideos(videoId);
}
function removeVideoShit(){
	$('.description').children("p").empty();
	$('.title').empty();
	$('.player').children().remove();
}
function mainReel(){
	//home page reel
	var url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA2surjYpInK_ft0gWD0R__XQ05zbaptCQ';
	var vidList = [];
	var currentVideo;
	$.getJSON(url,function(data){
		$.each(data.items,function(key,val){

			var vid = {
				videoId:val.id,
				title:val.snippet.title,
				description:val.snippet.description,
				thumbnail:val.snippet.thumbnails.medium.url
			}

			vidList.push(vid);
		});

	}).done(function(){
		// initialize variables
		var index, videoId, title, description;
		index = selectFrom(0,vidList.length-1);
		video = vidList[index];
		videoId = video.videoId;
		title = video.title;
		description = video.description;
		currentVideo = video;
		appendVideoShit(videoId,title,description);



	})

}
function grabVid(categoryId){
	//other pages reel
	var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&orderBy=viewCount&regionCode=us&relevanceLanguage=en&type=video&videoCategoryId='+categoryId+'&key=AIzaSyA2surjYpInK_ft0gWD0R__XQ05zbaptCQ';
	var vidList = [];
	var currentVideo;
	$.getJSON(url,function(data){

		$.each(data.items,function(key,val){
			var vid = {
				videoId:val.id.videoId,
				title:val.snippet.title,
				description:val.snippet.description
			}
			vidList.push(vid);

		});

	}).done(function(){
		// initialize variables

		var index,video,videoId,title,description;
		index = selectFrom(0,vidList.length-1);
		video = vidList[index];
		videoId = video.videoId;
		title = video.title;
		description = video.description;

		appendVideoShit(videoId,title,description);

	});

}
function topTen(currentDate){
	var categoryString = categoryId ? '&videoCategoryId='+categoryId : '';
	var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=10&orderby=viewCount&publishedAfter='+currentDate+'&regionCode=us&relevanceLanguage=en&type=video'+categoryString+'&key=AIzaSyA2surjYpInK_ft0gWD0R__XQ05zbaptCQ';
	var vidList = [];

		$.getJSON(url,function(data){

		$.each(data.items,function(key,val){
			var vid = {
				videoId:val.id.videoId,
				title:val.snippet.title,
				description:val.snippet.description,
				pic:val.snippet.thumbnails.medium.url
			}
			vidList.push(vid);

		});

	}).done(function(){
		var i;

		$('.vidBox').click(function(){
			var index, video;
			index = $(this).index();
			video = vidList[index];
			removeVideoShit();
			$('.player').append('<iframe width="420" height="315" src="https://www.youtube.com/embed/'+video.videoId+'" frameborder="0" allowfullscreen></iframe>');
			$('.title').append(video.title);
			$('.description').children('p').append(video.description);
		})

	});
}

function getRelatedVideos(videoId){
	var url,categoryString;
	var vidList = [];
	categoryString = categoryId ? "&videoCategoryId=" + categoryId : "";
	url = 'https://www.googleapis.com/youtube/v3/search?relatedToVideoId='+videoId+'&part=snippet&relevanceLanguage=en&type=video&regionCode=us&maxResults=15&key=AIzaSyA2surjYpInK_ft0gWD0R__XQ05zbaptCQ';
	$.getJSON(url,function(data){
		$.each(data.items,function(key,val){
			var vid = {
				videoId:val.id.videoId,
				title:             val.snippet.title,
				description:       val.snippet.description,
				pic:               val.snippet.thumbnails.medium.url,
				publishedAt:       new Date(val.snippet.publishedAt)
			}
			vidList.push(vid);
		});
	}).done(function(){
		var i, vidBox,video;
		if ($('.related')){

			$('.ads').children('.container').empty();
		}
		for (i=0; i<vidList.length; i++){
			video = vidList[i];
			vidDate = video.publishedAt;
			vidBox= "<div class='vidBox clearfix related'><img src="+video.pic+" alt="+video.title+"><h2>"+video.title+"</h2><p>Published "+vidDate.getMonth() + "-" + vidDate.getDate() + "-" + vidDate.getFullYear()+"</p></div>";
			$('.ads').children('.container').append(vidBox);
		}
		var i;

		$('.related').click(function(){
			var index, video;
			index = $(this).index();
			video = vidList[index];
			videoId = video.videoId;
			title = video.title;
			description = video.description;
			removeVideoShit();
			appendVideoShit(videoId,title,description);
		})

	});
}
		$(document).ready(function(){
		var d = new Date();
		var month = (+d.getMonth()<10)? "0"+String(+d.getMonth()+1):String(+d.getMonth()+1);
		var currentDate = d.getFullYear()+"-"+month+"-"+d.getDate()+"T00:00:00Z";
		var description,txt;
		var currentVideo;

			if (categoryId){//home page or category page?
				currentVideo = grabVid(categoryId);
			}else{
				currentVideo = mainReel();
			}

			//display top ten videos in that category
			topTen(currentDate);

			//random button
			$('#button').click(function(){
					$('.description').children("p").empty();
					$('.title').empty();
					$('.player').children().remove();
					if(categoryId){
						grabVid(categoryId);
					}else{
						mainReel();
					}
			});
			$('.show2').click(function(){
				var height = $('.ads').height() == "700" ? "1732" : "700";
				var txt = $(".show2").text() == "Show More" ? "Show Less":"Show More";
				$(this).text(txt);
				$('.ads').animate({height:height},500);
				$('.ads').toggleClass("ads-extendo").css("height","");
			});
			$('.nav-toggle').click(function(){
				$('.navbar ul').slideToggle(400,function(){
					$(this).toggleClass("nav-expanded").css("display","");

				});
			});

			//show / hide description
			description = $('.description').children('p');
			txt = $('.show').text();
			description.hide();
			$('.show').click(function(){
				description.slideToggle(300);
				txt = (txt === "Show More") ? "Show Less": "Show More";
				$('.show').text(txt);
			});
		});
