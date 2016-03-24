#pragma strict

 function Start () {
Screen.orientation = ScreenOrientation.Portrait;
}

function Update () {

}
function OnGUI () {

 GUI.skin.box.fontSize=Screen.width/20;
  GUI.skin.button.fontSize=Screen.width/30;
     GUI.backgroundColor=Color.red;

    // Make a background box
    GUI.Box (Rect (Screen.width/4,Screen.height/4,Screen.width/2,Screen.height/2.5), "<color=orange>COIN COLLECTOR</color>");

    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect ((Screen.width/5)+(Screen.width/8),(Screen.height/4)+(2.5*Screen.width/16),Screen.width/3,Screen.height/15),"<color=white>Play</color>")) {
    
        Application.LoadLevel (1);
    }

    // Make the second button.
    if (GUI.Button (Rect ((Screen.width/5)+(Screen.width/8),(Screen.height/4)+(5*Screen.width/16),Screen.width/3,Screen.height/15), "<color=white>High Score</color>")) {
        Application.LoadLevel (2);
    }
  
    // Make the second button.
    if (GUI.Button (Rect ((Screen.width/5)+(Screen.width/8),(Screen.height/4)+(7.5*(Screen.width/16)),(Screen.width/3),(Screen.height/15)), "<color=white>Exit</color>")) {
        Application.Quit();
        
    }
  
}