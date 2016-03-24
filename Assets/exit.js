#pragma strict
var ya : int;
var speed : int;
var sc : int;
function Start () {
ya=0;
speed=5;
}

function Update () {
transform.position+=Vector3.down*Time.deltaTime*speed;
sc=movemeent.score;
var ac =sc %5;
switch(ac)
{case 0:speed=7;
break;
case 1:speed=8;
break;
case 2:speed=9;
break;
case 3:speed=10;
break;
case 4:speed=11;
break;
}
}

function OnTriggerEnter2D (other :  Collider2D) {
if(other.gameObject.CompareTag("ground"))
{ya=1;
yield WaitForSeconds(3);
Application.LoadLevel(0);
	}	
	
	}
	function OnGUI(){
	GUI.skin.box.fontSize=Screen.width/20;
	if(ya==1)
	{if(PlayerPrefs.GetInt("sco",0)>sc)
	  GUI.Box (Rect (0,Screen.height/2,Screen.width,Screen.height/15), "<color=orange>YOU LOSE</color>");
	 else
	 GUI.Box (Rect (0,Screen.height/2,Screen.width,Screen.height/15), "<color=orange>NEW HIGH SCORE</color>");
 	 }
	}
	