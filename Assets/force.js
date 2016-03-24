#pragma strict
var rb: Rigidbody2D;
function Start () {
rb = GetComponent.<Rigidbody2D>();
}

function Update () {
rb.AddForce(Vector2.right*3);
}
function OnTriggerEnter2D (other :  Collider2D) {
if(other.gameObject.CompareTag("respawn"))
{ 
rb.position.x=-4;
	}	

	}