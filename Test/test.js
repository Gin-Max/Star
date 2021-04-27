// give argument to JS script
let args = process.argv.slice(2);
let N = args[0] != null ? Number(args[0]):0;
if(N==0) {
  return;
}

// Function to generate N char.
function generateNChar(length, char) {
	let lineStr="";
	for (let i=0; i < length; i++) {
		lineStr+=char;
	}
	return lineStr;
}
// Function to get line string for the star cone.
function getLineStarCone(N, i) { 
	let lineStr="";
	let nbSpaces=0;
	if(N==1) { //Special case because 1 isn't shifted
		nbSpaces = (N*2)+ N - i;
	} else {
		nbSpaces = (N*2)+ (N-1) - i;
	}
	lineStr+=generateNChar(nbSpaces,' ');
	lineStr+="*";
	if (i > 0) { //We need two stars except for the first line
		nbSpaces=(i*2)-1;
		lineStr+=generateNChar(nbSpaces,' ');
		lineStr+="*";
	}
	return lineStr;
}
// Function to get line string for the full star part.
function getLineFullStar(N) { 
	let lineStr="";
	let nbStars=(N*2)+1;
	lineStr+=generateNChar(nbStars,'*');
	let nbSpaces = (N==1) ? 1:((N-1)*2)-1;
	lineStr+=generateNChar(nbSpaces,' ');
	lineStr+=generateNChar(nbStars,'*');
	return lineStr;
}
// Function to get line string for the side part.
function getLineSide(N,i) {
	let lineStr="";
	let nbSpaces = (i+1);
	lineStr+=generateNChar(nbSpaces,' ');
	lineStr+="*";
	let nbSpacesCenter = (N==1) ? 1:((N-1)*2)-1;
	nbSpaces = (N*4) - ((i+1)*2) + nbSpacesCenter;
	lineStr+=generateNChar(nbSpaces,' ');
	lineStr+="*";
	return lineStr
}
// First part.
for(let i=0;i<N;i++) {
	console.log(getLineStarCone(N,i));
}
// First full line of stars.
console.log(getLineFullStar(N));

// First center part.
for(let i=0;i<N;i++) {
	console.log(getLineSide(N,i));
}
// Second center part.
for(let i=(N-2);i>=0;i--) {
	console.log(getLineSide(N,i));
}

// Second full line of stars.
console.log(getLineFullStar(N));
// Last part.
for(let i=(N-1);i>=0;i--) {
	console.log(getLineStarCone(N,i));
}