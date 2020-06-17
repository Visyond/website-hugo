//Previous visited URL
function getReferrer() {
	if(!document.referrer) {
		return "Unknow referrer";
	} else {
		return document.referrer;
	}
}
