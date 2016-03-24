#pragma strict

function Start () {
yield WaitForSeconds(2);
Application.LoadLevel(0);
}

function Update () {

}
function OnGUI() {
   GUI.skin.box.fontSize=Screen.width/20;
   GUI.skin.label.fontSize=Screen.width/20;
      GUI.backgroundColor=Color.red;
   GUI.Box (Rect (Screen.width/4,Screen.height/4,Screen.width/2,Screen.height/4), "<color=orange>HIGH SCORE</color>");
   GUI.Label(Rect((Screen.width/4)+(Screen.width/8),(Screen.height/4)+(3*Screen.width/16),Screen.width/3.5,Screen.height/20),"Coins - "+PlayerPrefs.GetInt("sco",0));
}