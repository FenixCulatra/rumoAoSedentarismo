gdjs.Cena_32de_32T_237tuloCode = {};
gdjs.Cena_32de_32T_237tuloCode.GDPlayerObjects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDPlayerObjects2= [];
gdjs.Cena_32de_32T_237tuloCode.GDparedezinhaObjects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDparedezinhaObjects2= [];
gdjs.Cena_32de_32T_237tuloCode.GDPortazinhaObjects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDPortazinhaObjects2= [];
gdjs.Cena_32de_32T_237tuloCode.GDrealplayerObjects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDrealplayerObjects2= [];
gdjs.Cena_32de_32T_237tuloCode.GDoutra_95paredezinhaObjects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDoutra_95paredezinhaObjects2= [];
gdjs.Cena_32de_32T_237tuloCode.GDWASDObjects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDWASDObjects2= [];
gdjs.Cena_32de_32T_237tuloCode.GDspawnpointObjects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDspawnpointObjects2= [];
gdjs.Cena_32de_32T_237tuloCode.GDNewSpriteObjects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDNewSpriteObjects2= [];
gdjs.Cena_32de_32T_237tuloCode.GDvoltarObjects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDvoltarObjects2= [];
gdjs.Cena_32de_32T_237tuloCode.GDoutra_95outra_95paredezinhaObjects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDoutra_95outra_95paredezinhaObjects2= [];
gdjs.Cena_32de_32T_237tuloCode.GDbackgroundObjects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDbackgroundObjects2= [];
gdjs.Cena_32de_32T_237tuloCode.GDstraykidsObjects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDstraykidsObjects2= [];
gdjs.Cena_32de_32T_237tuloCode.GDJogarObjects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDJogarObjects2= [];
gdjs.Cena_32de_32T_237tuloCode.GDComoJogarObjects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDComoJogarObjects2= [];
gdjs.Cena_32de_32T_237tuloCode.GDNewTextObjects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDNewTextObjects2= [];
gdjs.Cena_32de_32T_237tuloCode.GDcreditosObjects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDcreditosObjects2= [];
gdjs.Cena_32de_32T_237tuloCode.GDQmfezIssoObjects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDQmfezIssoObjects2= [];
gdjs.Cena_32de_32T_237tuloCode.GDNewText2Objects1= [];
gdjs.Cena_32de_32T_237tuloCode.GDNewText2Objects2= [];


gdjs.Cena_32de_32T_237tuloCode.mapOfGDgdjs_46Cena_9532de_9532T_95237tuloCode_46GDComoJogarObjects1Objects = Hashtable.newFrom({"ComoJogar": gdjs.Cena_32de_32T_237tuloCode.GDComoJogarObjects1});
gdjs.Cena_32de_32T_237tuloCode.mapOfGDgdjs_46Cena_9532de_9532T_95237tuloCode_46GDcreditosObjects1Objects = Hashtable.newFrom({"creditos": gdjs.Cena_32de_32T_237tuloCode.GDcreditosObjects1});
gdjs.Cena_32de_32T_237tuloCode.mapOfGDgdjs_46Cena_9532de_9532T_95237tuloCode_46GDvoltarObjects1Objects = Hashtable.newFrom({"voltar": gdjs.Cena_32de_32T_237tuloCode.GDvoltarObjects1});
gdjs.Cena_32de_32T_237tuloCode.mapOfGDgdjs_46Cena_9532de_9532T_95237tuloCode_46GDComoJogarObjects1Objects = Hashtable.newFrom({"ComoJogar": gdjs.Cena_32de_32T_237tuloCode.GDComoJogarObjects1});
gdjs.Cena_32de_32T_237tuloCode.mapOfGDgdjs_46Cena_9532de_9532T_95237tuloCode_46GDJogarObjects1Objects = Hashtable.newFrom({"Jogar": gdjs.Cena_32de_32T_237tuloCode.GDJogarObjects1});
gdjs.Cena_32de_32T_237tuloCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ComoJogar"), gdjs.Cena_32de_32T_237tuloCode.GDComoJogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32de_32T_237tuloCode.mapOfGDgdjs_46Cena_9532de_9532T_95237tuloCode_46GDComoJogarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "como jogar");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "voltar");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("creditos"), gdjs.Cena_32de_32T_237tuloCode.GDcreditosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32de_32T_237tuloCode.mapOfGDgdjs_46Cena_9532de_9532T_95237tuloCode_46GDcreditosObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "voltar");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "créditos");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("voltar"), gdjs.Cena_32de_32T_237tuloCode.GDvoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32de_32T_237tuloCode.mapOfGDgdjs_46Cena_9532de_9532T_95237tuloCode_46GDvoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "créditos");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "voltar");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "como jogar");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ComoJogar"), gdjs.Cena_32de_32T_237tuloCode.GDComoJogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32de_32T_237tuloCode.mapOfGDgdjs_46Cena_9532de_9532T_95237tuloCode_46GDComoJogarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena de como jogar", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("fase").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jogar"), gdjs.Cena_32de_32T_237tuloCode.GDJogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32de_32T_237tuloCode.mapOfGDgdjs_46Cena_9532de_9532T_95237tuloCode_46GDJogarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "fase 0", false);
}}

}


};

gdjs.Cena_32de_32T_237tuloCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cena_32de_32T_237tuloCode.GDPlayerObjects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDPlayerObjects2.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDparedezinhaObjects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDparedezinhaObjects2.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDPortazinhaObjects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDPortazinhaObjects2.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDrealplayerObjects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDrealplayerObjects2.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDoutra_95paredezinhaObjects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDoutra_95paredezinhaObjects2.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDWASDObjects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDWASDObjects2.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDspawnpointObjects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDspawnpointObjects2.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDNewSpriteObjects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDNewSpriteObjects2.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDvoltarObjects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDvoltarObjects2.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDoutra_95outra_95paredezinhaObjects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDoutra_95outra_95paredezinhaObjects2.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDbackgroundObjects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDbackgroundObjects2.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDstraykidsObjects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDstraykidsObjects2.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDJogarObjects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDJogarObjects2.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDComoJogarObjects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDComoJogarObjects2.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDNewTextObjects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDNewTextObjects2.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDcreditosObjects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDcreditosObjects2.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDQmfezIssoObjects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDQmfezIssoObjects2.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDNewText2Objects1.length = 0;
gdjs.Cena_32de_32T_237tuloCode.GDNewText2Objects2.length = 0;

gdjs.Cena_32de_32T_237tuloCode.eventsList0(runtimeScene);

return;

}

gdjs['Cena_32de_32T_237tuloCode'] = gdjs.Cena_32de_32T_237tuloCode;
