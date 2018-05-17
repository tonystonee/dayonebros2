<?php
function topTen(){
	date_default_timezone_set('America/Detroit');//set timezone_abbreviations_list
	$d = date("Y-m-d") . "T00:00:00Z";
	$vidBox = array();
	global $categoryId;
	$categoryString = $categoryId ? '&videoCategoryId=' . $categoryId : '';
	$url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&orderby=viewCount&publishedAfter='. $d .'&regionCode=us&relevanceLanguage=en&type=video'.$categoryString.'&key=AIzaSyA2surjYpInK_ft0gWD0R__XQ05zbaptCQ';
	$json = file_get_contents($url);
	$obj = json_decode($json, true);
	$vidList = array();
	foreach ($obj['items'] as $video){
		$vid = array();
		$vid['id'] = $video['id']['videoId'];
		$vid['title'] = $video['snippet']['title'];
		$vid['description'] = $video['snippet']['description'];
		$vid['thumbnail'] = $video['snippet']['thumbnails']['medium']['url'];
		$vid['publishedAt'] = $video['snippet']['publishedAt'];
		$vidList[] = $vid;
	}
	foreach($vidList as $vid){
		$videoId = $vid["id"];
		$title = $vid["title"];
		$description = $vid["description"];
		$thumbnail = $vid["thumbnail"];
		$vidBox[] =
		"
		<div class='vidBox clearfix'>
			<img src='$thumbnail' alt='$title'>
			<h2>$title</h2>
			<p>$description</p>
		</div>
		";

	}
	foreach ($vidBox as $vid){
		echo $vid;
	}
	return $vidList;
}

$vidList = topTen();
