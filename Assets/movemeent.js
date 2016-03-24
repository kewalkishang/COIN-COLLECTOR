#pragma strict

var anim : Animator;
var effect : Transform;
 var random : int;
static var score : int; 
 var rb: Rigidbody2D;
 var thePrefab : GameObject;
public var positions : Vector3[] ;
 
var lastPosition : Vector3;
var myTransform : Transform;
var isMoving : boolean;
var saasd : int;

function Start () {

saasd =0;

Screen.orientation = ScreenOrientation.Portrait;
anim=gameObject.GetComponent(Animator);
rb = GetComponent.<Rigidbody2D>();
score=0;
  myTransform = transform;
     lastPosition = myTransform.position;
     isMoving = false;
}
function Update() {

if (Input.GetKeyDown(KeyCode.Escape)) 
    Application.LoadLevel(0); 
    
    
  
 if ( myTransform.position != lastPosition )
          isMoving = true;
     else
          isMoving = false;
 
     lastPosition = myTransform.position;
    // Debug.Log(isMoving);
    if(!isMoving)
    anim.SetFloat("speed",0);
}

function moveleft() {

saasd=1;
anim.SetFloat("speed",2);
transform.Translate (Vector3.left *1*saasd);

}

 


function moveright() {

saasd=1;
anim.SetFloat("speed",-2);
 transform.Translate (Vector3.right *1*saasd);

}

function OnTriggerEnter2D (other :  Collider2D) {
if(other.gameObject.CompareTag("kakka"))
{ score= score+1;
other.gameObject.SetActive(false);
Instantiate(effect,other.transform.position,other.transform.rotation);
var randomNumber= Random.Range(0,positions.Length);
	    var instance : GameObject = Instantiate(thePrefab,positions[randomNumber], transform.rotation);

	}	
	if(PlayerPrefs.GetInt("sco",0)<score)
	{PlayerPrefs.SetInt("sco",score);
	}
	}
	 function OnGUI() {
	 GUI.skin.box.fontSize=Screen.width/20;
	 GUI.Box(Rect(50,50,350,100)," Coins-"+score);
//GUI.Label(Rect(50,50,500,500),"Coins - "+score);

	 }