/////////////////////////////////////////////////////////////////////////////
// Function : NavNode (constructor)
// Comments :
/////////////////////////////////////////////////////////////////////////////
function NavNode(id, label, href, parent)
{
	this.m_parent = null;
	this.m_level = 0;

	if (parent)
	{
		this.m_parent = parent;
		this.m_level = parent.m_level+1;
	}

	this.m_id = id;

	// assume that m_label will most often be used directly as HTML
	this.m_rawlabel = label;

	label = label.replace(/&/g, '&amp;');
	label = label.replace(/</g, '&lt;');
	label = label.replace(/>/g, '&gt;');
	label = label.replace(/"/g, '&quot;');

	this.m_label = label;

	this.m_href = href;
	this.m_subNodes = new Array();

	var argValues = NavNode.arguments;
	var argCount = NavNode.arguments.length;

	for (i = 4 ; i < argCount ; i++)
	{
		var eqPos = argValues[i].indexOf("==");
		var attrName = argValues[i].substring(0,eqPos);
		var attrValue = argValues[i].substring(eqPos+2);

		eval("this.cp_" + attrName + " = '" + attrValue + "';");
	}

	NavNode.prototype.addNode = addNode;
	NavNode.prototype.isSelected = isSelected;
}

/////////////////////////////////////////////////////////////////////////////
// Function : addNode
// Comments :
/////////////////////////////////////////////////////////////////////////////
function addNode(id, label, href)
{
	var newIndex = this.m_subNodes.length;
	var newNode = new NavNode(id, label, href, this);

	var argValues = addNode.arguments;
	var argCount = addNode.arguments.length;

	for (i = 3 ; i < argCount ; i++)
	{
		var eqPos = argValues[i].indexOf("==");
		var attrName = argValues[i].substring(0,eqPos);
		var attrValue = argValues[i].substring(eqPos+2);

		eval("newNode.cp_" + attrName + " = '" + attrValue + "';");
	}

	this.m_subNodes[newIndex] = newNode;
	return newNode;
}

/////////////////////////////////////////////////////////////////////////////
// Function : isSelected
// Comments :
/////////////////////////////////////////////////////////////////////////////
function isSelected()
{
    var pos = window.location.href.lastIndexOf("/");
    var docname = window.location.href.substring(pos+1, window.location.href.length);

    pos = this.m_href.lastIndexOf("/");
    var myname = this.m_href.substring(pos+1, this.m_href.length);

    if (docname == myname)
		return true;
	else
		return false;
}

/////////////////////////////////////////////////////////////////////////////
// Function : customSectionPropertyExists
// Comments :
/////////////////////////////////////////////////////////////////////////////
function customSectionPropertyExists(csp)
{
	return (typeof csp != _U && csp != null);
}

/////////////////////////////////////////////////////////////////////////////
// Function : getCustomSectionProperty
// Comments :
/////////////////////////////////////////////////////////////////////////////
function getCustomSectionProperty(csp)
{
	if (customSectionPropertyExists(csp))
	{
		return csp;
	}
	else
	{
		return "";
	}
}

/////////////////////////////////////////////////////////////////////////////

var g_navNode_Root = new NavNode('nav-home','Home',ssUrlPrefix + 'index.htm',null,'nav_id==home','secondaryUrlVariableField==Content');
g_navNode_0=g_navNode_Root.addNode('student-venture','High School',ssUrlPrefix + 'highschool/index.htm','exclude_from_leftnav==TRUE','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_0_0=g_navNode_0.addNode('student-venture-media','media',ssUrlPrefix + 'highschool/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_1=g_navNode_Root.addNode('military-ministry','Military',ssUrlPrefix + 'military/index.htm','exclude_from_leftnav==TRUE','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_1_0=g_navNode_1.addNode('military-ministry-media','media',ssUrlPrefix + 'military/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_2=g_navNode_Root.addNode('priority-associates','City',ssUrlPrefix + 'city/index.htm','exclude_from_leftnav==TRUE','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_3=g_navNode_Root.addNode('campus-ministry','Campus',ssUrlPrefix + 'campus/index.htm','exclude_from_leftnav==TRUE','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_3_0=g_navNode_3.addNode('campus-ministry-media','media',ssUrlPrefix + 'campus/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==PH_MEDIA_MAIN');
g_navNode_3_1=g_navNode_3.addNode('big-break','Big Break',ssUrlPrefix + 'campus/big-break/index.htm','exclude_from_leftnav==TRUE','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_5=g_navNode_Root.addNode('home-media','media',ssUrlPrefix + 'media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_6=g_navNode_Root.addNode('nav-knowgod','How to Know God',ssUrlPrefix + 'how-to-know-god/index.htm','nav_id==know-god','secondaryUrlVariableField==Content');
g_navNode_6_0=g_navNode_6.addNode('redir-would-you-like-to-know-g','Would You Like to Know God Personally?',ssUrlPrefix + 'how-to-know-god/would-you-like-to-know-god-personally/index.htm','nav_id==know-god','secondaryUrlVariableField==Content');
g_navNode_6_0_0=g_navNode_6_0.addNode('would-you-like-to-know-media','media',ssUrlPrefix + 'how-to-know-god/would-you-like-to-know-god-personally/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==know-god');
g_navNode_6_0_1=g_navNode_6_0.addNode('question','Question',ssUrlPrefix + 'how-to-know-god/would-you-like-to-know-god-personally/question/index.htm','exclude_from_leftnav==TRUE','nav_id==know-god','secondaryUrlVariableField==Content');
g_navNode_6_0_2=g_navNode_6_0.addNode('decision','Decision',ssUrlPrefix + 'how-to-know-god/would-you-like-to-know-god-personally/decision/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==know-god','secondaryUrlVariableField==Content');
g_navNode_6_0_3=g_navNode_6_0.addNode('4laws-getting-started','Getting Started',ssUrlPrefix + 'how-to-know-god/would-you-like-to-know-god-personally/getting-started/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==know-god');
g_navNode_6_1=g_navNode_6.addNode('who-is-jesus--god-or-just-a-go','Who Is Jesus?',ssUrlPrefix + 'how-to-know-god/who-is-jesus-god-or-just-a-good-man/index.htm','nav_id==know-god','secondaryUrlVariableField==Content');
g_navNode_6_1_0=g_navNode_6_1.addNode('who-is-jesus-media','media',ssUrlPrefix + 'how-to-know-god/who-is-jesus-god-or-just-a-good-man/who-is-jesus-media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==know-god');
g_navNode_6_2=g_navNode_6.addNode('did-jesus-realy-rise-from-the-','Did Jesus Rise From the Dead?',ssUrlPrefix + 'how-to-know-god/did-jesus-christ-really-rise-from-the-dead/index.htm','nav_id==know-god','secondaryUrlVariableField==Content');
g_navNode_6_2_0=g_navNode_6_2.addNode('DidJesusChristReallyRiseMedia','media',ssUrlPrefix + 'how-to-know-god/did-jesus-christ-really-rise-from-the-dead/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==know-god');
g_navNode_6_3=g_navNode_6.addNode('jesus--amp--the-intellectual','Jesus and the Intellectual',ssUrlPrefix + 'how-to-know-god/jesus-and-the-intellectual/index.htm','nav_id==know-god','secondaryUrlVariableField==Content');
g_navNode_6_3_0=g_navNode_6_3.addNode('jesus-and-intellectual-media','media',ssUrlPrefix + 'how-to-know-god/jesus-and-the-intellectual/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==know-god');
g_navNode_6_4=g_navNode_6.addNode('my-story--a-life-changed','My Story',ssUrlPrefix + 'how-to-know-god/my-story-a-life-changed/index.htm','nav_id==know-god','secondaryUrlVariableField==Content');
g_navNode_6_4_0=g_navNode_6_4.addNode('my-story-a-life-changed-media','media',ssUrlPrefix + 'how-to-know-god/my-story-a-life-changed/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==know-god');
g_navNode_6_5=g_navNode_6.addNode('how-to-know-god-media','media',ssUrlPrefix + 'how-to-know-god/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==know-god');
g_navNode_6_6=g_navNode_6.addNode('good-news-for-children','Good News for Children',ssUrlPrefix + 'how-to-know-god/good-news-for-children/index.htm','exclude_from_leftnav==TRUE');
g_navNode_7=g_navNode_Root.addNode('nav-training','Training \x26 Growth',ssUrlPrefix + 'training-and-growth/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0=g_navNode_7.addNode('classic-campus-crusade','Classic Cru',ssUrlPrefix + 'training-and-growth/classics/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_0=g_navNode_7_0.addNode('10-basic-steps-to-christian-ma','10 Basic Steps to Christian Maturity',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_0_0=g_navNode_7_0_0.addNode('intro--the-uniqueness-of-jesus','Intro\x3a  The Uniqueness of Jesus',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/intro-the-uniqueness-of-jesus/index.htm','exclude_from_sitemap==TRUE','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_0_0_0=g_navNode_7_0_0_0.addNode('intro-media','media',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/intro-the-uniqueness-of-jesus/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_0_1=g_navNode_7_0_0.addNode('the-christian-adventure','1\x3a  The Christian Adventure',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/1-the-christian-adventure/index.htm','exclude_from_sitemap==TRUE','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_0_1_0=g_navNode_7_0_0_1.addNode('1-christian-adventure-media','media',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/1-the-christian-adventure/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_0_2=g_navNode_7_0_0.addNode('the-christian-and-the-abundant','2\x3a  The Christian and the Abundant Life',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/2-abundant-life/index.htm','exclude_from_sitemap==TRUE','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_0_2_0=g_navNode_7_0_0_2.addNode('2-abundant-life-media','media',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/2-abundant-life/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_0_3=g_navNode_7_0_0.addNode('the-christian-and-the-holy-spi','3\x3a  The Christian and the Holy Spirit',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/3-the-holy-spirit/index.htm','exclude_from_sitemap==TRUE','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_0_3_0=g_navNode_7_0_0_3.addNode('3-holy-spirit-media','media',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/3-the-holy-spirit/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_0_4=g_navNode_7_0_0.addNode('-the-christian-and-prayer','4\x3a  The Christian and Prayer',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/4-prayer/index.htm','exclude_from_sitemap==TRUE','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_0_4_0=g_navNode_7_0_0_4.addNode('4-prayer-media','media',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/4-prayer/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_0_5=g_navNode_7_0_0.addNode('the-christian-and-the-bible','5\x3a  The Christian and the Bible',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/5-the-bible/index.htm','exclude_from_sitemap==TRUE','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_0_5_0=g_navNode_7_0_0_5.addNode('5-bible-media','media',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/5-the-bible/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_0_6=g_navNode_7_0_0.addNode('the-christian-and-obedience','6\x3a  The Christian and Obedience',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/6-obedience/index.htm','exclude_from_sitemap==TRUE','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_0_6_0=g_navNode_7_0_0_6.addNode('6-obedience-media','media',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/6-obedience/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_0_7=g_navNode_7_0_0.addNode('the-christian-and-witnessing','7\x3a  The Christian and Witnessing',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/7-the-christian-and-witnessing/index.htm','exclude_from_sitemap==TRUE','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_0_7_0=g_navNode_7_0_0_7.addNode('7-witnessing-media','media',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/7-the-christian-and-witnessing/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_0_8=g_navNode_7_0_0.addNode('the-christian-and-giving','8\x3a  The Christian and Giving',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/8-giving/index.htm','exclude_from_sitemap==TRUE','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_0_8_0=g_navNode_7_0_0_8.addNode('8-giving-media','media',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/8-giving/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_0_9=g_navNode_7_0_0.addNode('the-old-testament','9\x3a  The Old Testament',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/9-the-old-testament/index.htm','exclude_from_sitemap==TRUE','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_0_9_0=g_navNode_7_0_0_9.addNode('9-the-old-testament-media','media',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/9-the-old-testament/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_0_10=g_navNode_7_0_0.addNode('the-new-testament','10\x3a  The New Testament',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/10-the-new-testament/index.htm','exclude_from_sitemap==TRUE','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_0_10_0=g_navNode_7_0_0_10.addNode('10-the-new-testament-media','media',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/10-the-new-testament/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_0_11=g_navNode_7_0_0.addNode('10StepsChristianMaturity-media','media',ssUrlPrefix + 'training-and-growth/classics/10-basic-steps/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_7_0_1=g_navNode_7_0.addNode('transferable-concepts','Transferable Concepts',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_1_0=g_navNode_7_0_1.addNode('how-you-can-be-sure-you-are-a-','You Can Be Sure You Are a Christian',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/you-can-be-sure-you-are-a-christian/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_1_0_0=g_navNode_7_0_1_0.addNode('you-can-be-sure-media','media',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/you-can-be-sure-you-are-a-christian/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_1_1=g_navNode_7_0_1.addNode('how-you-can-experience-god-s-l','Experience God\'s Love and Forgiveness',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/experience-gods-love-and-forgiveness/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_1_1_0=g_navNode_7_0_1_1.addNode('experience-gods-love-media','media',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/experience-gods-love-and-forgiveness/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_1_2=g_navNode_7_0_1.addNode('how-you-can-be-filled-with-the','Be Filled With the Holy Spirit',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/be-filled-with-the-holy-spirit/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_1_2_0=g_navNode_7_0_1_2.addNode('be-filled-holy-spirit-media','media',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/be-filled-with-the-holy-spirit/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_1_3=g_navNode_7_0_1.addNode('how-to-walk-in-the-spirit','Walk in the Spirit',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/walk-in-the-spirit/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_1_3_0=g_navNode_7_0_1_3.addNode('walk-in-the-spirit-media','media',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/walk-in-the-spirit/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_1_4=g_navNode_7_0_1.addNode('how-you-can-be-a-fruitful-witn','Be a Fruitful Witness',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/be-a-fruitful-witness/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_1_4_0=g_navNode_7_0_1_4.addNode('fruitful-witness-media','media',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/be-a-fruitful-witness/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_1_5=g_navNode_7_0_1.addNode('how-you-can-introduce-others-t','Introduce Others to Christ',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/introduce-others-to-christ/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_1_5_0=g_navNode_7_0_1_5.addNode('introduce-others-media','media',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/introduce-others-to-christ/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_1_6=g_navNode_7_0_1.addNode('how-you-can-help-fulfill-the-g','Help Fulfill the Great Commission',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/help-fulfill-the-great-commission/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_1_6_0=g_navNode_7_0_1_6.addNode('fulfill-great-commission-media','media',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/help-fulfill-the-great-commission/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_1_7=g_navNode_7_0_1.addNode('how-you-can-love-by-faith','Love By Faith',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/love-by-faith/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_1_7_0=g_navNode_7_0_1_7.addNode('love-by-faith-media','media',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/love-by-faith/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_1_8=g_navNode_7_0_1.addNode('how-you-can-pray-with-confide','Pray With Confidence',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/pray-with-confidence/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_1_8_0=g_navNode_7_0_1_8.addNode('pray-with-confidence-media','media',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/pray-with-confidence/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_1_9=g_navNode_7_0_1.addNode('how-you-can-experience-the-adv','Experience the Adventure of Giving',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/experience-the-adventure-of-giving/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_1_9_0=g_navNode_7_0_1_9.addNode('experience-giving-media','media',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/experience-the-adventure-of-giving/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_1_10=g_navNode_7_0_1.addNode('transferable-concepts-media','media',ssUrlPrefix + 'training-and-growth/classics/transferable-concepts/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_2=g_navNode_7_0.addNode('the-spirit-filled-life','The Spirit-Filled Life',ssUrlPrefix + 'training-and-growth/classics/the-spirit-filled-life/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_2_0=g_navNode_7_0_2.addNode('spirit-filled-life-media','media',ssUrlPrefix + 'training-and-growth/classics/the-spirit-filled-life/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_3=g_navNode_7_0.addNode('would-you-like-to-know-god-per','Would You Like to Know God Personally?',ssUrlPrefix + 'training-and-growth/classics/would-you-like-to-know-god-personally/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_3_0=g_navNode_7_0_3.addNode('ccc-would-you-like-media','media',ssUrlPrefix + 'training-and-growth/classics/would-you-like-to-know-god-personally/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_4=g_navNode_7_0.addNode('redir-the-four-spiritual-laws','The Four Spiritual Laws',ssUrlPrefix + 'training-and-growth/classics/the-four-spiritual-laws/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_0_4_0=g_navNode_7_0_4.addNode('four-spiritual-laws-media','media',ssUrlPrefix + 'training-and-growth/classics/the-four-spiritual-laws/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_0_5=g_navNode_7_0.addNode('classic-campus-crusade-media','media',ssUrlPrefix + 'training-and-growth/classics/classic-campus-crusade-media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_1=g_navNode_7.addNode('training','Training',ssUrlPrefix + 'training-and-growth/training/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_1_0=g_navNode_7_1.addNode('training-media','media',ssUrlPrefix + 'training-and-growth/training/training-media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_2=g_navNode_7.addNode('training-and-growth-media','media',ssUrlPrefix + 'training-and-growth/training-and-growth-media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training');
g_navNode_7_3=g_navNode_7.addNode('devotional-life','Prayer, Quiet Times, Devotionals',ssUrlPrefix + 'training-and-growth/devotional-life/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_3_1=g_navNode_7_3.addNode('todays-promise','Today\'s Promise',ssUrlPrefix + 'training-and-growth/devotional-life/todays-promise/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_3_2=g_navNode_7_3.addNode('7-steps-to-fasting','7 Steps to Successful Fasting \x26 Prayer',ssUrlPrefix + 'training-and-growth/devotional-life/7-steps-to-fasting/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_3_3=g_navNode_7_3.addNode('personal-guide-to-fasting-pray','Your Personal Guide to Fasting \x26 Prayer',ssUrlPrefix + 'training-and-growth/devotional-life/personal-guide-to-fasting/index.htm','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_3_4=g_navNode_7_3.addNode('discover-god-edevotion','Discover God',ssUrlPrefix + 'training-and-growth/devotional-life/discover-god/index.htm','exclude_from_leftnav==FALSE','exclude_from_sitemap==FALSE','secondaryUrlVariableField==Content');
g_navNode_7_3_5=g_navNode_7_3.addNode('advent','Advent',ssUrlPrefix + 'training-and-growth/devotional-life/advent/index.htm','secondaryUrlVariableField==Content');
g_navNode_7_3_6=g_navNode_7_3.addNode('lent','Lent',ssUrlPrefix + 'training-and-growth/devotional-life/lent/index.htm','secondaryUrlVariableField==Content');
g_navNode_7_4=g_navNode_7.addNode('christmas','Christmas',ssUrlPrefix + 'training-and-growth/christmas/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==training','secondaryUrlVariableField==Content');
g_navNode_7_5=g_navNode_7.addNode('tgBibleStudies','Bible Studies',ssUrlPrefix + 'training-and-growth/bible-studies/index.htm','secondaryUrlVariableField==Content');
g_navNode_7_6=g_navNode_7.addNode('tg-evangelism','Evangelism',ssUrlPrefix + 'training-and-growth/evangelism/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==Content');
g_navNode_7_7=g_navNode_7.addNode('tg-mentoring','Mentoring',ssUrlPrefix + 'training-and-growth/mentoring/index.htm','secondaryUrlVariableField==Content');
g_navNode_8=g_navNode_Root.addNode('nav-opps','Opportunities',ssUrlPrefix + 'opportunities/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_0=g_navNode_8.addNode('careers','Careers',ssUrlPrefix + 'opportunities/careers/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_0_0=g_navNode_8_0.addNode('supported-staff','Missionary Staff',ssUrlPrefix + 'opportunities/careers/supported-staff/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_0_0_0=g_navNode_8_0_0.addNode('where-is-god-leading-you-','Where Is God Calling You?',ssUrlPrefix + 'opportunities/careers/supported-staff/where-is-god-calling-you/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_0_0_0_0=g_navNode_8_0_0_0.addNode('where-is-god-calling-you-media','media',ssUrlPrefix + 'opportunities/careers/supported-staff/where-is-god-calling-you/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==Content');
g_navNode_8_0_0_1=g_navNode_8_0_0.addNode('salary---benefits','Salary and Benefits',ssUrlPrefix + 'opportunities/careers/supported-staff/salary-and-benefits/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_0_0_1_0=g_navNode_8_0_0_1.addNode('salary-and-benefits-media','media',ssUrlPrefix + 'opportunities/careers/supported-staff/salary-and-benefits/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==Content');
g_navNode_8_0_0_2=g_navNode_8_0_0.addNode('how-we-raise-our-salaries','How we Raise Our Salaries',ssUrlPrefix + 'opportunities/careers/supported-staff/how-we-raise-our-salaries/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_0_0_2_0=g_navNode_8_0_0_2.addNode('how-we-raise-salaries-media','media',ssUrlPrefix + 'opportunities/careers/supported-staff/how-we-raise-our-salaries/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==Content');
g_navNode_8_0_0_3=g_navNode_8_0_0.addNode('qualifications','Qualifications',ssUrlPrefix + 'opportunities/careers/supported-staff/qualifications/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_0_0_3_0=g_navNode_8_0_0_3.addNode('qualifications-media','media',ssUrlPrefix + 'opportunities/careers/supported-staff/qualifications/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==Content');
g_navNode_8_0_0_4=g_navNode_8_0_0.addNode('application-process','Application Process',ssUrlPrefix + 'opportunities/careers/supported-staff/application-process/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_0_0_4_0=g_navNode_8_0_0_4.addNode('application-process-media','media',ssUrlPrefix + 'opportunities/careers/supported-staff/application-process/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==Content');
g_navNode_8_0_0_5=g_navNode_8_0_0.addNode('field-ministry-positions','U.S. Field Ministry Positions',ssUrlPrefix + 'opportunities/careers/supported-staff/field-ministry-positions/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_0_0_5_0=g_navNode_8_0_0_5.addNode('field-ministry-media','media',ssUrlPrefix + 'opportunities/careers/supported-staff/field-ministry-positions/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==Content');
g_navNode_8_0_0_6=g_navNode_8_0_0.addNode('world-headquarters-positions','Operations Positions \x28Orlando\x29',ssUrlPrefix + 'opportunities/careers/supported-staff/world-headquarters-positions/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_0_0_6_0=g_navNode_8_0_0_6.addNode('whq-positions-media','media',ssUrlPrefix + 'opportunities/careers/supported-staff/world-headquarters-positions/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==Content');
g_navNode_8_0_0_7=g_navNode_8_0_0.addNode('redir-statement-of-faith','Statement of Faith',ssUrlPrefix + 'opportunities/careers/supported-staff/statement-of-faith/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_0_0_7_0=g_navNode_8_0_0_7.addNode('statement-of-faith-media','media',ssUrlPrefix + 'opportunities/careers/supported-staff/statement-of-faith/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==Content');
g_navNode_8_0_0_8=g_navNode_8_0_0.addNode('supported-staff-media','media',ssUrlPrefix + 'opportunities/careers/supported-staff/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==Content');
g_navNode_8_0_1=g_navNode_8_0.addNode('hourly--amp--salaried-position','Hourly \x26 Salaried Staff',ssUrlPrefix + 'opportunities/careers/hourly-and-salaried-positions/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_0_3=g_navNode_8_0.addNode('international-missions','International Missions',ssUrlPrefix + 'opportunities/careers/international/index.htm','exclude_from_sitemap==TRUE','secondaryUrlVariableField==Content');
g_navNode_8_0_4=g_navNode_8_0.addNode('staff-profiles','Staff Profiles',ssUrlPrefix + 'opportunities/careers/staff-profiles/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_0_5=g_navNode_8_0.addNode('apply','Apply',ssUrlPrefix + 'opportunities/careers/apply/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','nav_id==opps');
g_navNode_8_1=g_navNode_8.addNode('internships','Internships',ssUrlPrefix + 'opportunities/internships/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_1_0=g_navNode_8_1.addNode('year-interships-at-hq','1-Year Internship in Orlando',ssUrlPrefix + 'opportunities/internships/internships/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_1_0_0=g_navNode_8_1_0.addNode('1-year-internships-hq-media','media',ssUrlPrefix + 'opportunities/internships/internships/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_8_1_1=g_navNode_8_1.addNode('preview-weekend','Preview Weekend \x28For College Students\x29',ssUrlPrefix + 'opportunities/internships/preview-weekend-for-college-students/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_1_1_0=g_navNode_8_1_1.addNode('preview-weekend-media','media',ssUrlPrefix + 'opportunities/internships/preview-weekend-for-college-students/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_8_1_3=g_navNode_8_1.addNode('osp-internship','Orlando Summer Project Internship',ssUrlPrefix + 'opportunities/internships/orlando-summer-project-internship/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_1_3_0=g_navNode_8_1_3.addNode('col-orlando-internship-media','media',ssUrlPrefix + 'opportunities/internships/orlando-summer-project-internship/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_8_2=g_navNode_8.addNode('mission-trips','Mission Trips',ssUrlPrefix + 'opportunities/mission-trips/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_3=g_navNode_8.addNode('volunteer','Volunteer',ssUrlPrefix + 'opportunities/volunteer/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_3_0=g_navNode_8_3.addNode('orlando-openings','Orlando Openings',ssUrlPrefix + 'opportunities/volunteer/orlando-openings/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_3_0_0=g_navNode_8_3_0.addNode('orlando-openings-media','media',ssUrlPrefix + 'opportunities/volunteer/orlando-openings/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_8_3_1=g_navNode_8_3.addNode('sign-up','Sign Up',ssUrlPrefix + 'opportunities/volunteer/sign-up/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_3_1_0=g_navNode_8_3_1.addNode('sign-up-media','media',ssUrlPrefix + 'opportunities/volunteer/sign-up/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_8_3_2=g_navNode_8_3.addNode('contact-the-volunteer-office','Contact the Volunteer Office',ssUrlPrefix + 'opportunities/volunteer/contact-the-volunteer-office/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_3_2_0=g_navNode_8_3_2.addNode('contact-volunteer-office-media','media',ssUrlPrefix + 'opportunities/volunteer/contact-the-volunteer-office/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_8_3_3=g_navNode_8_3.addNode('volunteer-profiles','Volunteer Profiles',ssUrlPrefix + 'opportunities/volunteer/volunteer-profiles/index.htm','nav_id==opps','secondaryUrlVariableField==Content');
g_navNode_8_3_3_0=g_navNode_8_3_3.addNode('volunteer-profiles-media','media',ssUrlPrefix + 'opportunities/volunteer/volunteer-profiles/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_8_3_4=g_navNode_8_3.addNode('volunteer-media','media',ssUrlPrefix + 'opportunities/volunteer/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_9=g_navNode_Root.addNode('nav-about','About Us',ssUrlPrefix + 'about-us/index.htm','nav_id==about','secondaryUrlVariableField==Content');
g_navNode_9_2=g_navNode_9.addNode('about-us-media','media',ssUrlPrefix + 'about-us/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_9_4=g_navNode_9.addNode('donor-relations','Donor Relations',ssUrlPrefix + 'about-us/donor-relations/index.htm','nav_id==about','secondaryUrlVariableField==Content');
g_navNode_9_4_0=g_navNode_9_4.addNode('our-new-name-donor-relations','Our New Name',ssUrlPrefix + 'about-us/donor-relations/our-new-name/index.htm','secondaryUrlVariableField==Content');
g_navNode_9_4_1=g_navNode_9_4.addNode('donor-relations-redirect-media','media',ssUrlPrefix + 'about-us/donor-relations/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_9_4_2=g_navNode_9_4.addNode('annualreport','Annual Report',ssUrlPrefix + 'about-us/donor-relations/annual-report/index.htm','nav_id==about','secondaryUrlVariableField==Content');
g_navNode_9_4_3=g_navNode_9_4.addNode('stewardship','Stewardship Guidelines',ssUrlPrefix + 'about-us/donor-relations/stewardship-guidelines/index.htm','nav_id==about');
g_navNode_9_4_3_0=g_navNode_9_4_3.addNode('stewardship-ministry-partners','Commitment to Ministry Partners',ssUrlPrefix + 'about-us/donor-relations/stewardship-guidelines/commitment-to-ministry-partners/index.htm','nav_id==about');
g_navNode_9_4_3_1=g_navNode_9_4_3.addNode('stewardship-confidentiality','Commitment to Confidentiality',ssUrlPrefix + 'about-us/donor-relations/stewardship-guidelines/confidentiality/index.htm','nav_id==about');
g_navNode_9_4_3_2=g_navNode_9_4_3.addNode('stewardship-direct-marketing','Guidelines for Direct Marketing',ssUrlPrefix + 'about-us/donor-relations/stewardship-guidelines/direct-marketing/index.htm','nav_id==about');
g_navNode_9_4_3_3=g_navNode_9_4_3.addNode('stewardship-gift-reassignment','Position on Gift Designation Reassignment',ssUrlPrefix + 'about-us/donor-relations/stewardship-guidelines/gift-designation-reassignment/index.htm','nav_id==about');
g_navNode_9_4_3_4=g_navNode_9_4_3.addNode('stewardship-noncash-donations','Liquidation of Non-Cash Donations',ssUrlPrefix + 'about-us/donor-relations/stewardship-guidelines/liquidation-noncash-donations/index.htm','nav_id==about');
g_navNode_9_4_3_5=g_navNode_9_4_3.addNode('stewardship-real-property','Real Property and Insurance Gift Acceptance',ssUrlPrefix + 'about-us/donor-relations/stewardship-guidelines/real-property-acceptance/index.htm','nav_id==about');
g_navNode_9_4_3_6=g_navNode_9_4_3.addNode('stewardship-conflict-of-intere','Position on Conflicts of Interest',ssUrlPrefix + 'about-us/donor-relations/stewardship-guidelines/conflict-of-interest/index.htm','nav_id==about');
g_navNode_9_4_3_7=g_navNode_9_4_3.addNode('stewardship-audits','Ministry Governance and Audits',ssUrlPrefix + 'about-us/donor-relations/stewardship-guidelines/governance-and-audits/index.htm','nav_id==about');
g_navNode_9_4_4=g_navNode_9_4.addNode('how-staff-raise-support','How Staff Members Raise Their Support',ssUrlPrefix + 'about-us/donor-relations/how-staff-members-raise-their-support/index.htm','nav_id==about');
g_navNode_9_4_5=g_navNode_9_4.addNode('vision','Mission and Vision',ssUrlPrefix + 'about-us/donor-relations/mission-and-vision/index.htm');
g_navNode_9_5=g_navNode_9.addNode('what-we-do','What We Do',ssUrlPrefix + 'about-us/what-we-do/index.htm','nav_id==about','secondaryUrlVariableField==Content');
g_navNode_9_5_0=g_navNode_9_5.addNode('milestones','Milestones',ssUrlPrefix + 'about-us/what-we-do/milestones/index.htm','nav_id==about','secondaryUrlVariableField==Content');
g_navNode_9_5_0_0=g_navNode_9_5_0.addNode('milestones-media','media',ssUrlPrefix + 'about-us/what-we-do/milestones/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_9_5_1=g_navNode_9_5.addNode('tools--amp--events-you-might-r','Innovators in Evangelism \x26 Discipleship',ssUrlPrefix + 'about-us/what-we-do/innovators-in-evangelism-discipleship/index.htm','secondaryUrlVariableField==Content');
g_navNode_9_5_1_0=g_navNode_9_5_1.addNode('tools-and-events-media','media',ssUrlPrefix + 'about-us/what-we-do/innovators-in-evangelism-discipleship/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_9_5_2=g_navNode_9_5.addNode('in-their-words','What Others Are Saying',ssUrlPrefix + 'about-us/what-we-do/in-their-words/index.htm','nav_id==about','secondaryUrlVariableField==Content');
g_navNode_9_5_2_0=g_navNode_9_5_2.addNode('in-their-words-media','media',ssUrlPrefix + 'about-us/what-we-do/in-their-words/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_9_5_2_1=g_navNode_9_5_2.addNode('artists-and-authors','Artists and Authors',ssUrlPrefix + 'about-us/what-we-do/in-their-words/artists-and-authors/index.htm','nav_id==about');
g_navNode_9_5_2_1_0=g_navNode_9_5_2_1.addNode('artists-and-authors-media','media',ssUrlPrefix + 'about-us/what-we-do/in-their-words/artists-and-authors/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_9_5_2_2=g_navNode_9_5_2.addNode('other-ministries','Other Ministries',ssUrlPrefix + 'about-us/what-we-do/in-their-words/other-ministires/index.htm','nav_id==about');
g_navNode_9_5_2_2_0=g_navNode_9_5_2_2.addNode('other-ministries-media','media',ssUrlPrefix + 'about-us/what-we-do/in-their-words/other-ministires/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_9_5_2_3=g_navNode_9_5_2.addNode('recognizable-leaders','Recognizable Leaders',ssUrlPrefix + 'about-us/what-we-do/in-their-words/recognizable-leaders/index.htm','nav_id==about');
g_navNode_9_5_2_3_0=g_navNode_9_5_2_3.addNode('recognizable-leaders-media','media',ssUrlPrefix + 'about-us/what-we-do/in-their-words/recognizable-leaders/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_9_5_2_4=g_navNode_9_5_2.addNode('seminaries-and-universities','Seminaries and Universities',ssUrlPrefix + 'about-us/what-we-do/in-their-words/seminaries-and-universities/index.htm','nav_id==about');
g_navNode_9_5_2_4_0=g_navNode_9_5_2_4.addNode('seminaries-and-univ-media','media',ssUrlPrefix + 'about-us/what-we-do/in-their-words/seminaries-and-universities/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_9_5_3=g_navNode_9_5.addNode('what-we-do-media','media',ssUrlPrefix + 'about-us/what-we-do/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_9_6=g_navNode_9.addNode('statement-of-faith','Statement of Faith',ssUrlPrefix + 'about-us/statement-of-faith/index.htm','nav_id==about');
g_navNode_9_6_0=g_navNode_9_6.addNode('overview-statement-faith-media','media',ssUrlPrefix + 'about-us/statement-of-faith/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_9_7=g_navNode_9.addNode('our-leadership','Our Leadership',ssUrlPrefix + 'about-us/our-leadership/index.htm','nav_id==about','secondaryUrlVariableField==Content');
g_navNode_9_7_0=g_navNode_9_7.addNode('cru-leadership','Cru Leadership',ssUrlPrefix + 'about-us/our-leadership/cru-leadership/index.htm','exclude_from_leftnav==FALSE');
g_navNode_9_7_1=g_navNode_9_7.addNode('intl-leadership','International Leadership',ssUrlPrefix + 'about-us/our-leadership/international/index.htm','exclude_from_leftnav==FALSE','secondaryUrlVariableField==Content');
g_navNode_9_7_2=g_navNode_9_7.addNode('board-of-directors','Board of Directors',ssUrlPrefix + 'about-us/our-leadership/board-of-directors/index.htm','nav_id==about');
g_navNode_9_7_2_0=g_navNode_9_7_2.addNode('board-of-directors-media','media',ssUrlPrefix + 'about-us/our-leadership/board-of-directors/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_9_7_3=g_navNode_9_7.addNode('our-founders','Our Founders',ssUrlPrefix + 'about-us/our-leadership/our-founders/index.htm','nav_id==about','secondaryUrlVariableField==Content');
g_navNode_9_7_3_0=g_navNode_9_7_3.addNode('our-founders-media','media',ssUrlPrefix + 'about-us/our-leadership/our-founders/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_9_7_4=g_navNode_9_7.addNode('our-leadership-media','media',ssUrlPrefix + 'about-us/our-leadership/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_9_8=g_navNode_9.addNode('worldwide-challenge-magazine','Worldwide Challenge Magazine',ssUrlPrefix + 'about-us/worldwide-challenge-magazine/index.htm','nav_id==about','secondaryUrlVariableField==Content');
g_navNode_9_8_0=g_navNode_9_8.addNode('worldwide-challenge-mag-media','media',ssUrlPrefix + 'about-us/worldwide-challenge-magazine/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==PH_MEDIA_MAIN');
g_navNode_9_8_1=g_navNode_9_8.addNode('13','Photo Essays',ssUrlPrefix + 'about-us/worldwide-challenge-magazine/photo-essays/index.htm','exclude_from_leftnav==TRUE','nav_id==about','secondaryUrlVariableField==Replaceable');
g_navNode_9_9=g_navNode_9.addNode('press','Press',ssUrlPrefix + 'about-us/press/index.htm','nav_id==about','secondaryUrlVariableField==Content');
g_navNode_9_9_0=g_navNode_9_9.addNode('press-media','media',ssUrlPrefix + 'about-us/press/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_9_10=g_navNode_9.addNode('contact-us','Contact Us',ssUrlPrefix + 'about-us/contact-us/index.htm','nav_id==about','secondaryUrlVariableField==Content');
g_navNode_9_10_0=g_navNode_9_10.addNode('contact-us-media','media',ssUrlPrefix + 'about-us/contact-us/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10=g_navNode_Root.addNode('nav-mins','Ministries \x26 Locations',ssUrlPrefix + 'ministries-and-locations/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_0=g_navNode_10.addNode('ministries-and-locations-media','media',ssUrlPrefix + 'ministries-and-locations/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==PH_MEDIA_MAIN');
g_navNode_10_1=g_navNode_10.addNode('ministries','Ministries',ssUrlPrefix + 'ministries-and-locations/ministries/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_1_0=g_navNode_10_1.addNode('athletes-in-action','Athletes in Action',ssUrlPrefix + 'ministries-and-locations/ministries/athletes-in-action/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_1_0_0=g_navNode_10_1_0.addNode('athletes-in-action-media','media',ssUrlPrefix + 'ministries-and-locations/ministries/athletes-in-action/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_1_1=g_navNode_10_1.addNode('donotuse-campus-placeholder','Campus',ssUrlPrefix + 'ministries-and-locations/ministries/campus/index.htm');
g_navNode_10_1_2=g_navNode_10_1.addNode('donotuse-city-placeholder','City',ssUrlPrefix + 'ministries-and-locations/ministries/city/index.htm');
g_navNode_10_1_3=g_navNode_10_1.addNode('christian-embassy--united-nati','Christian Embassy, United Nations',ssUrlPrefix + 'ministries-and-locations/ministries/christian-embassy-united-natio/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_1_3_0=g_navNode_10_1_3.addNode('christian-embassy-un-media','media',ssUrlPrefix + 'ministries-and-locations/ministries/christian-embassy-united-natio/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_1_4=g_navNode_10_1.addNode('christian-embassy--d-c-','Christian Embassy, D.C.',ssUrlPrefix + 'ministries-and-locations/ministries/christian-embassy-dc/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_1_4_0=g_navNode_10_1_4.addNode('christian-embassy-dc-media','media',ssUrlPrefix + 'ministries-and-locations/ministries/christian-embassy-dc/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_1_6=g_navNode_10_1.addNode('faculty-and-graduates','Faculty and Graduates',ssUrlPrefix + 'ministries-and-locations/ministries/faculty-and-graduates/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_1_6_0=g_navNode_10_1_6.addNode('faculty-and-graduates-media','media',ssUrlPrefix + 'ministries-and-locations/ministries/faculty-and-graduates/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_1_7=g_navNode_10_1.addNode('familylife','FamilyLife',ssUrlPrefix + 'ministries-and-locations/ministries/familylife/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_1_7_0=g_navNode_10_1_7.addNode('familylife-media','media',ssUrlPrefix + 'ministries-and-locations/ministries/familylife/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_1_8=g_navNode_10_1.addNode('global-aid-network','Global Aid Network',ssUrlPrefix + 'ministries-and-locations/ministries/gain/index.htm','secondaryUrlVariableField==Content');
g_navNode_10_1_9=g_navNode_10_1.addNode('here-s-life-inner-city','Here\'s Life Inner City',ssUrlPrefix + 'ministries-and-locations/ministries/heres-life-inner-city/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_1_9_0=g_navNode_10_1_9.addNode('heres-life-inner-city-media','media',ssUrlPrefix + 'ministries-and-locations/ministries/heres-life-inner-city/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_1_10=g_navNode_10_1.addNode('donotuse-highschool-placeholde','High School',ssUrlPrefix + 'ministries-and-locations/ministries/highschool/index.htm');
g_navNode_10_1_11=g_navNode_10_1.addNode('donotuse-military-placeholder','Military',ssUrlPrefix + 'ministries-and-locations/ministries/military/index.htm','exclude_from_leftnav==FALSE','exclude_from_sitemap==FALSE');
g_navNode_10_1_12=g_navNode_10_1.addNode('the-impact-movement','The Impact Movement',ssUrlPrefix + 'ministries-and-locations/ministries/the-impact-movement/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_1_12_0=g_navNode_10_1_12.addNode('the-impact-movement-media','media',ssUrlPrefix + 'ministries-and-locations/ministries/the-impact-movement/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_1_13=g_navNode_10_1.addNode('the-jesus-film-project','The JESUS Film Project',ssUrlPrefix + 'ministries-and-locations/ministries/the-jesus-film-project/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_1_14=g_navNode_10_1.addNode('josh-mcdowell-ministry','Josh McDowell Ministry',ssUrlPrefix + 'ministries-and-locations/ministries/josh-mcdowell-ministry/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_1_14_0=g_navNode_10_1_14.addNode('josh-mcdowell-ministry-media','media',ssUrlPrefix + 'ministries-and-locations/ministries/josh-mcdowell-ministry/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_1_15=g_navNode_10_1.addNode('keynote','Keynote',ssUrlPrefix + 'ministries-and-locations/ministries/keynote/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_1_15_0=g_navNode_10_1_15.addNode('keynote-media','media',ssUrlPrefix + 'ministries-and-locations/ministries/keynote/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_1_17=g_navNode_10_1.addNode('all','All',ssUrlPrefix + 'ministries-and-locations/ministries/all/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_1_17_0=g_navNode_10_1_17.addNode('all-media','media',ssUrlPrefix + 'ministries-and-locations/ministries/all/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_2=g_navNode_10.addNode('find-local-ministries-us','Find Local Ministries \x28U.S.\x29',ssUrlPrefix + 'ministries-and-locations/find-local-ministries-us/index.htm','nav_id==mins');
g_navNode_10_2_0=g_navNode_10_2.addNode('find-local-ministires-us-media','media',ssUrlPrefix + 'ministries-and-locations/find-local-ministries-us/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3=g_navNode_10.addNode('africa','Africa',ssUrlPrefix + 'ministries-and-locations/africa/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_0=g_navNode_10_3.addNode('africa-media','media',ssUrlPrefix + 'ministries-and-locations/africa/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_1=g_navNode_10_3.addNode('benin','Benin',ssUrlPrefix + 'ministries-and-locations/africa/benin/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_1_0=g_navNode_10_3_1.addNode('benin-media','media',ssUrlPrefix + 'ministries-and-locations/africa/benin/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_2=g_navNode_10_3.addNode('botswana','Botswana',ssUrlPrefix + 'ministries-and-locations/africa/botswana/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_2_0=g_navNode_10_3_2.addNode('botswana-media','media',ssUrlPrefix + 'ministries-and-locations/africa/botswana/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_3=g_navNode_10_3.addNode('burkina-faso','Burkina Faso',ssUrlPrefix + 'ministries-and-locations/africa/burkina-faso/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_3_0=g_navNode_10_3_3.addNode('burkina-faso-media','media',ssUrlPrefix + 'ministries-and-locations/africa/burkina-faso/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_4=g_navNode_10_3.addNode('burundi','Burundi',ssUrlPrefix + 'ministries-and-locations/africa/burundi/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_4_0=g_navNode_10_3_4.addNode('burundi-media','media',ssUrlPrefix + 'ministries-and-locations/africa/burundi/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_5=g_navNode_10_3.addNode('cameroon','Cameroon',ssUrlPrefix + 'ministries-and-locations/africa/cameroon/index.htm','ministry_id==2272643','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_5_0=g_navNode_10_3_5.addNode('cameroon-media','media',ssUrlPrefix + 'ministries-and-locations/africa/cameroon/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_6=g_navNode_10_3.addNode('cape-verde','Cape Verde',ssUrlPrefix + 'ministries-and-locations/africa/cape-verde/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_6_0=g_navNode_10_3_6.addNode('cape-verde-media','media',ssUrlPrefix + 'ministries-and-locations/africa/cape-verde/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_7=g_navNode_10_3.addNode('chad','Chad',ssUrlPrefix + 'ministries-and-locations/africa/chad/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_7_0=g_navNode_10_3_7.addNode('chad-media','media',ssUrlPrefix + 'ministries-and-locations/africa/chad/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_8=g_navNode_10_3.addNode('congo--the-democratic-republic','Congo, Democratic Republic',ssUrlPrefix + 'ministries-and-locations/africa/congo-democratic-republic/index.htm','secondaryUrlVariableField==Content');
g_navNode_10_3_8_0=g_navNode_10_3_8.addNode('congo-democratic-rep-media','media',ssUrlPrefix + 'ministries-and-locations/africa/congo-democratic-republic/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_9=g_navNode_10_3.addNode('congo','Congo, Republic of',ssUrlPrefix + 'ministries-and-locations/africa/congo-republic-of/index.htm','secondaryUrlVariableField==Content');
g_navNode_10_3_9_0=g_navNode_10_3_9.addNode('congo-republic-of-media','media',ssUrlPrefix + 'ministries-and-locations/africa/congo-republic-of/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_10=g_navNode_10_3.addNode('cote-divoire','Cote D\'Ivoire',ssUrlPrefix + 'ministries-and-locations/africa/cote-divoire/index.htm','secondaryUrlVariableField==Content');
g_navNode_10_3_11=g_navNode_10_3.addNode('ethiopia','Ethiopia',ssUrlPrefix + 'ministries-and-locations/africa/ethiopia/index.htm','secondaryUrlVariableField==Content');
g_navNode_10_3_11_0=g_navNode_10_3_11.addNode('ethiopia-media','media',ssUrlPrefix + 'ministries-and-locations/africa/ethiopia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_12=g_navNode_10_3.addNode('gabon','Gabon',ssUrlPrefix + 'ministries-and-locations/africa/gabon/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_12_0=g_navNode_10_3_12.addNode('gabon-media','media',ssUrlPrefix + 'ministries-and-locations/africa/gabon/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_13=g_navNode_10_3.addNode('gambia','Gambia',ssUrlPrefix + 'ministries-and-locations/africa/gambia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_13_0=g_navNode_10_3_13.addNode('gambia-media','media',ssUrlPrefix + 'ministries-and-locations/africa/gambia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_14=g_navNode_10_3.addNode('ghana','Ghana',ssUrlPrefix + 'ministries-and-locations/africa/ghana/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_14_0=g_navNode_10_3_14.addNode('ghana-media','media',ssUrlPrefix + 'ministries-and-locations/africa/ghana/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_15=g_navNode_10_3.addNode('guinea','Guinea',ssUrlPrefix + 'ministries-and-locations/africa/guinea/index.htm','secondaryUrlVariableField==Content');
g_navNode_10_3_15_0=g_navNode_10_3_15.addNode('guinea-media','media',ssUrlPrefix + 'ministries-and-locations/africa/guinea/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_16=g_navNode_10_3.addNode('guinea-bissau','Guinea Bissau',ssUrlPrefix + 'ministries-and-locations/africa/guinea-bissau/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_16_0=g_navNode_10_3_16.addNode('guinea-bissau-media','media',ssUrlPrefix + 'ministries-and-locations/africa/guinea-bissau/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_17=g_navNode_10_3.addNode('kenya','Kenya',ssUrlPrefix + 'ministries-and-locations/africa/kenya/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_17_0=g_navNode_10_3_17.addNode('kenya-media','media',ssUrlPrefix + 'ministries-and-locations/africa/kenya/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_18=g_navNode_10_3.addNode('lesotho','Lesotho',ssUrlPrefix + 'ministries-and-locations/africa/lesotho/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_18_0=g_navNode_10_3_18.addNode('lesotho-media','media',ssUrlPrefix + 'ministries-and-locations/africa/lesotho/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_19=g_navNode_10_3.addNode('liberia','Liberia',ssUrlPrefix + 'ministries-and-locations/africa/liberia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_19_0=g_navNode_10_3_19.addNode('liberia-media','media',ssUrlPrefix + 'ministries-and-locations/africa/liberia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_20=g_navNode_10_3.addNode('madagascar','Madagascar',ssUrlPrefix + 'ministries-and-locations/africa/madagascar/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_20_0=g_navNode_10_3_20.addNode('madagascar-media','media',ssUrlPrefix + 'ministries-and-locations/africa/madagascar/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_21=g_navNode_10_3.addNode('malawi','Malawi',ssUrlPrefix + 'ministries-and-locations/africa/malawi/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_21_0=g_navNode_10_3_21.addNode('malawi-media','media',ssUrlPrefix + 'ministries-and-locations/africa/malawi/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_22=g_navNode_10_3.addNode('mali','Mali',ssUrlPrefix + 'ministries-and-locations/africa/mali/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_22_0=g_navNode_10_3_22.addNode('mali-media','media',ssUrlPrefix + 'ministries-and-locations/africa/mali/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_23=g_navNode_10_3.addNode('mozambique','Mozambique',ssUrlPrefix + 'ministries-and-locations/africa/mozambique/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_23_0=g_navNode_10_3_23.addNode('mozambique-media','media',ssUrlPrefix + 'ministries-and-locations/africa/mozambique/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_24=g_navNode_10_3.addNode('namibia','Namibia',ssUrlPrefix + 'ministries-and-locations/africa/namibia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_24_0=g_navNode_10_3_24.addNode('namibia-media','media',ssUrlPrefix + 'ministries-and-locations/africa/namibia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_25=g_navNode_10_3.addNode('niger','Niger',ssUrlPrefix + 'ministries-and-locations/africa/niger/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_25_0=g_navNode_10_3_25.addNode('niger-media','media',ssUrlPrefix + 'ministries-and-locations/africa/niger/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_26=g_navNode_10_3.addNode('nigeria','Nigeria',ssUrlPrefix + 'ministries-and-locations/africa/nigeria/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_26_0=g_navNode_10_3_26.addNode('nigeria-media','media',ssUrlPrefix + 'ministries-and-locations/africa/nigeria/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_27=g_navNode_10_3.addNode('rwanda','Rwanda',ssUrlPrefix + 'ministries-and-locations/africa/rwanda/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_27_0=g_navNode_10_3_27.addNode('rwanda-media','media',ssUrlPrefix + 'ministries-and-locations/africa/rwanda/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_28=g_navNode_10_3.addNode('senegal','Senegal',ssUrlPrefix + 'ministries-and-locations/africa/senegal/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_28_0=g_navNode_10_3_28.addNode('senegal-media','media',ssUrlPrefix + 'ministries-and-locations/africa/senegal/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_29=g_navNode_10_3.addNode('sierra-leone','Sierra Leone',ssUrlPrefix + 'ministries-and-locations/africa/sierra-leone/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_29_0=g_navNode_10_3_29.addNode('sierra-leone-media','media',ssUrlPrefix + 'ministries-and-locations/africa/sierra-leone/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_30=g_navNode_10_3.addNode('south-africa','South Africa',ssUrlPrefix + 'ministries-and-locations/africa/south-africa/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_30_0=g_navNode_10_3_30.addNode('south-africa-media','media',ssUrlPrefix + 'ministries-and-locations/africa/south-africa/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_31=g_navNode_10_3.addNode('swaziland','Swaziland',ssUrlPrefix + 'ministries-and-locations/africa/swaziland/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_31_0=g_navNode_10_3_31.addNode('swaziland-media','media',ssUrlPrefix + 'ministries-and-locations/africa/swaziland/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_32=g_navNode_10_3.addNode('tanzania','Tanzania',ssUrlPrefix + 'ministries-and-locations/africa/tanzania/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_32_0=g_navNode_10_3_32.addNode('tanzania-media','media',ssUrlPrefix + 'ministries-and-locations/africa/tanzania/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_33=g_navNode_10_3.addNode('togo','Togo',ssUrlPrefix + 'ministries-and-locations/africa/togo/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_33_0=g_navNode_10_3_33.addNode('togo-media','media',ssUrlPrefix + 'ministries-and-locations/africa/togo/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_34=g_navNode_10_3.addNode('uganda','Uganda',ssUrlPrefix + 'ministries-and-locations/africa/uganda/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_34_0=g_navNode_10_3_34.addNode('uganda-media','media',ssUrlPrefix + 'ministries-and-locations/africa/uganda/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_35=g_navNode_10_3.addNode('zambia','Zambia',ssUrlPrefix + 'ministries-and-locations/africa/zambia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_35_0=g_navNode_10_3_35.addNode('zambia-media','media',ssUrlPrefix + 'ministries-and-locations/africa/zambia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_3_36=g_navNode_10_3.addNode('zimbabwe','Zimbabwe',ssUrlPrefix + 'ministries-and-locations/africa/zimbabwe/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_3_36_0=g_navNode_10_3_36.addNode('zimbabwe-media','media',ssUrlPrefix + 'ministries-and-locations/africa/zimbabwe/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4=g_navNode_10.addNode('americas','Americas',ssUrlPrefix + 'ministries-and-locations/americas/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_0=g_navNode_10_4.addNode('americas-media','media',ssUrlPrefix + 'ministries-and-locations/americas/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==PH_MEDIA_MAIN');
g_navNode_10_4_1=g_navNode_10_4.addNode('antiqua-and-barbuda','Antiqua and Barbuda',ssUrlPrefix + 'ministries-and-locations/americas/antiqua-and-barbuda/index.htm','nav_id==mins','secondaryUrlVariableField==Content','urlDirname==antiqua-and-barbuda');
g_navNode_10_4_1_0=g_navNode_10_4_1.addNode('antiqua-and-barbuda-media','media',ssUrlPrefix + 'ministries-and-locations/americas/antiqua-and-barbuda/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_2=g_navNode_10_4.addNode('argentina','Argentina',ssUrlPrefix + 'ministries-and-locations/americas/argentina/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_2_0=g_navNode_10_4_2.addNode('argentina-media','media',ssUrlPrefix + 'ministries-and-locations/americas/argentina/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_3=g_navNode_10_4.addNode('the-bahamas','The Bahamas',ssUrlPrefix + 'ministries-and-locations/americas/the-bahamas/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_3_0=g_navNode_10_4_3.addNode('the-bahamas-media','media',ssUrlPrefix + 'ministries-and-locations/americas/the-bahamas/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_4=g_navNode_10_4.addNode('belize','Belize',ssUrlPrefix + 'ministries-and-locations/americas/belize/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_4_0=g_navNode_10_4_4.addNode('belize-media','media',ssUrlPrefix + 'ministries-and-locations/americas/belize/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_5=g_navNode_10_4.addNode('bolivia','Bolivia',ssUrlPrefix + 'ministries-and-locations/americas/bolivia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_5_0=g_navNode_10_4_5.addNode('bolivia-media','media',ssUrlPrefix + 'ministries-and-locations/americas/bolivia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_6=g_navNode_10_4.addNode('brazil','Brazil',ssUrlPrefix + 'ministries-and-locations/americas/brazil/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_6_0=g_navNode_10_4_6.addNode('brazil-media','media',ssUrlPrefix + 'ministries-and-locations/americas/brazil/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==PH_MEDIA_MAIN');
g_navNode_10_4_7=g_navNode_10_4.addNode('canada','Canada',ssUrlPrefix + 'ministries-and-locations/americas/canada/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_7_0=g_navNode_10_4_7.addNode('canada-media','media',ssUrlPrefix + 'ministries-and-locations/americas/canada/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_8=g_navNode_10_4.addNode('chile','Chile',ssUrlPrefix + 'ministries-and-locations/americas/chile/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_8_0=g_navNode_10_4_8.addNode('chile-media','media',ssUrlPrefix + 'ministries-and-locations/americas/chile/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_9=g_navNode_10_4.addNode('colombia','Colombia',ssUrlPrefix + 'ministries-and-locations/americas/colombia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_9_0=g_navNode_10_4_9.addNode('colombia-media','media',ssUrlPrefix + 'ministries-and-locations/americas/colombia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_10=g_navNode_10_4.addNode('costa-rica','Costa Rica',ssUrlPrefix + 'ministries-and-locations/americas/costa-rica/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_10_0=g_navNode_10_4_10.addNode('costa-rica-media','media',ssUrlPrefix + 'ministries-and-locations/americas/costa-rica/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_11=g_navNode_10_4.addNode('cuba','Cuba',ssUrlPrefix + 'ministries-and-locations/americas/cuba/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_11_0=g_navNode_10_4_11.addNode('cuba-media','media',ssUrlPrefix + 'ministries-and-locations/americas/cuba/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_12=g_navNode_10_4.addNode('dominica','Dominica',ssUrlPrefix + 'ministries-and-locations/americas/dominica/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_12_0=g_navNode_10_4_12.addNode('dominica-media','media',ssUrlPrefix + 'ministries-and-locations/americas/dominica/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_13=g_navNode_10_4.addNode('dominican-republic','Dominican Republic',ssUrlPrefix + 'ministries-and-locations/americas/dominican-republic/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_13_0=g_navNode_10_4_13.addNode('dominican-republic-media','media',ssUrlPrefix + 'ministries-and-locations/americas/dominican-republic/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_14=g_navNode_10_4.addNode('ecuador','Ecuador',ssUrlPrefix + 'ministries-and-locations/americas/ecuador/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_14_0=g_navNode_10_4_14.addNode('ecuador-media','media',ssUrlPrefix + 'ministries-and-locations/americas/ecuador/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_15=g_navNode_10_4.addNode('el-salvador','El Salvador',ssUrlPrefix + 'ministries-and-locations/americas/el-salvador/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_15_0=g_navNode_10_4_15.addNode('el-salvador-media','media',ssUrlPrefix + 'ministries-and-locations/americas/el-salvador/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_16=g_navNode_10_4.addNode('grenada','Grenada',ssUrlPrefix + 'ministries-and-locations/americas/grenada/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_16_0=g_navNode_10_4_16.addNode('grenada-media','media',ssUrlPrefix + 'ministries-and-locations/americas/grenada/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_17=g_navNode_10_4.addNode('guatemala','Guatemala',ssUrlPrefix + 'ministries-and-locations/americas/guatemala/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_17_0=g_navNode_10_4_17.addNode('guatemala-media','media',ssUrlPrefix + 'ministries-and-locations/americas/guatemala/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_18=g_navNode_10_4.addNode('guyana','Guyana',ssUrlPrefix + 'ministries-and-locations/americas/guyana/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_18_0=g_navNode_10_4_18.addNode('guyana-media','media',ssUrlPrefix + 'ministries-and-locations/americas/guyana/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_19=g_navNode_10_4.addNode('haiti','Haiti',ssUrlPrefix + 'ministries-and-locations/americas/haiti/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_19_0=g_navNode_10_4_19.addNode('haiti-media','media',ssUrlPrefix + 'ministries-and-locations/americas/haiti/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_20=g_navNode_10_4.addNode('honduras','Honduras',ssUrlPrefix + 'ministries-and-locations/americas/honduras/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_20_0=g_navNode_10_4_20.addNode('honduras-media','media',ssUrlPrefix + 'ministries-and-locations/americas/honduras/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_21=g_navNode_10_4.addNode('jamaica','Jamaica',ssUrlPrefix + 'ministries-and-locations/americas/jamaica/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_21_0=g_navNode_10_4_21.addNode('jamaica-media','media',ssUrlPrefix + 'ministries-and-locations/americas/jamaica/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_22=g_navNode_10_4.addNode('mexico','Mexico',ssUrlPrefix + 'ministries-and-locations/americas/mexico/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_22_0=g_navNode_10_4_22.addNode('mexico-media','media',ssUrlPrefix + 'ministries-and-locations/americas/mexico/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_23=g_navNode_10_4.addNode('nicaragua','Nicaragua',ssUrlPrefix + 'ministries-and-locations/americas/nicaragua/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_23_0=g_navNode_10_4_23.addNode('nicaragua-media','media',ssUrlPrefix + 'ministries-and-locations/americas/nicaragua/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_24=g_navNode_10_4.addNode('panama','Panama',ssUrlPrefix + 'ministries-and-locations/americas/panama/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_24_0=g_navNode_10_4_24.addNode('panama-media','media',ssUrlPrefix + 'ministries-and-locations/americas/panama/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_25=g_navNode_10_4.addNode('paraguay','Paraguay',ssUrlPrefix + 'ministries-and-locations/americas/paraguay/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_25_0=g_navNode_10_4_25.addNode('paraguay-media','media',ssUrlPrefix + 'ministries-and-locations/americas/paraguay/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_26=g_navNode_10_4.addNode('peru','Peru',ssUrlPrefix + 'ministries-and-locations/americas/peru/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_26_0=g_navNode_10_4_26.addNode('peru-media','media',ssUrlPrefix + 'ministries-and-locations/americas/peru/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_27=g_navNode_10_4.addNode('saint-lucia','Saint Lucia',ssUrlPrefix + 'ministries-and-locations/americas/saint-lucia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_27_0=g_navNode_10_4_27.addNode('saint-lucia-media','media',ssUrlPrefix + 'ministries-and-locations/americas/saint-lucia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_28=g_navNode_10_4.addNode('saint-vincent-and-the-grenadin','Saint Vincent and the Grenadines',ssUrlPrefix + 'ministries-and-locations/americas/st-vincent-and-the-grenadines/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_28_0=g_navNode_10_4_28.addNode('st-vincent-grenadines-media','media',ssUrlPrefix + 'ministries-and-locations/americas/st-vincent-and-the-grenadines/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_29=g_navNode_10_4.addNode('suriname','Suriname',ssUrlPrefix + 'ministries-and-locations/americas/suriname/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_29_0=g_navNode_10_4_29.addNode('suriname-media','media',ssUrlPrefix + 'ministries-and-locations/americas/suriname/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_30=g_navNode_10_4.addNode('trinidad-and-tobago','Trinidad and Tobago',ssUrlPrefix + 'ministries-and-locations/americas/trinidad-and-tobago/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_30_0=g_navNode_10_4_30.addNode('trinidad-and-tobago-media','media',ssUrlPrefix + 'ministries-and-locations/americas/trinidad-and-tobago/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_31=g_navNode_10_4.addNode('united-states','United States',ssUrlPrefix + 'ministries-and-locations/americas/united-states/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_31_0=g_navNode_10_4_31.addNode('united-states-media','media',ssUrlPrefix + 'ministries-and-locations/americas/united-states/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_32=g_navNode_10_4.addNode('uruguay','Uruguay',ssUrlPrefix + 'ministries-and-locations/americas/uruguay/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_32_0=g_navNode_10_4_32.addNode('uruguay-media','media',ssUrlPrefix + 'ministries-and-locations/americas/uruguay/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_4_33=g_navNode_10_4.addNode('venezuela','Venezuela',ssUrlPrefix + 'ministries-and-locations/americas/venezuela/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_4_33_0=g_navNode_10_4_33.addNode('venezuela-media','media',ssUrlPrefix + 'ministries-and-locations/americas/venezuela/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_5=g_navNode_10.addNode('asia','Asia',ssUrlPrefix + 'ministries-and-locations/asia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_5_0=g_navNode_10_5.addNode('asia-media','media',ssUrlPrefix + 'ministries-and-locations/asia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_5_1=g_navNode_10_5.addNode('cambodia','Cambodia',ssUrlPrefix + 'ministries-and-locations/asia/cambodia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_5_1_0=g_navNode_10_5_1.addNode('cambodia-media','media',ssUrlPrefix + 'ministries-and-locations/asia/cambodia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_5_2=g_navNode_10_5.addNode('india','India',ssUrlPrefix + 'ministries-and-locations/asia/india/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_5_2_0=g_navNode_10_5_2.addNode('india-media','media',ssUrlPrefix + 'ministries-and-locations/asia/india/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_5_3=g_navNode_10_5.addNode('indonesia','Indonesia',ssUrlPrefix + 'ministries-and-locations/asia/indonesia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_5_3_0=g_navNode_10_5_3.addNode('indonesia-media','media',ssUrlPrefix + 'ministries-and-locations/asia/indonesia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_5_4=g_navNode_10_5.addNode('japan','Japan',ssUrlPrefix + 'ministries-and-locations/asia/japan/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_5_4_0=g_navNode_10_5_4.addNode('japan-media','media',ssUrlPrefix + 'ministries-and-locations/asia/japan/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_5_5=g_navNode_10_5.addNode('south-korea','South Korea',ssUrlPrefix + 'ministries-and-locations/asia/south-korea/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_5_5_0=g_navNode_10_5_5.addNode('south-korea-media','media',ssUrlPrefix + 'ministries-and-locations/asia/south-korea/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_5_6=g_navNode_10_5.addNode('kuwait','Kuwait',ssUrlPrefix + 'ministries-and-locations/asia/kuwait/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_5_6_0=g_navNode_10_5_6.addNode('kuwait-media','media',ssUrlPrefix + 'ministries-and-locations/asia/kuwait/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_5_7=g_navNode_10_5.addNode('mongolia','Mongolia',ssUrlPrefix + 'ministries-and-locations/asia/mongolia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_5_7_0=g_navNode_10_5_7.addNode('mongolia-media','media',ssUrlPrefix + 'ministries-and-locations/asia/mongolia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_5_8=g_navNode_10_5.addNode('pakistan','Pakistan',ssUrlPrefix + 'ministries-and-locations/asia/pakistan/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_5_8_0=g_navNode_10_5_8.addNode('pakistan-media','media',ssUrlPrefix + 'ministries-and-locations/asia/pakistan/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_5_9=g_navNode_10_5.addNode('philippines','Philippines',ssUrlPrefix + 'ministries-and-locations/asia/philippines/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_5_9_0=g_navNode_10_5_9.addNode('philippines-media','media',ssUrlPrefix + 'ministries-and-locations/asia/philippines/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_5_10=g_navNode_10_5.addNode('singapore','Singapore',ssUrlPrefix + 'ministries-and-locations/asia/singapore/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_5_10_0=g_navNode_10_5_10.addNode('singapore-media','media',ssUrlPrefix + 'ministries-and-locations/asia/singapore/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_5_11=g_navNode_10_5.addNode('taiwan','Taiwan',ssUrlPrefix + 'ministries-and-locations/asia/taiwan/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_5_11_0=g_navNode_10_5_11.addNode('taiwan-media','media',ssUrlPrefix + 'ministries-and-locations/asia/taiwan/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_5_12=g_navNode_10_5.addNode('thailand','Thailand',ssUrlPrefix + 'ministries-and-locations/asia/thailand/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_5_12_0=g_navNode_10_5_12.addNode('thailand-media','media',ssUrlPrefix + 'ministries-and-locations/asia/thailand/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_6=g_navNode_10.addNode('australia-oceania','Australia \x26 Oceania',ssUrlPrefix + 'ministries-and-locations/australia-and-oceania/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_6_0=g_navNode_10_6.addNode('australia-and-oceania-media','media',ssUrlPrefix + 'ministries-and-locations/australia-and-oceania/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_6_1=g_navNode_10_6.addNode('australia','Australia',ssUrlPrefix + 'ministries-and-locations/australia-and-oceania/australia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_6_1_0=g_navNode_10_6_1.addNode('australia-media','media',ssUrlPrefix + 'ministries-and-locations/australia-and-oceania/australia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_6_2=g_navNode_10_6.addNode('fiji','Fiji',ssUrlPrefix + 'ministries-and-locations/australia-and-oceania/fiji/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_6_2_0=g_navNode_10_6_2.addNode('fiji-media','media',ssUrlPrefix + 'ministries-and-locations/australia-and-oceania/fiji/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_6_3=g_navNode_10_6.addNode('new-zealand','New Zealand',ssUrlPrefix + 'ministries-and-locations/australia-and-oceania/new-zealand/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_6_3_0=g_navNode_10_6_3.addNode('new-zealand-media','media',ssUrlPrefix + 'ministries-and-locations/australia-and-oceania/new-zealand/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_6_4=g_navNode_10_6.addNode('papua-new-guinea','Papua New Guinea',ssUrlPrefix + 'ministries-and-locations/australia-and-oceania/papua-new-guinea/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_6_4_0=g_navNode_10_6_4.addNode('papua-new-guinea-media','media',ssUrlPrefix + 'ministries-and-locations/australia-and-oceania/papua-new-guinea/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_6_5=g_navNode_10_6.addNode('solomon-islands','Solomon Islands',ssUrlPrefix + 'ministries-and-locations/australia-and-oceania/solomon-islands/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_6_5_0=g_navNode_10_6_5.addNode('solomon-islands-media','media',ssUrlPrefix + 'ministries-and-locations/australia-and-oceania/solomon-islands/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_6_6=g_navNode_10_6.addNode('tonga','Tonga',ssUrlPrefix + 'ministries-and-locations/australia-and-oceania/tonga/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_6_6_0=g_navNode_10_6_6.addNode('tonga-media','media',ssUrlPrefix + 'ministries-and-locations/australia-and-oceania/tonga/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_6_7=g_navNode_10_6.addNode('vanuatu','Vanuatu',ssUrlPrefix + 'ministries-and-locations/australia-and-oceania/vanuatu/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_6_7_0=g_navNode_10_6_7.addNode('vanuatu-media','media',ssUrlPrefix + 'ministries-and-locations/australia-and-oceania/vanuatu/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7=g_navNode_10.addNode('europe','Europe',ssUrlPrefix + 'ministries-and-locations/europe/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_0=g_navNode_10_7.addNode('europe-media','media',ssUrlPrefix + 'ministries-and-locations/europe/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_1=g_navNode_10_7.addNode('albania','Albania',ssUrlPrefix + 'ministries-and-locations/europe/albania/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_1_0=g_navNode_10_7_1.addNode('albania-media','media',ssUrlPrefix + 'ministries-and-locations/europe/albania/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_2=g_navNode_10_7.addNode('armenia','Armenia',ssUrlPrefix + 'ministries-and-locations/europe/armenia/index.htm','secondaryUrlVariableField==Content');
g_navNode_10_7_3=g_navNode_10_7.addNode('austria','Austria',ssUrlPrefix + 'ministries-and-locations/europe/austria/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_3_0=g_navNode_10_7_3.addNode('austria-media','media',ssUrlPrefix + 'ministries-and-locations/europe/austria/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_4=g_navNode_10_7.addNode('belarus','Belarus',ssUrlPrefix + 'ministries-and-locations/europe/belarus/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_4_0=g_navNode_10_7_4.addNode('belarus-media','media',ssUrlPrefix + 'ministries-and-locations/europe/belarus/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_5=g_navNode_10_7.addNode('bosnia-and-herzegovina','Bosnia and Herzegovina',ssUrlPrefix + 'ministries-and-locations/europe/bosnia-herzegovina/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_6=g_navNode_10_7.addNode('bulgaria','Bulgaria',ssUrlPrefix + 'ministries-and-locations/europe/bulgaria/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_7=g_navNode_10_7.addNode('croatia','Croatia',ssUrlPrefix + 'ministries-and-locations/europe/croatia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_7_0=g_navNode_10_7_7.addNode('croatia-media','media',ssUrlPrefix + 'ministries-and-locations/europe/croatia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_8=g_navNode_10_7.addNode('cyprus','Cyprus',ssUrlPrefix + 'ministries-and-locations/europe/cyprus/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_8_0=g_navNode_10_7_8.addNode('cyprus-media','media',ssUrlPrefix + 'ministries-and-locations/europe/cyprus/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_9=g_navNode_10_7.addNode('czech-republic','Czech Republic',ssUrlPrefix + 'ministries-and-locations/europe/czech-republic/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_9_0=g_navNode_10_7_9.addNode('czech-republic-media','media',ssUrlPrefix + 'ministries-and-locations/europe/czech-republic/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_10=g_navNode_10_7.addNode('denmark','Denmark',ssUrlPrefix + 'ministries-and-locations/europe/denmark/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_10_0=g_navNode_10_7_10.addNode('denmark-media','media',ssUrlPrefix + 'ministries-and-locations/europe/denmark/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_11=g_navNode_10_7.addNode('estonia','Estonia',ssUrlPrefix + 'ministries-and-locations/europe/estonia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_11_0=g_navNode_10_7_11.addNode('estonia-media','media',ssUrlPrefix + 'ministries-and-locations/europe/estonia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_12=g_navNode_10_7.addNode('finland','Finland',ssUrlPrefix + 'ministries-and-locations/europe/finland/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_12_0=g_navNode_10_7_12.addNode('finland-media','media',ssUrlPrefix + 'ministries-and-locations/europe/finland/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_13=g_navNode_10_7.addNode('france','France',ssUrlPrefix + 'ministries-and-locations/europe/france/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_13_0=g_navNode_10_7_13.addNode('france-media','media',ssUrlPrefix + 'ministries-and-locations/europe/france/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_14=g_navNode_10_7.addNode('georgia','Georgia',ssUrlPrefix + 'ministries-and-locations/europe/georgia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_14_0=g_navNode_10_7_14.addNode('georgia-media','media',ssUrlPrefix + 'ministries-and-locations/europe/georgia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_15=g_navNode_10_7.addNode('germany','Germany',ssUrlPrefix + 'ministries-and-locations/europe/germany/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_15_0=g_navNode_10_7_15.addNode('germany-media','media',ssUrlPrefix + 'ministries-and-locations/europe/germany/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_16=g_navNode_10_7.addNode('greece','Greece',ssUrlPrefix + 'ministries-and-locations/europe/greece/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_16_0=g_navNode_10_7_16.addNode('greece-media','media',ssUrlPrefix + 'ministries-and-locations/europe/greece/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_17=g_navNode_10_7.addNode('hungary','Hungary',ssUrlPrefix + 'ministries-and-locations/europe/hungary/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_17_0=g_navNode_10_7_17.addNode('hungary-media','media',ssUrlPrefix + 'ministries-and-locations/europe/hungary/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_18=g_navNode_10_7.addNode('ireland','Ireland',ssUrlPrefix + 'ministries-and-locations/europe/ireland/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_18_0=g_navNode_10_7_18.addNode('ireland-media','media',ssUrlPrefix + 'ministries-and-locations/europe/ireland/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_19=g_navNode_10_7.addNode('italy','Italy',ssUrlPrefix + 'ministries-and-locations/europe/italy/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_19_0=g_navNode_10_7_19.addNode('italy-media','media',ssUrlPrefix + 'ministries-and-locations/europe/italy/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_20=g_navNode_10_7.addNode('latvia','Latvia',ssUrlPrefix + 'ministries-and-locations/europe/latvia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_20_0=g_navNode_10_7_20.addNode('latvia-media','media',ssUrlPrefix + 'ministries-and-locations/europe/latvia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_21=g_navNode_10_7.addNode('lithuania','Lithuania',ssUrlPrefix + 'ministries-and-locations/europe/lithuania/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_21_0=g_navNode_10_7_21.addNode('lithuania-media','media',ssUrlPrefix + 'ministries-and-locations/europe/lithuania/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_22=g_navNode_10_7.addNode('macedonia','Macedonia',ssUrlPrefix + 'ministries-and-locations/europe/macedonia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_23=g_navNode_10_7.addNode('moldova','Moldova',ssUrlPrefix + 'ministries-and-locations/europe/moldova/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_23_0=g_navNode_10_7_23.addNode('moldova-media','media',ssUrlPrefix + 'ministries-and-locations/europe/moldova/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_24=g_navNode_10_7.addNode('netherlands','Netherlands',ssUrlPrefix + 'ministries-and-locations/europe/netherlands/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_24_0=g_navNode_10_7_24.addNode('netherlands-media','media',ssUrlPrefix + 'ministries-and-locations/europe/netherlands/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_25=g_navNode_10_7.addNode('norway','Norway',ssUrlPrefix + 'ministries-and-locations/europe/norway/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_25_0=g_navNode_10_7_25.addNode('norway-media','media',ssUrlPrefix + 'ministries-and-locations/europe/norway/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_26=g_navNode_10_7.addNode('poland','Poland',ssUrlPrefix + 'ministries-and-locations/europe/poland/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_26_0=g_navNode_10_7_26.addNode('poland-media','media',ssUrlPrefix + 'ministries-and-locations/europe/poland/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_27=g_navNode_10_7.addNode('portugal','Portugal',ssUrlPrefix + 'ministries-and-locations/europe/portugal/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_27_0=g_navNode_10_7_27.addNode('portugal-media','media',ssUrlPrefix + 'ministries-and-locations/europe/portugal/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_28=g_navNode_10_7.addNode('romania','Romania',ssUrlPrefix + 'ministries-and-locations/europe/romania/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_28_0=g_navNode_10_7_28.addNode('romania-media','media',ssUrlPrefix + 'ministries-and-locations/europe/romania/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_29=g_navNode_10_7.addNode('russia','Russia',ssUrlPrefix + 'ministries-and-locations/europe/russia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_29_0=g_navNode_10_7_29.addNode('russia-media','media',ssUrlPrefix + 'ministries-and-locations/europe/russia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_30=g_navNode_10_7.addNode('serbia-and-montenegro','Serbia and Montenegro',ssUrlPrefix + 'ministries-and-locations/europe/serbia-montenegro/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_31=g_navNode_10_7.addNode('slovakia','Slovakia',ssUrlPrefix + 'ministries-and-locations/europe/slovakia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_31_0=g_navNode_10_7_31.addNode('slovakia-media','media',ssUrlPrefix + 'ministries-and-locations/europe/slovakia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_32=g_navNode_10_7.addNode('slovenia','Slovenia',ssUrlPrefix + 'ministries-and-locations/europe/slovenia/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_32_0=g_navNode_10_7_32.addNode('slovenia-media','media',ssUrlPrefix + 'ministries-and-locations/europe/slovenia/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_33=g_navNode_10_7.addNode('spain','Spain',ssUrlPrefix + 'ministries-and-locations/europe/spain/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_33_0=g_navNode_10_7_33.addNode('spain-media','media',ssUrlPrefix + 'ministries-and-locations/europe/spain/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_34=g_navNode_10_7.addNode('sweden','Sweden',ssUrlPrefix + 'ministries-and-locations/europe/sweden/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_34_0=g_navNode_10_7_34.addNode('sweden-media','media',ssUrlPrefix + 'ministries-and-locations/europe/sweden/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_35=g_navNode_10_7.addNode('switzerland','Switzerland',ssUrlPrefix + 'ministries-and-locations/europe/switzerland/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_35_0=g_navNode_10_7_35.addNode('switzerland-media','media',ssUrlPrefix + 'ministries-and-locations/europe/switzerland/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_36=g_navNode_10_7.addNode('ukraine','Ukraine',ssUrlPrefix + 'ministries-and-locations/europe/ukraine/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_36_0=g_navNode_10_7_36.addNode('ukraine-media','media',ssUrlPrefix + 'ministries-and-locations/europe/ukraine/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_10_7_37=g_navNode_10_7.addNode('united-kingdom','United Kingdom',ssUrlPrefix + 'ministries-and-locations/europe/united-kingdom/index.htm','nav_id==mins','secondaryUrlVariableField==Content');
g_navNode_10_7_37_0=g_navNode_10_7_37.addNode('united-kingdom-media','media',ssUrlPrefix + 'ministries-and-locations/europe/united-kingdom/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_11=g_navNode_Root.addNode('nav-store','Store',ssUrlPrefix + 'store/index.htm','nav_id==store','secondaryUrlVariableField==Content');
g_navNode_11_0=g_navNode_11.addNode('store-media','media',ssUrlPrefix + 'store/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==Content');
g_navNode_11_1=g_navNode_11.addNode('all-stores','All Stores',ssUrlPrefix + 'store/all-stores/index.htm','nav_id==store','secondaryUrlVariableField==Content');
g_navNode_11_1_0=g_navNode_11_1.addNode('all-stores-media','media',ssUrlPrefix + 'store/all-stores/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==Content');
g_navNode_11_2=g_navNode_11.addNode('featured-products','Featured Products',ssUrlPrefix + 'store/featured-products/index.htm','nav_id==store','secondaryUrlVariableField==Content');
g_navNode_11_2_0=g_navNode_11_2.addNode('featured-products-media','media',ssUrlPrefix + 'store/featured-products/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE','secondaryUrlVariableField==Content');
g_navNode_12=g_navNode_Root.addNode('nav-give','Give',ssUrlPrefix + 'give/index.htm','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_0=g_navNode_12.addNode('view-gift-cart','View Gift Cart',ssUrlPrefix + 'give/view-gift-cart/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_0_0=g_navNode_12_0.addNode('add-staff-member-gift','Add Staff Member Gift',ssUrlPrefix + 'give/view-gift-cart/add-staff-member-gift/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_0_1=g_navNode_12_0.addNode('add-ministry-gift','Add Ministry Gift',ssUrlPrefix + 'give/view-gift-cart/add-ministry-gift/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_0_2=g_navNode_12_0.addNode('add-fund-appeal-gift','Add Fund Appeal Gift',ssUrlPrefix + 'give/view-gift-cart/add-fund-appeal-gift/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_1=g_navNode_12.addNode('my-account','My Account',ssUrlPrefix + 'give/my-account/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_1_0=g_navNode_12_1.addNode('my-profile','My Profile',ssUrlPrefix + 'give/my-account/my-profile/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_1_1=g_navNode_12_1.addNode('my-giving-history','My Giving History',ssUrlPrefix + 'give/my-account/my-giving-history/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_1_2=g_navNode_12_1.addNode('my-recurring-gifts','My Recurring Gifts',ssUrlPrefix + 'give/my-account/my-recurring-gifts/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_1_3=g_navNode_12_1.addNode('my-payment-methods','My Payment Methods',ssUrlPrefix + 'give/my-account/my-payment-methods/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_1_4=g_navNode_12_1.addNode('my-ecommunications','My e-Communications',ssUrlPrefix + 'give/my-account/my-ecommunications/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_1_5=g_navNode_12_1.addNode('change-username','Change Username',ssUrlPrefix + 'give/my-account/change-username/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_1_6=g_navNode_12_1.addNode('change-password','Change Password',ssUrlPrefix + 'give/my-account/change-password/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_2=g_navNode_12.addNode('give-by-check','Give by Check',ssUrlPrefix + 'give/give-by-check/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_3=g_navNode_12.addNode('credit-card-by-mail-or-phone','Credit Card by Mail or Phone',ssUrlPrefix + 'give/credit-card-by-mail-or-phone/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_4=g_navNode_12.addNode('bank-account-eft-by-mail-or-ph','Bank Account\x28EFT\x29 by Mail or Phone',ssUrlPrefix + 'give/bank-account-eft-by-mail-or-phone/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_5=g_navNode_12.addNode('give-stocks-mutual-funds-prope','Give Stocks, Mutual Funds, Property and Non-Cash Gifts',ssUrlPrefix + 'give/give-stocks-mutual-funds-property-and-non-cash-gifts/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_6=g_navNode_12.addNode('ira-rollover-opportunity','IRA Rollover Opportunity',ssUrlPrefix + 'give/ira-rollover-opportunity/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_7=g_navNode_12.addNode('planned-giving-wills-trusts-an','Planned Giving\x3a  Wills, Trusts and Annuities',ssUrlPrefix + 'give/planned-giving-wills-trusts-and-annuities/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_8=g_navNode_12.addNode('redir-donor-relations','Donor Relations',ssUrlPrefix + 'give/donor-relations/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_9=g_navNode_12.addNode('faqs-about-fundraising','FAQ',ssUrlPrefix + 'give/faq/index.htm','exclude_from_leftnav==TRUE','nav_id==give','secondaryUrlVariableField==Content');
g_navNode_12_9_0=g_navNode_12_9.addNode('faq-media','media',ssUrlPrefix + 'give/faq/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_12_10=g_navNode_12.addNode('give-media','media',ssUrlPrefix + 'give/media/index.htm','exclude_from_leftnav==TRUE','exclude_from_sitemap==TRUE');
g_navNode_35=g_navNode_Root.addNode('ussc-public-videos','U.S. Staff Conference Videos',ssUrlPrefix + 'csu/index.htm','exclude_from_leftnav==TRUE','secondaryUrlVariableField==Content');
g_navNode_38=g_navNode_Root.addNode('survey','Survey',ssUrlPrefix + 'survey/index.htm','exclude_from_leftnav==TRUE','nav_id==survey');
