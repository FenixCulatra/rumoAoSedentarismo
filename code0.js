gdjs.Cena_32sem_32t_237tuloCode = {};
gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDparedezinhaObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDparedezinhaObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDPortazinhaObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDPortazinhaObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDoutra_95paredezinhaObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDoutra_95paredezinhaObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDWASDObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDWASDObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDspawnpointObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDspawnpointObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDvoltarObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDvoltarObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDoutra_95outra_95paredezinhaObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDoutra_95outra_95paredezinhaObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDbackgroundObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDbackgroundObjects2= [];


gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_46Cena_9532sem_9532t_95237tuloCode_46GDrealplayerObjects1Objects = Hashtable.newFrom({"realplayer": gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1});
gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_46Cena_9532sem_9532t_95237tuloCode_46GDPortazinhaObjects1Objects = Hashtable.newFrom({"Portazinha": gdjs.Cena_32sem_32t_237tuloCode.GDPortazinhaObjects1});
gdjs.Cena_32sem_32t_237tuloCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("spawnpoint"), gdjs.Cena_32sem_32t_237tuloCode.GDspawnpointObjects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[i].getBehavior("Tween").addObjectAngleTween("re", 20, "linear", 100, false);
}
}{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDspawnpointObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDspawnpointObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[i].getBehavior("ThreeDFlip").FlipTo(true, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[i].getBehavior("ThreeDFlip").FlipTo(false, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Portazinha"), gdjs.Cena_32sem_32t_237tuloCode.GDPortazinhaObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_46Cena_9532sem_9532t_95237tuloCode_46GDrealplayerObjects1Objects, gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_46Cena_9532sem_9532t_95237tuloCode_46GDPortazinhaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("fase").add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "fase " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("fase"))), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[i].getBehavior("Tween").hasFinished("rd") ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[i].getBehavior("Tween").removeTween("rd");
}
}{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[i].getBehavior("Tween").addObjectAngleTween("re", 20, "linear", 100, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[i].getBehavior("Tween").hasFinished("re") ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[i].getBehavior("Tween").removeTween("re");
}
}{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[i].getBehavior("Tween").addObjectAngleTween("rd", -(20), "linear", 100, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10524364);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[i].getBehavior("Tween").pauseTween("re");
}
}{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[i].getBehavior("Tween").pauseTween("rd");
}
}{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[i].setAngle(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10525628);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[i].getBehavior("Tween").resumeTween("re");
}
}{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[i].getBehavior("Tween").resumeTween("rd");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1[i].setPosition((( gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1[0].getPointX("")),(( gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("realplayer"), gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1[i].getY() > 800 ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("spawnpoint"), gdjs.Cena_32sem_32t_237tuloCode.GDspawnpointObjects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1[i].setPosition((( gdjs.Cena_32sem_32t_237tuloCode.GDspawnpointObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDspawnpointObjects1[0].getPointX("")),(( gdjs.Cena_32sem_32t_237tuloCode.GDspawnpointObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDspawnpointObjects1[0].getPointY("")));
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) * 0.5, "background", 0);
}}

}


};

gdjs.Cena_32sem_32t_237tuloCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDPlayerObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDparedezinhaObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDparedezinhaObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDPortazinhaObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDPortazinhaObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDrealplayerObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDoutra_95paredezinhaObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDoutra_95paredezinhaObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDWASDObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDWASDObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDspawnpointObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDspawnpointObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDvoltarObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDvoltarObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDoutra_95outra_95paredezinhaObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDoutra_95outra_95paredezinhaObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDbackgroundObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDbackgroundObjects2.length = 0;

gdjs.Cena_32sem_32t_237tuloCode.eventsList0(runtimeScene);

return;

}

gdjs['Cena_32sem_32t_237tuloCode'] = gdjs.Cena_32sem_32t_237tuloCode;
