<?php
$theme = "main";
$page_title = "Most Popular Videos On The Web | Day One Bros";
$page_description = "A collection of videos that will successfully kill your boredom at work, school, or home. Browse throught the different categories, 
comedy, sports, life, and more!";
$page_author = "Ant Man";
$categoryId = 0;
include("includes/header.html");
?>
<!--=================================Content =============================================-->
				<h1 id="page_title">Day One Bros.com!  <span>Kill Your Boredom at Work, School, or Home</span></h1>
				
				<div class="content span8 col">
					<div class="player">
					</div>
				
					<div class="description box">
						
						<button id="button">RANDOM</button>
						<h2 class="title">
						</h2>
						<p></p>
						<span class="show"><b>Show More</b></span>
					</div>
					<div class="box top_ten">
					<h1>Top Ten Videos Today</h1>
					<div class="container">
					<?php include_once 'includes/top_ten.php'?>
					</div>
					</div>
				</div>
		
				<div class="span4 col">
				<div class="ads box">
					<div class="ad-box">
					<iframe src="//go.padstm.com/?id=284473&t=iframe&var=47709" style="width:320px;height:50px;border:0;overflow:hidden;"></iframe>
					<iframe src="//go.padstm.com/?id=284474&t=iframe&var=47709" style="width:300px;height:250px;border:0;overflow:hidden;"></iframe>
					</div>
					<h2>Related Videos:</h2>
					<div class="container">
					</div>
					<p class="show2">Show More</p>
				</div>
				<div class="box ad2">
				<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
				<!-- side box 2 -->
				<ins class="adsbygoogle"
					 style="display:block"
					 data-ad-client="ca-pub-3626536590226592"
					 data-ad-slot="8673322063"
					 data-ad-format="auto"></ins>
				<script>
				(adsbygoogle = window.adsbygoogle || []).push({});
				</script>
				</div>
				</div>
<!--=========================END CONTENT=============================-->
<?php include("includes/footer.html");?>
