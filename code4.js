gdjs.fase_321Code = {};
gdjs.fase_321Code.GDPlayerObjects1= [];
gdjs.fase_321Code.GDPlayerObjects2= [];
gdjs.fase_321Code.GDparedezinhaObjects1= [];
gdjs.fase_321Code.GDparedezinhaObjects2= [];
gdjs.fase_321Code.GDPortazinhaObjects1= [];
gdjs.fase_321Code.GDPortazinhaObjects2= [];
gdjs.fase_321Code.GDrealplayerObjects1= [];
gdjs.fase_321Code.GDrealplayerObjects2= [];
gdjs.fase_321Code.GDoutra_95paredezinhaObjects1= [];
gdjs.fase_321Code.GDoutra_95paredezinhaObjects2= [];
gdjs.fase_321Code.GDWASDObjects1= [];
gdjs.fase_321Code.GDWASDObjects2= [];
gdjs.fase_321Code.GDspawnpointObjects1= [];
gdjs.fase_321Code.GDspawnpointObjects2= [];
gdjs.fase_321Code.GDNewSpriteObjects1= [];
gdjs.fase_321Code.GDNewSpriteObjects2= [];
gdjs.fase_321Code.GDvoltarObjects1= [];
gdjs.fase_321Code.GDvoltarObjects2= [];
gdjs.fase_321Code.GDoutra_95outra_95paredezinhaObjects1= [];
gdjs.fase_321Code.GDoutra_95outra_95paredezinhaObjects2= [];
gdjs.fase_321Code.GDbackgroundObjects1= [];
gdjs.fase_321Code.GDbackgroundObjects2= [];
gdjs.fase_321Code.GDNewSpriteObjects1= [];
gdjs.fase_321Code.GDNewSpriteObjects2= [];
gdjs.fase_321Code.GDtras_95do_95chahoObjects1= [];
gdjs.fase_321Code.GDtras_95do_95chahoObjects2= [];
gdjs.fase_321Code.GDfundo_95cidadeObjects1= [];
gdjs.fase_321Code.GDfundo_95cidadeObjects2= [];
gdjs.fase_321Code.GDfundo_95ceuObjects1= [];
gdjs.fase_321Code.GDfundo_95ceuObjects2= [];


gdjs.fase_321Code.mapOfGDgdjs_46fase_95321Code_46GDrealplayerObjects1Objects = Hashtable.newFrom({"realplayer": gdjs.fase_321Code.GDrealplayerObjects1});
gdjs.fase_321Code.mapOfGDgdjs_46fase_95321Code_46GDPortazinhaObjects1Objects = Hashtable.newFrom({"Portazinha": gdjs.fase_321Code.GDPortazinhaObjects1});
gdjs.fase_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) * 0.1, "background2", 0);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_321Code.GDrealplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("spawnpoint"), gdjs.fase_321Code.GDspawnpointObjects1);
{for(var i = 0, len = gdjs.fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDPlayerObjects1[i].getBehavior("Tween").addObjectAngleTween("re", 20, "linear", 100, false);
}
}{for(var i = 0, len = gdjs.fase_321Code.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDrealplayerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.fase_321Code.GDspawnpointObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDspawnpointObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_321Code.GDrealplayerObjects1);
{for(var i = 0, len = gdjs.fase_321Code.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDrealplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_321Code.GDrealplayerObjects1);
{for(var i = 0, len = gdjs.fase_321Code.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDrealplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDPlayerObjects1[i].getBehavior("ThreeDFlip").FlipTo(true, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_321Code.GDrealplayerObjects1);
{for(var i = 0, len = gdjs.fase_321Code.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDrealplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDPlayerObjects1[i].getBehavior("ThreeDFlip").FlipTo(false, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Portazinha"), gdjs.fase_321Code.GDPortazinhaObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_321Code.GDrealplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fase_321Code.mapOfGDgdjs_46fase_95321Code_46GDrealplayerObjects1Objects, gdjs.fase_321Code.mapOfGDgdjs_46fase_95321Code_46GDPortazinhaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("fase").add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "fase " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("fase"))), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.fase_321Code.GDPlayerObjects1[i].getBehavior("Tween").hasFinished("rd") ) {
        isConditionTrue_0 = true;
        gdjs.fase_321Code.GDPlayerObjects1[k] = gdjs.fase_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.fase_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.fase_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDPlayerObjects1[i].getBehavior("Tween").removeTween("rd");
}
}{for(var i = 0, len = gdjs.fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDPlayerObjects1[i].getBehavior("Tween").addObjectAngleTween("re", 20, "linear", 100, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.fase_321Code.GDPlayerObjects1[i].getBehavior("Tween").hasFinished("re") ) {
        isConditionTrue_0 = true;
        gdjs.fase_321Code.GDPlayerObjects1[k] = gdjs.fase_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.fase_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.fase_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDPlayerObjects1[i].getBehavior("Tween").removeTween("re");
}
}{for(var i = 0, len = gdjs.fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDPlayerObjects1[i].getBehavior("Tween").addObjectAngleTween("rd", -(20), "linear", 100, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_321Code.GDrealplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_321Code.GDrealplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.fase_321Code.GDrealplayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.fase_321Code.GDrealplayerObjects1[k] = gdjs.fase_321Code.GDrealplayerObjects1[i];
        ++k;
    }
}
gdjs.fase_321Code.GDrealplayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10524364);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDPlayerObjects1[i].getBehavior("Tween").pauseTween("re");
}
}{for(var i = 0, len = gdjs.fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDPlayerObjects1[i].getBehavior("Tween").pauseTween("rd");
}
}{for(var i = 0, len = gdjs.fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDPlayerObjects1[i].setAngle(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_321Code.GDrealplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_321Code.GDrealplayerObjects1.length;i<l;++i) {
    if ( gdjs.fase_321Code.GDrealplayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.fase_321Code.GDrealplayerObjects1[k] = gdjs.fase_321Code.GDrealplayerObjects1[i];
        ++k;
    }
}
gdjs.fase_321Code.GDrealplayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10525628);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDPlayerObjects1[i].getBehavior("Tween").resumeTween("re");
}
}{for(var i = 0, len = gdjs.fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDPlayerObjects1[i].getBehavior("Tween").resumeTween("rd");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_321Code.GDrealplayerObjects1);
{for(var i = 0, len = gdjs.fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDPlayerObjects1[i].setPosition((( gdjs.fase_321Code.GDrealplayerObjects1.length === 0 ) ? 0 :gdjs.fase_321Code.GDrealplayerObjects1[0].getPointX("")),(( gdjs.fase_321Code.GDrealplayerObjects1.length === 0 ) ? 0 :gdjs.fase_321Code.GDrealplayerObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_321Code.GDrealplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_321Code.GDrealplayerObjects1.length;i<l;++i) {
    if ( gdjs.fase_321Code.GDrealplayerObjects1[i].getY() > 800 ) {
        isConditionTrue_0 = true;
        gdjs.fase_321Code.GDrealplayerObjects1[k] = gdjs.fase_321Code.GDrealplayerObjects1[i];
        ++k;
    }
}
gdjs.fase_321Code.GDrealplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.fase_321Code.GDrealplayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("spawnpoint"), gdjs.fase_321Code.GDspawnpointObjects1);
{for(var i = 0, len = gdjs.fase_321Code.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.fase_321Code.GDrealplayerObjects1[i].setPosition((( gdjs.fase_321Code.GDspawnpointObjects1.length === 0 ) ? 0 :gdjs.fase_321Code.GDspawnpointObjects1[0].getPointX("")),(( gdjs.fase_321Code.GDspawnpointObjects1.length === 0 ) ? 0 :gdjs.fase_321Code.GDspawnpointObjects1[0].getPointY("")));
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
{
}

}


};

gdjs.fase_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.fase_321Code.GDPlayerObjects1.length = 0;
gdjs.fase_321Code.GDPlayerObjects2.length = 0;
gdjs.fase_321Code.GDparedezinhaObjects1.length = 0;
gdjs.fase_321Code.GDparedezinhaObjects2.length = 0;
gdjs.fase_321Code.GDPortazinhaObjects1.length = 0;
gdjs.fase_321Code.GDPortazinhaObjects2.length = 0;
gdjs.fase_321Code.GDrealplayerObjects1.length = 0;
gdjs.fase_321Code.GDrealplayerObjects2.length = 0;
gdjs.fase_321Code.GDoutra_95paredezinhaObjects1.length = 0;
gdjs.fase_321Code.GDoutra_95paredezinhaObjects2.length = 0;
gdjs.fase_321Code.GDWASDObjects1.length = 0;
gdjs.fase_321Code.GDWASDObjects2.length = 0;
gdjs.fase_321Code.GDspawnpointObjects1.length = 0;
gdjs.fase_321Code.GDspawnpointObjects2.length = 0;
gdjs.fase_321Code.GDNewSpriteObjects1.length = 0;
gdjs.fase_321Code.GDNewSpriteObjects2.length = 0;
gdjs.fase_321Code.GDvoltarObjects1.length = 0;
gdjs.fase_321Code.GDvoltarObjects2.length = 0;
gdjs.fase_321Code.GDoutra_95outra_95paredezinhaObjects1.length = 0;
gdjs.fase_321Code.GDoutra_95outra_95paredezinhaObjects2.length = 0;
gdjs.fase_321Code.GDbackgroundObjects1.length = 0;
gdjs.fase_321Code.GDbackgroundObjects2.length = 0;
gdjs.fase_321Code.GDNewSpriteObjects1.length = 0;
gdjs.fase_321Code.GDNewSpriteObjects2.length = 0;
gdjs.fase_321Code.GDtras_95do_95chahoObjects1.length = 0;
gdjs.fase_321Code.GDtras_95do_95chahoObjects2.length = 0;
gdjs.fase_321Code.GDfundo_95cidadeObjects1.length = 0;
gdjs.fase_321Code.GDfundo_95cidadeObjects2.length = 0;
gdjs.fase_321Code.GDfundo_95ceuObjects1.length = 0;
gdjs.fase_321Code.GDfundo_95ceuObjects2.length = 0;

gdjs.fase_321Code.eventsList0(runtimeScene);

return;

}

gdjs['fase_321Code'] = gdjs.fase_321Code;
