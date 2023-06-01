gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDPlayerObjects1= [];
gdjs.Game_32OverCode.GDPlayerObjects2= [];
gdjs.Game_32OverCode.GDparedezinhaObjects1= [];
gdjs.Game_32OverCode.GDparedezinhaObjects2= [];
gdjs.Game_32OverCode.GDPortazinhaObjects1= [];
gdjs.Game_32OverCode.GDPortazinhaObjects2= [];
gdjs.Game_32OverCode.GDrealplayerObjects1= [];
gdjs.Game_32OverCode.GDrealplayerObjects2= [];
gdjs.Game_32OverCode.GDoutra_95paredezinhaObjects1= [];
gdjs.Game_32OverCode.GDoutra_95paredezinhaObjects2= [];
gdjs.Game_32OverCode.GDWASDObjects1= [];
gdjs.Game_32OverCode.GDWASDObjects2= [];
gdjs.Game_32OverCode.GDspawnpointObjects1= [];
gdjs.Game_32OverCode.GDspawnpointObjects2= [];
gdjs.Game_32OverCode.GDNewSpriteObjects1= [];
gdjs.Game_32OverCode.GDNewSpriteObjects2= [];
gdjs.Game_32OverCode.GDvoltarObjects1= [];
gdjs.Game_32OverCode.GDvoltarObjects2= [];
gdjs.Game_32OverCode.GDoutra_95outra_95paredezinhaObjects1= [];
gdjs.Game_32OverCode.GDoutra_95outra_95paredezinhaObjects2= [];
gdjs.Game_32OverCode.GDbackgroundObjects1= [];
gdjs.Game_32OverCode.GDbackgroundObjects2= [];
gdjs.Game_32OverCode.GDGameObjects1= [];
gdjs.Game_32OverCode.GDGameObjects2= [];
gdjs.Game_32OverCode.GDOverObjects1= [];
gdjs.Game_32OverCode.GDOverObjects2= [];


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDvoltarObjects1Objects = Hashtable.newFrom({"voltar": gdjs.Game_32OverCode.GDvoltarObjects1});
gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("voltar"), gdjs.Game_32OverCode.GDvoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDvoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena de Título", false);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDPlayerObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects2.length = 0;
gdjs.Game_32OverCode.GDparedezinhaObjects1.length = 0;
gdjs.Game_32OverCode.GDparedezinhaObjects2.length = 0;
gdjs.Game_32OverCode.GDPortazinhaObjects1.length = 0;
gdjs.Game_32OverCode.GDPortazinhaObjects2.length = 0;
gdjs.Game_32OverCode.GDrealplayerObjects1.length = 0;
gdjs.Game_32OverCode.GDrealplayerObjects2.length = 0;
gdjs.Game_32OverCode.GDoutra_95paredezinhaObjects1.length = 0;
gdjs.Game_32OverCode.GDoutra_95paredezinhaObjects2.length = 0;
gdjs.Game_32OverCode.GDWASDObjects1.length = 0;
gdjs.Game_32OverCode.GDWASDObjects2.length = 0;
gdjs.Game_32OverCode.GDspawnpointObjects1.length = 0;
gdjs.Game_32OverCode.GDspawnpointObjects2.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDvoltarObjects1.length = 0;
gdjs.Game_32OverCode.GDvoltarObjects2.length = 0;
gdjs.Game_32OverCode.GDoutra_95outra_95paredezinhaObjects1.length = 0;
gdjs.Game_32OverCode.GDoutra_95outra_95paredezinhaObjects2.length = 0;
gdjs.Game_32OverCode.GDbackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDbackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDGameObjects1.length = 0;
gdjs.Game_32OverCode.GDGameObjects2.length = 0;
gdjs.Game_32OverCode.GDOverObjects1.length = 0;
gdjs.Game_32OverCode.GDOverObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);

return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
