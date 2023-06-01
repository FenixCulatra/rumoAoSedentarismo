gdjs.fase_323Code = {};
gdjs.fase_323Code.GDPlayerObjects1= [];
gdjs.fase_323Code.GDPlayerObjects2= [];
gdjs.fase_323Code.GDparedezinhaObjects1= [];
gdjs.fase_323Code.GDparedezinhaObjects2= [];
gdjs.fase_323Code.GDPortazinhaObjects1= [];
gdjs.fase_323Code.GDPortazinhaObjects2= [];
gdjs.fase_323Code.GDrealplayerObjects1= [];
gdjs.fase_323Code.GDrealplayerObjects2= [];
gdjs.fase_323Code.GDoutra_95paredezinhaObjects1= [];
gdjs.fase_323Code.GDoutra_95paredezinhaObjects2= [];
gdjs.fase_323Code.GDWASDObjects1= [];
gdjs.fase_323Code.GDWASDObjects2= [];
gdjs.fase_323Code.GDspawnpointObjects1= [];
gdjs.fase_323Code.GDspawnpointObjects2= [];
gdjs.fase_323Code.GDNewSpriteObjects1= [];
gdjs.fase_323Code.GDNewSpriteObjects2= [];
gdjs.fase_323Code.GDvoltarObjects1= [];
gdjs.fase_323Code.GDvoltarObjects2= [];
gdjs.fase_323Code.GDoutra_95outra_95paredezinhaObjects1= [];
gdjs.fase_323Code.GDoutra_95outra_95paredezinhaObjects2= [];
gdjs.fase_323Code.GDbackgroundObjects1= [];
gdjs.fase_323Code.GDbackgroundObjects2= [];
gdjs.fase_323Code.GDtrocadeplayerObjects1= [];
gdjs.fase_323Code.GDtrocadeplayerObjects2= [];
gdjs.fase_323Code.GDTrocadeplayer2Objects1= [];
gdjs.fase_323Code.GDTrocadeplayer2Objects2= [];
gdjs.fase_323Code.GDfinalObjects1= [];
gdjs.fase_323Code.GDfinalObjects2= [];
gdjs.fase_323Code.GDfundo_95ceuObjects1= [];
gdjs.fase_323Code.GDfundo_95ceuObjects2= [];
gdjs.fase_323Code.GDfundo_95cidadeObjects1= [];
gdjs.fase_323Code.GDfundo_95cidadeObjects2= [];


gdjs.fase_323Code.mapOfGDgdjs_46fase_95323Code_46GDrealplayerObjects1Objects = Hashtable.newFrom({"realplayer": gdjs.fase_323Code.GDrealplayerObjects1});
gdjs.fase_323Code.mapOfGDgdjs_46fase_95323Code_46GDPortazinhaObjects1Objects = Hashtable.newFrom({"Portazinha": gdjs.fase_323Code.GDPortazinhaObjects1});
gdjs.fase_323Code.mapOfGDgdjs_46fase_95323Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.fase_323Code.GDPlayerObjects1});
gdjs.fase_323Code.mapOfGDgdjs_46fase_95323Code_46GDtrocadeplayerObjects1Objects = Hashtable.newFrom({"trocadeplayer": gdjs.fase_323Code.GDtrocadeplayerObjects1});
gdjs.fase_323Code.mapOfGDgdjs_46fase_95323Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.fase_323Code.GDPlayerObjects1});
gdjs.fase_323Code.mapOfGDgdjs_46fase_95323Code_46GDTrocadeplayer2Objects1Objects = Hashtable.newFrom({"Trocadeplayer2": gdjs.fase_323Code.GDTrocadeplayer2Objects1});
gdjs.fase_323Code.mapOfGDgdjs_46fase_95323Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.fase_323Code.GDPlayerObjects1});
gdjs.fase_323Code.mapOfGDgdjs_46fase_95323Code_46GDfinalObjects1Objects = Hashtable.newFrom({"final": gdjs.fase_323Code.GDfinalObjects1});
gdjs.fase_323Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_323Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_323Code.GDrealplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("spawnpoint"), gdjs.fase_323Code.GDspawnpointObjects1);
{for(var i = 0, len = gdjs.fase_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDPlayerObjects1[i].getBehavior("Tween").addObjectAngleTween("re", 20, "linear", 100, false);
}
}{for(var i = 0, len = gdjs.fase_323Code.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDrealplayerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.fase_323Code.GDspawnpointObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDspawnpointObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_323Code.GDrealplayerObjects1);
{for(var i = 0, len = gdjs.fase_323Code.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDrealplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_323Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_323Code.GDrealplayerObjects1);
{for(var i = 0, len = gdjs.fase_323Code.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDrealplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.fase_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDPlayerObjects1[i].getBehavior("ThreeDFlip").FlipTo(true, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_323Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_323Code.GDrealplayerObjects1);
{for(var i = 0, len = gdjs.fase_323Code.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDrealplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.fase_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDPlayerObjects1[i].getBehavior("ThreeDFlip").FlipTo(false, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Portazinha"), gdjs.fase_323Code.GDPortazinhaObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_323Code.GDrealplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fase_323Code.mapOfGDgdjs_46fase_95323Code_46GDrealplayerObjects1Objects, gdjs.fase_323Code.mapOfGDgdjs_46fase_95323Code_46GDPortazinhaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("fase").add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "fase " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("fase"))), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_323Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_323Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.fase_323Code.GDPlayerObjects1[i].getBehavior("Tween").hasFinished("rd") ) {
        isConditionTrue_0 = true;
        gdjs.fase_323Code.GDPlayerObjects1[k] = gdjs.fase_323Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.fase_323Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.fase_323Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.fase_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDPlayerObjects1[i].getBehavior("Tween").removeTween("rd");
}
}{for(var i = 0, len = gdjs.fase_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDPlayerObjects1[i].getBehavior("Tween").addObjectAngleTween("re", 20, "linear", 100, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_323Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_323Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.fase_323Code.GDPlayerObjects1[i].getBehavior("Tween").hasFinished("re") ) {
        isConditionTrue_0 = true;
        gdjs.fase_323Code.GDPlayerObjects1[k] = gdjs.fase_323Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.fase_323Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.fase_323Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.fase_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDPlayerObjects1[i].getBehavior("Tween").removeTween("re");
}
}{for(var i = 0, len = gdjs.fase_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDPlayerObjects1[i].getBehavior("Tween").addObjectAngleTween("rd", -(20), "linear", 100, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_323Code.GDrealplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_323Code.GDrealplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.fase_323Code.GDrealplayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.fase_323Code.GDrealplayerObjects1[k] = gdjs.fase_323Code.GDrealplayerObjects1[i];
        ++k;
    }
}
gdjs.fase_323Code.GDrealplayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10524364);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_323Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.fase_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDPlayerObjects1[i].getBehavior("Tween").pauseTween("re");
}
}{for(var i = 0, len = gdjs.fase_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDPlayerObjects1[i].getBehavior("Tween").pauseTween("rd");
}
}{for(var i = 0, len = gdjs.fase_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDPlayerObjects1[i].setAngle(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_323Code.GDrealplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_323Code.GDrealplayerObjects1.length;i<l;++i) {
    if ( gdjs.fase_323Code.GDrealplayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.fase_323Code.GDrealplayerObjects1[k] = gdjs.fase_323Code.GDrealplayerObjects1[i];
        ++k;
    }
}
gdjs.fase_323Code.GDrealplayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10525628);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_323Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.fase_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDPlayerObjects1[i].getBehavior("Tween").resumeTween("re");
}
}{for(var i = 0, len = gdjs.fase_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDPlayerObjects1[i].getBehavior("Tween").resumeTween("rd");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_323Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_323Code.GDrealplayerObjects1);
{for(var i = 0, len = gdjs.fase_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDPlayerObjects1[i].setPosition((( gdjs.fase_323Code.GDrealplayerObjects1.length === 0 ) ? 0 :gdjs.fase_323Code.GDrealplayerObjects1[0].getPointX("")),(( gdjs.fase_323Code.GDrealplayerObjects1.length === 0 ) ? 0 :gdjs.fase_323Code.GDrealplayerObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.fase_323Code.GDrealplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase_323Code.GDrealplayerObjects1.length;i<l;++i) {
    if ( gdjs.fase_323Code.GDrealplayerObjects1[i].getY() > 800 ) {
        isConditionTrue_0 = true;
        gdjs.fase_323Code.GDrealplayerObjects1[k] = gdjs.fase_323Code.GDrealplayerObjects1[i];
        ++k;
    }
}
gdjs.fase_323Code.GDrealplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.fase_323Code.GDrealplayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("spawnpoint"), gdjs.fase_323Code.GDspawnpointObjects1);
{for(var i = 0, len = gdjs.fase_323Code.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDrealplayerObjects1[i].setPosition((( gdjs.fase_323Code.GDspawnpointObjects1.length === 0 ) ? 0 :gdjs.fase_323Code.GDspawnpointObjects1[0].getPointX("")),(( gdjs.fase_323Code.GDspawnpointObjects1.length === 0 ) ? 0 :gdjs.fase_323Code.GDspawnpointObjects1[0].getPointY("")));
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
gdjs.copyArray(runtimeScene.getObjects("trocadeplayer"), gdjs.fase_323Code.GDtrocadeplayerObjects1);
{for(var i = 0, len = gdjs.fase_323Code.GDtrocadeplayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDtrocadeplayerObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_323Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("trocadeplayer"), gdjs.fase_323Code.GDtrocadeplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fase_323Code.mapOfGDgdjs_46fase_95323Code_46GDPlayerObjects1Objects, gdjs.fase_323Code.mapOfGDgdjs_46fase_95323Code_46GDtrocadeplayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.fase_323Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.fase_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Trocadeplayer2"), gdjs.fase_323Code.GDTrocadeplayer2Objects1);
{for(var i = 0, len = gdjs.fase_323Code.GDTrocadeplayer2Objects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDTrocadeplayer2Objects1[i].setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_323Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trocadeplayer2"), gdjs.fase_323Code.GDTrocadeplayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fase_323Code.mapOfGDgdjs_46fase_95323Code_46GDPlayerObjects1Objects, gdjs.fase_323Code.mapOfGDgdjs_46fase_95323Code_46GDTrocadeplayer2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.fase_323Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.fase_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.fase_323Code.GDPlayerObjects1[i].setAnimation(3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.fase_323Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("final"), gdjs.fase_323Code.GDfinalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fase_323Code.mapOfGDgdjs_46fase_95323Code_46GDPlayerObjects1Objects, gdjs.fase_323Code.mapOfGDgdjs_46fase_95323Code_46GDfinalObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Créditos", false);
}}

}


};

gdjs.fase_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.fase_323Code.GDPlayerObjects1.length = 0;
gdjs.fase_323Code.GDPlayerObjects2.length = 0;
gdjs.fase_323Code.GDparedezinhaObjects1.length = 0;
gdjs.fase_323Code.GDparedezinhaObjects2.length = 0;
gdjs.fase_323Code.GDPortazinhaObjects1.length = 0;
gdjs.fase_323Code.GDPortazinhaObjects2.length = 0;
gdjs.fase_323Code.GDrealplayerObjects1.length = 0;
gdjs.fase_323Code.GDrealplayerObjects2.length = 0;
gdjs.fase_323Code.GDoutra_95paredezinhaObjects1.length = 0;
gdjs.fase_323Code.GDoutra_95paredezinhaObjects2.length = 0;
gdjs.fase_323Code.GDWASDObjects1.length = 0;
gdjs.fase_323Code.GDWASDObjects2.length = 0;
gdjs.fase_323Code.GDspawnpointObjects1.length = 0;
gdjs.fase_323Code.GDspawnpointObjects2.length = 0;
gdjs.fase_323Code.GDNewSpriteObjects1.length = 0;
gdjs.fase_323Code.GDNewSpriteObjects2.length = 0;
gdjs.fase_323Code.GDvoltarObjects1.length = 0;
gdjs.fase_323Code.GDvoltarObjects2.length = 0;
gdjs.fase_323Code.GDoutra_95outra_95paredezinhaObjects1.length = 0;
gdjs.fase_323Code.GDoutra_95outra_95paredezinhaObjects2.length = 0;
gdjs.fase_323Code.GDbackgroundObjects1.length = 0;
gdjs.fase_323Code.GDbackgroundObjects2.length = 0;
gdjs.fase_323Code.GDtrocadeplayerObjects1.length = 0;
gdjs.fase_323Code.GDtrocadeplayerObjects2.length = 0;
gdjs.fase_323Code.GDTrocadeplayer2Objects1.length = 0;
gdjs.fase_323Code.GDTrocadeplayer2Objects2.length = 0;
gdjs.fase_323Code.GDfinalObjects1.length = 0;
gdjs.fase_323Code.GDfinalObjects2.length = 0;
gdjs.fase_323Code.GDfundo_95ceuObjects1.length = 0;
gdjs.fase_323Code.GDfundo_95ceuObjects2.length = 0;
gdjs.fase_323Code.GDfundo_95cidadeObjects1.length = 0;
gdjs.fase_323Code.GDfundo_95cidadeObjects2.length = 0;

gdjs.fase_323Code.eventsList0(runtimeScene);

return;

}

gdjs['fase_323Code'] = gdjs.fase_323Code;
