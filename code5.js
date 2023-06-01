gdjs.fase_322Code = {};
gdjs.fase_322Code.GDPlayerObjects1= [];
gdjs.fase_322Code.GDPlayerObjects2= [];
gdjs.fase_322Code.GDparedezinhaObjects1= [];
gdjs.fase_322Code.GDparedezinhaObjects2= [];
gdjs.fase_322Code.GDPortazinhaObjects1= [];
gdjs.fase_322Code.GDPortazinhaObjects2= [];
gdjs.fase_322Code.GDrealplayerObjects1= [];
gdjs.fase_322Code.GDrealplayerObjects2= [];
gdjs.fase_322Code.GDoutra_95paredezinhaObjects1= [];
gdjs.fase_322Code.GDoutra_95paredezinhaObjects2= [];
gdjs.fase_322Code.GDWASDObjects1= [];
gdjs.fase_322Code.GDWASDObjects2= [];
gdjs.fase_322Code.GDspawnpointObjects1= [];
gdjs.fase_322Code.GDspawnpointObjects2= [];
gdjs.fase_322Code.GDNewSpriteObjects1= [];
gdjs.fase_322Code.GDNewSpriteObjects2= [];
gdjs.fase_322Code.GDvoltarObjects1= [];
gdjs.fase_322Code.GDvoltarObjects2= [];
gdjs.fase_322Code.GDoutra_95outra_95paredezinhaObjects1= [];
gdjs.fase_322Code.GDoutra_95outra_95paredezinhaObjects2= [];
gdjs.fase_322Code.GDbackgroundObjects1= [];
gdjs.fase_322Code.GDbackgroundObjects2= [];
gdjs.fase_322Code.GDsofah_95iradoObjects1= [];
gdjs.fase_322Code.GDsofah_95iradoObjects2= [];
gdjs.fase_322Code.GDPressione_95eObjects1= [];
gdjs.fase_322Code.GDPressione_95eObjects2= [];
gdjs.fase_322Code.GDNewLightObjects1= [];
gdjs.fase_322Code.GDNewLightObjects2= [];
gdjs.fase_322Code.GDfundo_95cidadeObjects1= [];
gdjs.fase_322Code.GDfundo_95cidadeObjects2= [];
gdjs.fase_322Code.GDfundo_95ceuObjects1= [];
gdjs.fase_322Code.GDfundo_95ceuObjects2= [];
gdjs.fase_322Code.GDfase1Objects1= [];
gdjs.fase_322Code.GDfase1Objects2= [];
gdjs.fase_322Code.GDfase2Objects1= [];
gdjs.fase_322Code.GDfase2Objects2= [];
gdjs.fase_322Code.GDescuroObjects1= [];
gdjs.fase_322Code.GDescuroObjects2= [];
gdjs.fase_322Code.GDdesistirObjects1= [];
gdjs.fase_322Code.GDdesistirObjects2= [];
gdjs.fase_322Code.GDcontinuarObjects1= [];
gdjs.fase_322Code.GDcontinuarObjects2= [];


gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDrealplayerObjects1Objects = Hashtable.newFrom({"realplayer": gdjs.fase_322Code.GDrealplayerObjects1});
gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDPortazinhaObjects1Objects = Hashtable.newFrom({"Portazinha": gdjs.fase_322Code.GDPortazinhaObjects1});
gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDsofah_9595iradoObjects1Objects = Hashtable.newFrom({"sofah_irado": gdjs.fase_322Code.GDsofah_95iradoObjects1});
gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.fase_322Code.GDPlayerObjects1});
gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDsofah_9595iradoObjects1Objects = Hashtable.newFrom({"sofah_irado": gdjs.fase_322Code.GDsofah_95iradoObjects1});
gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.fase_322Code.GDPlayerObjects1});
gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDrealplayerObjects1Objects = Hashtable.newFrom({"realplayer": gdjs.fase_322Code.GDrealplayerObjects1});
gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDsofah_9595iradoObjects1Objects = Hashtable.newFrom({"sofah_irado": gdjs.fase_322Code.GDsofah_95iradoObjects1});
gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDfase1Objects1Objects = Hashtable.newFrom({"fase1": gdjs.fase_322Code.GDfase1Objects1});
gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDfase2Objects1Objects = Hashtable.newFrom({"fase2": gdjs.fase_322Code.GDfase2Objects1});
gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDdesistirObjects1Objects = Hashtable.newFrom({"desistir": gdjs.fase_322Code.GDdesistirObjects1});
gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDcontinuarObjects1Objects = Hashtable.newFrom({"continuar": gdjs.fase_322Code.GDcontinuarObjects1});
gdjs.fase_322Code.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_322Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_322Code.GDrealplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("spawnpoint"), gdjs.fase_322Code.GDspawnpointObjects1);
{for(var i = 0, len = gdjs.fase_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDPlayerObjects1[i].getBehavior("Tween").addObjectAngleTween("re", 20, "linear", 100, false);
}
}{for(var i = 0, len = gdjs.fase_322Code.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDrealplayerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.fase_322Code.GDspawnpointObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDspawnpointObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_322Code.GDrealplayerObjects1);
{for(var i = 0, len = gdjs.fase_322Code.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDrealplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_322Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_322Code.GDrealplayerObjects1);
{for(var i = 0, len = gdjs.fase_322Code.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDrealplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.fase_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDPlayerObjects1[i].getBehavior("ThreeDFlip").FlipTo(true, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_322Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_322Code.GDrealplayerObjects1);
{for(var i = 0, len = gdjs.fase_322Code.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDrealplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.fase_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDPlayerObjects1[i].getBehavior("ThreeDFlip").FlipTo(false, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Portazinha"), gdjs.fase_322Code.GDPortazinhaObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_322Code.GDrealplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDrealplayerObjects1Objects, gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDPortazinhaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("fase").add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "fase " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("fase"))), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_322Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.fase_322Code.GDPlayerObjects1[i].getBehavior("Tween").hasFinished("rd") ) {
        isConditionTrue_0 = true;
        gdjs.fase_322Code.GDPlayerObjects1[k] = gdjs.fase_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.fase_322Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.fase_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.fase_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDPlayerObjects1[i].getBehavior("Tween").removeTween("rd");
}
}{for(var i = 0, len = gdjs.fase_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDPlayerObjects1[i].getBehavior("Tween").addObjectAngleTween("re", 20, "linear", 100, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_322Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.fase_322Code.GDPlayerObjects1[i].getBehavior("Tween").hasFinished("re") ) {
        isConditionTrue_0 = true;
        gdjs.fase_322Code.GDPlayerObjects1[k] = gdjs.fase_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.fase_322Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.fase_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.fase_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDPlayerObjects1[i].getBehavior("Tween").removeTween("re");
}
}{for(var i = 0, len = gdjs.fase_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDPlayerObjects1[i].getBehavior("Tween").addObjectAngleTween("rd", -(20), "linear", 100, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_322Code.GDrealplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_322Code.GDrealplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.fase_322Code.GDrealplayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.fase_322Code.GDrealplayerObjects1[k] = gdjs.fase_322Code.GDrealplayerObjects1[i];
        ++k;
    }
}
gdjs.fase_322Code.GDrealplayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10524364);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_322Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.fase_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDPlayerObjects1[i].getBehavior("Tween").pauseTween("re");
}
}{for(var i = 0, len = gdjs.fase_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDPlayerObjects1[i].getBehavior("Tween").pauseTween("rd");
}
}{for(var i = 0, len = gdjs.fase_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDPlayerObjects1[i].setAngle(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_322Code.GDrealplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_322Code.GDrealplayerObjects1.length;i<l;++i) {
    if ( gdjs.fase_322Code.GDrealplayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.fase_322Code.GDrealplayerObjects1[k] = gdjs.fase_322Code.GDrealplayerObjects1[i];
        ++k;
    }
}
gdjs.fase_322Code.GDrealplayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10525628);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_322Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.fase_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDPlayerObjects1[i].getBehavior("Tween").resumeTween("re");
}
}{for(var i = 0, len = gdjs.fase_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDPlayerObjects1[i].getBehavior("Tween").resumeTween("rd");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_322Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_322Code.GDrealplayerObjects1);
{for(var i = 0, len = gdjs.fase_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDPlayerObjects1[i].setPosition((( gdjs.fase_322Code.GDrealplayerObjects1.length === 0 ) ? 0 :gdjs.fase_322Code.GDrealplayerObjects1[0].getPointX("")),(( gdjs.fase_322Code.GDrealplayerObjects1.length === 0 ) ? 0 :gdjs.fase_322Code.GDrealplayerObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_322Code.GDrealplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_322Code.GDrealplayerObjects1.length;i<l;++i) {
    if ( gdjs.fase_322Code.GDrealplayerObjects1[i].getY() > 800 ) {
        isConditionTrue_0 = true;
        gdjs.fase_322Code.GDrealplayerObjects1[k] = gdjs.fase_322Code.GDrealplayerObjects1[i];
        ++k;
    }
}
gdjs.fase_322Code.GDrealplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.fase_322Code.GDrealplayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("spawnpoint"), gdjs.fase_322Code.GDspawnpointObjects1);
{for(var i = 0, len = gdjs.fase_322Code.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDrealplayerObjects1[i].setPosition((( gdjs.fase_322Code.GDspawnpointObjects1.length === 0 ) ? 0 :gdjs.fase_322Code.GDspawnpointObjects1[0].getPointX("")),(( gdjs.fase_322Code.GDspawnpointObjects1.length === 0 ) ? 0 :gdjs.fase_322Code.GDspawnpointObjects1[0].getPointY("")));
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) * 0.5, "background", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("continuar"), gdjs.fase_322Code.GDcontinuarObjects1);
gdjs.copyArray(runtimeScene.getObjects("desistir"), gdjs.fase_322Code.GDdesistirObjects1);
gdjs.copyArray(runtimeScene.getObjects("escuro"), gdjs.fase_322Code.GDescuroObjects1);
{for(var i = 0, len = gdjs.fase_322Code.GDdesistirObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDdesistirObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.fase_322Code.GDcontinuarObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDcontinuarObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.fase_322Code.GDescuroObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDescuroObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_322Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("sofah_irado"), gdjs.fase_322Code.GDsofah_95iradoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDsofah_9595iradoObjects1Objects, gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Pressione_e"), gdjs.fase_322Code.GDPressione_95eObjects1);
{for(var i = 0, len = gdjs.fase_322Code.GDPressione_95eObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDPressione_95eObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_322Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("sofah_irado"), gdjs.fase_322Code.GDsofah_95iradoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDsofah_9595iradoObjects1Objects, gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDPlayerObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Pressione_e"), gdjs.fase_322Code.GDPressione_95eObjects1);
{for(var i = 0, len = gdjs.fase_322Code.GDPressione_95eObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDPressione_95eObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_322Code.GDrealplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("sofah_irado"), gdjs.fase_322Code.GDsofah_95iradoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDrealplayerObjects1Objects, gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDsofah_9595iradoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_322Code.GDPlayerObjects1);
/* Reuse gdjs.fase_322Code.GDrealplayerObjects1 */
/* Reuse gdjs.fase_322Code.GDsofah_95iradoObjects1 */
{for(var i = 0, len = gdjs.fase_322Code.GDsofah_95iradoObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDsofah_95iradoObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.fase_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDPlayerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.fase_322Code.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDrealplayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.fase_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sofah_irado"), gdjs.fase_322Code.GDsofah_95iradoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_322Code.GDsofah_95iradoObjects1.length;i<l;++i) {
    if ( gdjs.fase_322Code.GDsofah_95iradoObjects1[i].getAnimation() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.fase_322Code.GDsofah_95iradoObjects1[k] = gdjs.fase_322Code.GDsofah_95iradoObjects1[i];
        ++k;
    }
}
gdjs.fase_322Code.GDsofah_95iradoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10601292);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.fase_322Code.GDsofah_95iradoObjects1 */
gdjs.fase_322Code.GDfase1Objects1.length = 0;

{for(var i = 0, len = gdjs.fase_322Code.GDsofah_95iradoObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDsofah_95iradoObjects1[i].resetTimer("defeitos");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDfase1Objects1Objects, 1149, 480, "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Lighting");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sofah_irado"), gdjs.fase_322Code.GDsofah_95iradoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_322Code.GDsofah_95iradoObjects1.length;i<l;++i) {
    if ( gdjs.fase_322Code.GDsofah_95iradoObjects1[i].getTimerElapsedTimeInSecondsOrNaN("defeitos") > 1 ) {
        isConditionTrue_0 = true;
        gdjs.fase_322Code.GDsofah_95iradoObjects1[k] = gdjs.fase_322Code.GDsofah_95iradoObjects1[i];
        ++k;
    }
}
gdjs.fase_322Code.GDsofah_95iradoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_322Code.GDsofah_95iradoObjects1.length;i<l;++i) {
    if ( gdjs.fase_322Code.GDsofah_95iradoObjects1[i].getTimerElapsedTimeInSecondsOrNaN("defeitos") < 6 ) {
        isConditionTrue_0 = true;
        gdjs.fase_322Code.GDsofah_95iradoObjects1[k] = gdjs.fase_322Code.GDsofah_95iradoObjects1[i];
        ++k;
    }
}
gdjs.fase_322Code.GDsofah_95iradoObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewLight"), gdjs.fase_322Code.GDNewLightObjects1);
{for(var i = 0, len = gdjs.fase_322Code.GDNewLightObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDNewLightObjects1[i].setRadius(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("luz")));
}
}{runtimeScene.getScene().getVariables().get("luz").add(100);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sofah_irado"), gdjs.fase_322Code.GDsofah_95iradoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("luz")) > 5000;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_322Code.GDsofah_95iradoObjects1.length;i<l;++i) {
    if ( gdjs.fase_322Code.GDsofah_95iradoObjects1[i].getTimerElapsedTimeInSecondsOrNaN("defeitos") < 9 ) {
        isConditionTrue_0 = true;
        gdjs.fase_322Code.GDsofah_95iradoObjects1[k] = gdjs.fase_322Code.GDsofah_95iradoObjects1[i];
        ++k;
    }
}
gdjs.fase_322Code.GDsofah_95iradoObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("luz").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sofah_irado"), gdjs.fase_322Code.GDsofah_95iradoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_322Code.GDsofah_95iradoObjects1.length;i<l;++i) {
    if ( gdjs.fase_322Code.GDsofah_95iradoObjects1[i].getTimerElapsedTimeInSecondsOrNaN("defeitos") > 6 ) {
        isConditionTrue_0 = true;
        gdjs.fase_322Code.GDsofah_95iradoObjects1[k] = gdjs.fase_322Code.GDsofah_95iradoObjects1[i];
        ++k;
    }
}
gdjs.fase_322Code.GDsofah_95iradoObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fase1"), gdjs.fase_322Code.GDfase1Objects1);
gdjs.fase_322Code.GDfase2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDfase2Objects1Objects, 1149, 480, "");
}{for(var i = 0, len = gdjs.fase_322Code.GDfase1Objects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDfase1Objects1[i].stopEmission();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sofah_irado"), gdjs.fase_322Code.GDsofah_95iradoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_322Code.GDsofah_95iradoObjects1.length;i<l;++i) {
    if ( gdjs.fase_322Code.GDsofah_95iradoObjects1[i].getTimerElapsedTimeInSecondsOrNaN("defeitos") > 7 ) {
        isConditionTrue_0 = true;
        gdjs.fase_322Code.GDsofah_95iradoObjects1[k] = gdjs.fase_322Code.GDsofah_95iradoObjects1[i];
        ++k;
    }
}
gdjs.fase_322Code.GDsofah_95iradoObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fase2"), gdjs.fase_322Code.GDfase2Objects1);
{for(var i = 0, len = gdjs.fase_322Code.GDfase2Objects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDfase2Objects1[i].stopEmission();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sofah_irado"), gdjs.fase_322Code.GDsofah_95iradoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_322Code.GDsofah_95iradoObjects1.length;i<l;++i) {
    if ( gdjs.fase_322Code.GDsofah_95iradoObjects1[i].getTimerElapsedTimeInSecondsOrNaN("defeitos") > 11 ) {
        isConditionTrue_0 = true;
        gdjs.fase_322Code.GDsofah_95iradoObjects1[k] = gdjs.fase_322Code.GDsofah_95iradoObjects1[i];
        ++k;
    }
}
gdjs.fase_322Code.GDsofah_95iradoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10607124);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("escuro"), gdjs.fase_322Code.GDescuroObjects1);
{for(var i = 0, len = gdjs.fase_322Code.GDescuroObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDescuroObjects1[i].getBehavior("Tween").addObjectOpacityTween("opacar", 150, "linear", 700, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("escuro"), gdjs.fase_322Code.GDescuroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_322Code.GDescuroObjects1.length;i<l;++i) {
    if ( gdjs.fase_322Code.GDescuroObjects1[i].getBehavior("Tween").hasFinished("opacar") ) {
        isConditionTrue_0 = true;
        gdjs.fase_322Code.GDescuroObjects1[k] = gdjs.fase_322Code.GDescuroObjects1[i];
        ++k;
    }
}
gdjs.fase_322Code.GDescuroObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("continuar"), gdjs.fase_322Code.GDcontinuarObjects1);
gdjs.copyArray(runtimeScene.getObjects("desistir"), gdjs.fase_322Code.GDdesistirObjects1);
{for(var i = 0, len = gdjs.fase_322Code.GDdesistirObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDdesistirObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.fase_322Code.GDcontinuarObjects1.length ;i < len;++i) {
    gdjs.fase_322Code.GDcontinuarObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("desistir"), gdjs.fase_322Code.GDdesistirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDdesistirObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) * 0.1, "background2", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("continuar"), gdjs.fase_322Code.GDcontinuarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.fase_322Code.mapOfGDgdjs_46fase_95322Code_46GDcontinuarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "fase 3", false);
}}

}


};

gdjs.fase_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.fase_322Code.GDPlayerObjects1.length = 0;
gdjs.fase_322Code.GDPlayerObjects2.length = 0;
gdjs.fase_322Code.GDparedezinhaObjects1.length = 0;
gdjs.fase_322Code.GDparedezinhaObjects2.length = 0;
gdjs.fase_322Code.GDPortazinhaObjects1.length = 0;
gdjs.fase_322Code.GDPortazinhaObjects2.length = 0;
gdjs.fase_322Code.GDrealplayerObjects1.length = 0;
gdjs.fase_322Code.GDrealplayerObjects2.length = 0;
gdjs.fase_322Code.GDoutra_95paredezinhaObjects1.length = 0;
gdjs.fase_322Code.GDoutra_95paredezinhaObjects2.length = 0;
gdjs.fase_322Code.GDWASDObjects1.length = 0;
gdjs.fase_322Code.GDWASDObjects2.length = 0;
gdjs.fase_322Code.GDspawnpointObjects1.length = 0;
gdjs.fase_322Code.GDspawnpointObjects2.length = 0;
gdjs.fase_322Code.GDNewSpriteObjects1.length = 0;
gdjs.fase_322Code.GDNewSpriteObjects2.length = 0;
gdjs.fase_322Code.GDvoltarObjects1.length = 0;
gdjs.fase_322Code.GDvoltarObjects2.length = 0;
gdjs.fase_322Code.GDoutra_95outra_95paredezinhaObjects1.length = 0;
gdjs.fase_322Code.GDoutra_95outra_95paredezinhaObjects2.length = 0;
gdjs.fase_322Code.GDbackgroundObjects1.length = 0;
gdjs.fase_322Code.GDbackgroundObjects2.length = 0;
gdjs.fase_322Code.GDsofah_95iradoObjects1.length = 0;
gdjs.fase_322Code.GDsofah_95iradoObjects2.length = 0;
gdjs.fase_322Code.GDPressione_95eObjects1.length = 0;
gdjs.fase_322Code.GDPressione_95eObjects2.length = 0;
gdjs.fase_322Code.GDNewLightObjects1.length = 0;
gdjs.fase_322Code.GDNewLightObjects2.length = 0;
gdjs.fase_322Code.GDfundo_95cidadeObjects1.length = 0;
gdjs.fase_322Code.GDfundo_95cidadeObjects2.length = 0;
gdjs.fase_322Code.GDfundo_95ceuObjects1.length = 0;
gdjs.fase_322Code.GDfundo_95ceuObjects2.length = 0;
gdjs.fase_322Code.GDfase1Objects1.length = 0;
gdjs.fase_322Code.GDfase1Objects2.length = 0;
gdjs.fase_322Code.GDfase2Objects1.length = 0;
gdjs.fase_322Code.GDfase2Objects2.length = 0;
gdjs.fase_322Code.GDescuroObjects1.length = 0;
gdjs.fase_322Code.GDescuroObjects2.length = 0;
gdjs.fase_322Code.GDdesistirObjects1.length = 0;
gdjs.fase_322Code.GDdesistirObjects2.length = 0;
gdjs.fase_322Code.GDcontinuarObjects1.length = 0;
gdjs.fase_322Code.GDcontinuarObjects2.length = 0;

gdjs.fase_322Code.eventsList0(runtimeScene);

return;

}

gdjs['fase_322Code'] = gdjs.fase_322Code;
