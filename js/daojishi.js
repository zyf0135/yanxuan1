window.onload=function(){
	timeS();
	let timer=setInterval(timeS,1000);
	function timeS(){
		let endTime=new Date('2017/10/15 00:00:00');
		let nowTime=new Date();
		let spaceTime=endTime.getTime()-nowTime.getTime();
		let day=Math.floor(spaceTime/1000/60/60/24);
		let hours=Math.floor(spaceTime/1000/60/60%24);
		let min=Math.floor(spaceTime/1000/60%60);
		let sec=Math.floor(spaceTime/1000%60);
//		document.getElementById("day").innerHTML=day;
		document.getElementById("t_hour").innerHTML=hours;
		document.getElementById("t_minute").innerHTML=min;
		document.getElementById("t_second").innerHTML=sec;
}
}
