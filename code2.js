gdjs.Cena_32de_32como_32jogarCode = {};
gdjs.Cena_32de_32como_32jogarCode.GDPlayerObjects1= [];
gdjs.Cena_32de_32como_32jogarCode.GDPlayerObjects2= [];
gdjs.Cena_32de_32como_32jogarCode.GDparedezinhaObjects1= [];
gdjs.Cena_32de_32como_32jogarCode.GDparedezinhaObjects2= [];
gdjs.Cena_32de_32como_32jogarCode.GDPortazinhaObjects1= [];
gdjs.Cena_32de_32como_32jogarCode.GDPortazinhaObjects2= [];
gdjs.Cena_32de_32como_32jogarCode.GDrealplayerObjects1= [];
gdjs.Cena_32de_32como_32jogarCode.GDrealplayerObjects2= [];
gdjs.Cena_32de_32como_32jogarCode.GDoutra_95paredezinhaObjects1= [];
gdjs.Cena_32de_32como_32jogarCode.GDoutra_95paredezinhaObjects2= [];
gdjs.Cena_32de_32como_32jogarCode.GDWASDObjects1= [];
gdjs.Cena_32de_32como_32jogarCode.GDWASDObjects2= [];
gdjs.Cena_32de_32como_32jogarCode.GDspawnpointObjects1= [];
gdjs.Cena_32de_32como_32jogarCode.GDspawnpointObjects2= [];
gdjs.Cena_32de_32como_32jogarCode.GDNewSpriteObjects1= [];
gdjs.Cena_32de_32como_32jogarCode.GDNewSpriteObjects2= [];
gdjs.Cena_32de_32como_32jogarCode.GDvoltarObjects1= [];
gdjs.Cena_32de_32como_32jogarCode.GDvoltarObjects2= [];
gdjs.Cena_32de_32como_32jogarCode.GDoutra_95outra_95paredezinhaObjects1= [];
gdjs.Cena_32de_32como_32jogarCode.GDoutra_95outra_95paredezinhaObjects2= [];
gdjs.Cena_32de_32como_32jogarCode.GDbackgroundObjects1= [];
gdjs.Cena_32de_32como_32jogarCode.GDbackgroundObjects2= [];
gdjs.Cena_32de_32como_32jogarCode.GDNewTextObjects1= [];
gdjs.Cena_32de_32como_32jogarCode.GDNewTextObjects2= [];
gdjs.Cena_32de_32como_32jogarCode.GDNewText2Objects1= [];
gdjs.Cena_32de_32como_32jogarCode.GDNewText2Objects2= [];


gdjs.Cena_32de_32como_32jogarCode.mapOfGDgdjs_46Cena_9532de_9532como_9532jogarCode_46GDvoltarObjects1Objects = Hashtable.newFrom({"voltar": gdjs.Cena_32de_32como_32jogarCode.GDvoltarObjects1});
gdjs.Cena_32de_32como_32jogarCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("voltar"), gdjs.Cena_32de_32como_32jogarCode.GDvoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32de_32como_32jogarCode.mapOfGDgdjs_46Cena_9532de_9532como_9532jogarCode_46GDvoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena de Título", false);
}}

}


};

gdjs.Cena_32de_32como_32jogarCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cena_32de_32como_32jogarCode.GDPlayerObjects1.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDPlayerObjects2.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDparedezinhaObjects1.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDparedezinhaObjects2.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDPortazinhaObjects1.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDPortazinhaObjects2.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDrealplayerObjects1.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDrealplayerObjects2.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDoutra_95paredezinhaObjects1.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDoutra_95paredezinhaObjects2.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDWASDObjects1.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDWASDObjects2.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDspawnpointObjects1.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDspawnpointObjects2.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDNewSpriteObjects1.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDNewSpriteObjects2.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDvoltarObjects1.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDvoltarObjects2.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDoutra_95outra_95paredezinhaObjects1.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDoutra_95outra_95paredezinhaObjects2.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDbackgroundObjects1.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDbackgroundObjects2.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDNewTextObjects1.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDNewTextObjects2.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDNewText2Objects1.length = 0;
gdjs.Cena_32de_32como_32jogarCode.GDNewText2Objects2.length = 0;

gdjs.Cena_32de_32como_32jogarCode.eventsList0(runtimeScene);

return;

}

gdjs['Cena_32de_32como_32jogarCode'] = gdjs.Cena_32de_32como_32jogarCode;
